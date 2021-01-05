import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { DocumentPropsType } from '../../declarations/document'

export default class DocumentComponent extends React.Component<
  DocumentPropsType,
  {}
> {
  constructor(props: DocumentPropsType) {
    super(props)
  }
  render() {
    const { nodeList } = this.props
    const Node = generateNodeComponentHOC()
    return (
      <div>
        <Node />
      </div>
    )
  }
}

function ContentComponent({ HTMLContent }: { HTMLContent: string }) {
  return <>{HTMLReactParser(HTMLContent)}</>
}

function generateNodeComponentHOC(): React.ComponentType<any> {
  return class NodeComponent extends React.Component<{ id: string }, {}> {
    render() {
      return <div>NODE COMPONENT IN HOC</div>
    }
  }
}
