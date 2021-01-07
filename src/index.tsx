import React from 'react'
import ReactDOM from 'react-dom'
import AppComponent from './app'
import Store from './store/index'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={Store}>
    <AppComponent />
  </Provider>,
  document.querySelector('#root')
)
