import React from 'react'

/** Connect is for connect DocumentContainer with store
 * ConnectedProps is for generate wrap type from redux props
 */
import { connect, ConnectedProps } from 'react-redux'
/******************************************************** */

import { generateNodeComponentHOC } from '../../components/node/node.component'
import { ContentComponent } from '../../components/content/content.component'

/** Importing AppDispatch, RootState and DocumentState types */
import { AppDispatch, RootState } from '../../store'
import { DocumentNode, DocumentState } from '../../store/types'
/******************************************************** */

/** Style module */
import styles from './document.m.scss'
/******************************************************** */

/** Importing redux actions (these are not asynchronous)
 * to dispatch async actions, it's most be create async funcs
 * to run this, as you can see in mapStateToProps object
 */
import {
  addDocumentNodeAction,
  documentAPIRequestAction,
  fetchDocumentSuccessAction,
  removeDocumentNodeAction,
  updateDocumentNodeAction
} from '../../store/actions'
/******************************************************** */

const mapStateToProps = (state: RootState): DocumentState => {
  const { nodeList, loading, error } = state.document
  return {
    nodeList,
    loading,
    error
  }
}

/** Async dispatches */
const mapStateToDispatch = {
  fetchNodes: () => async (dispatch: AppDispatch) => {
    dispatch(documentAPIRequestAction())
    await dispatch(fetchDocumentSuccessAction([]))
  },

  updateNode: (node: DocumentNode) => (dispatch: AppDispatch) => {
    dispatch(updateDocumentNodeAction(node))
  },

  removeNode: (id: string) => async (dispatch: AppDispatch) => {
    await dispatch(removeDocumentNodeAction(id))
  },

  addNode: (node: DocumentNode) => async (dispatch: AppDispatch) => {
    await dispatch(addDocumentNodeAction(node))
  }
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
    const { nodeList, updateNode, removeNode } = this.props
    return (
      <div className={styles.document}>
        {nodeList.map((node) => {
          const Node = generateNodeComponentHOC(
            <ContentComponent
              HTMLContent={node.content}
              id={node.id}
              update={updateNode}
              removeSelf={removeNode}
            />
          )
          return <Node key={node.id} />
        })}
      </div>
    )
  }
}
export default connector(DocumentComponent)
