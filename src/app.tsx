import React from 'react'
import { node } from 'webpack'
import { DocumentContainer } from './components/document'

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <DocumentContainer />
      </div>
    )
  }
}
