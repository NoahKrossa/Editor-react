import React from 'react'
import { generateNodeComponentHOC, ContentComponent } from './node'
import { connect, ConnectedProps } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { DocumentState } from '../store/types'
import styles from './document.m.scss'
import {
  documentAPIRequestAction,
  fetchDocumentSuccessAction,
  removeDocumentNodeAction,
  updateDocumentNodeAction
} from '../store/actions'

const mapStateToProps = (state: RootState): DocumentState => {
  const { nodeList, loading, error } = state.document
  return {
    nodeList,
    loading,
    error
  }
}
const mapStateToDispatch = {
  fetchNodes: () => async (dispatch: AppDispatch) => {
    dispatch(documentAPIRequestAction())
    await dispatch(
      fetchDocumentSuccessAction([{ id: '123', content: '<h2>sdfsfs</h2>' }])
    )
  },
  updateNode: () => async (dispatch: AppDispatch) => {},
  removeNode: () => async (dispatch: AppDispatch) => {},
  addNode: () => async (dispatch: AppDispatch) => {}
}

const connector = connect(mapStateToProps, mapStateToDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
  /** own props */
}

/** Component */
class DocumentComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { nodeList, updateNode } = this.props

    return (
      <div className={styles.document}>
        {nodeList.map((node) => {
          const Node = generateNodeComponentHOC(
            <ContentComponent
              HTMLContent={node.content}
              id={node.id}
              update={updateNode}
            />
          )
          return <Node key={node.id} />
        })}
      </div>
    )
  }
}
export default connector(DocumentComponent)
