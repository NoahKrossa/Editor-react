import React from 'react'
import { generateNodeComponentHOC } from './node'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../store'
import { DocumentNode, DocumentState } from '../store/types'

const mapStateToProps = (state: RootState): DocumentState => {
  const { nodeList, loading, error } = state.document
  return {
    nodeList,
    loading,
    error
  }
}
const mapStateToDispatch = (dispatch: any) => {
  return {
    fetchNodes: () => {},
    removeNode: (id: string) => {},
    updtateNode: (node: DocumentNode) => {},
    addNode: (node: DocumentNode) => {}
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
export default connector(DocumentComponent)
