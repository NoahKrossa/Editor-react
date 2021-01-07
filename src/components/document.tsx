import React from 'react'
import { generateNodeComponentHOC } from './node'
import ContentEditable from 'react-contenteditable'
import { connect } from 'react-redux'
import { RootState } from '../store'
import { fetchDocumentSuccessAction } from '../store/actions'
import { DocumentNode, DocumentState } from '../store/types'

interface DocumentComponentProps {
  nodeList: DocumentNode[]
  loading: boolean
  error: string
}
interface DocumentComponentDispatchs {
  fetchNodes: () => void
  removeNode: (id: string) => void
  updtateNode: (node: DocumentNode) => void
  addNode: (node: DocumentNode) => void
}
type DocumentComponentPropsType = DocumentComponentDispatchs &
  DocumentComponentProps

class DocumentComponent extends React.Component<DocumentComponentPropsType> {
  constructor(props: DocumentComponentPropsType) {
    super(props)
  }

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

function ContentComponent({ HTMLContent }: { HTMLContent: string }) {
  function handleChanges(e: any) {}
  return <ContentEditable html={HTMLContent} onChange={handleChanges} />
}

const mapStateToProps = (state: RootState): DocumentState => {
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
    updtateNode: (node: DocumentNode) => {},
    addNode: (node: DocumentNode) => {}
  }
}

export const DocumentContainer = connect<
  DocumentComponentProps,
  DocumentComponentDispatchs
>(
  mapStateToProps,
  mapStateToDispatch
)(DocumentComponent)
