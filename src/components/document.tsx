import React from 'react'
import { generateNodeComponentHOC } from './node'
import ContentEditable from 'react-contenteditable'
import { connect } from 'react-redux'
import { RootState } from '../store'
import { ContentComponentPropsType, NodeType } from '../store/types'
import { fetchDocumentSuccessAction } from '../store/actions'

interface DocumentComponentProps {
  nodeList: NodeType[]
  loading: boolean
  error: string
}
interface DocumentComponentDispatchs {
  fetchNodes: () => void
  removeNode: (id: string) => void
  updtateNode: (node: NodeType) => void
  addNode: (node: NodeType) => void
}
type DocumentComponentPropsType = DocumentComponentDispatchs &
  DocumentComponentProps

class DocumentComponent extends React.Component<DocumentComponentPropsType> {
  render() {
    return (
      <div>
        {/* {nodeList.map((node) => {
          const Node = generateNodeComponentHOC(
            <ContentComponent HTMLContent={node.content} />
          )
          return <Node key={node.id} />
        })} */}
      </div>
    )
  }
}

function ContentComponent({ HTMLContent }: ContentComponentPropsType) {
  function handleChanges(e: any) {}
  return <ContentEditable html={HTMLContent} onChange={handleChanges} />
}

const mapStateToProps = (state: RootState): DocumentComponentProps => {
  const { nodeList, loading, error } = state.document
  return {
    nodeList,
    loading,
    error
  }
}
const mapStateToDispatch = (dispatch: any): DocumentComponentDispatchs => {
  return {
    fetchNodes: () => {},
    removeNode: (id: string) => {},
    updtateNode: (node: NodeType) => {},
    addNode: (node: NodeType) => {}
  }
}

export const DocumentContainer = connect<
  DocumentComponentProps,
  DocumentComponentDispatchs
>(
  mapStateToProps,
  mapStateToDispatch
)(DocumentComponent)
