import React from 'react'
import { node } from 'webpack'
import DocumentComponent from './components/document/document'
import { NodeType } from './declarations/document'

const nodeList: Array<NodeType> = [
  { id: '1234', content: '<h1>Hola mundo!</h1>' }
]

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <DocumentComponent nodeList={nodeList} />
      </div>
    )
  }
}
