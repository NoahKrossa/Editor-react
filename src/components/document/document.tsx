import React from 'react'
import {
  ContentComponentPropsType,
  DocumentPropsType
} from '../../declarations/document'
import { generateNodeComponentHOC } from './node'
import ContentEditable from 'react-contenteditable'

export default class DocumentComponent extends React.Component<
  DocumentPropsType,
  {}
> {
  constructor(props: DocumentPropsType) {
    super(props)
  }
  render() {
    const { nodeList } = this.props
    return (
      <div>
        {nodeList.map((node) => {
          const Node = generateNodeComponentHOC(
            <ContentComponent HTMLContent={node.content} />
          )
          return <Node key={node.id} />
        })}
      </div>
    )
  }
}

function ContentComponent({ HTMLContent }: ContentComponentPropsType) {
  function handleChanges(e: any) {}
  return <ContentEditable html={HTMLContent} onChange={handleChanges} />
}
