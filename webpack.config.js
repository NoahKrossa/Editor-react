const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'src')
const STATIC_DIR = path.resolve(__dirname, 'public')
const BUILD_DIR = path.resolve(__dirname, 'dist')

module.exports = (env) => {
  const mode = env.development ? 'development' : 'production'

  return {
    entry: [path.resolve(APP_DIR, 'index.tsx')],
    output: {
      filename: 'app.bundle.js',
      path: BUILD_DIR
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css'],
      alias: {
        src: path.resolve(APP_DIR)
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['ts-loader']
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(css|scss)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                }
              }
            }
          ],
          include: /\.m\.css$/
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader'],
          exclude: /\.m\.css$/
        }
      ]
    },
    mode,
    plugins: [
      new ESLintPlugin({
        extensions: ['ts', 'tsx']
      }),
      new HTMLWebpackPlugin({
        template: path.resolve(STATIC_DIR, 'index.html'),
        filename: 'index.html'
      }),
      new CleanTerminalPlugin({
        message: `dev server running...`,
        onlyInWatchMode: false
      })
    ],
    devServer: {
      historyApiFallback: true,
      stats: {
        all: false,
        colors: true,
        errors: true
      },
      port: 8000
    },
    devtool: 'source-map'
  }
}
