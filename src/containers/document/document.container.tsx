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
import { DocumentState } from '../../store/types'
/******************************************************** */

/** Style module */
import styles from './document.m.scss'
/******************************************************** */

/** Importing redux actions (these are not asynchronous)
 * to dispatch async actions, it's most be create async funcs
 * to run this, as you can see in mapStateToProps object
 */
import {
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
