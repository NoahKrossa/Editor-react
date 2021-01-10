import React from 'react'
import { node } from 'webpack'
import DocumentContainer from './containers/document/document.container'
import './styles.css'

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <DocumentContainer />
      </div>
    )
  }
}
