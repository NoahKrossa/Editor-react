export declare type NodeType = {
  id: string
  content: string
}
export declare type DocumentPropsType = {
  nodeList: NodeType[]
}
export declare type NodeComponentPropsType = {
  id: string
  removeNode: (id: string) => void
}
export declare type ContentComponentPropsType = {
  HTMLContent: string
}

/** Redux */
interface Action<T, P> {
  type: T
  payload: P
}
export const DOCUMENT_API_REQUEST = 'DOCUMENT_API_REQUEST'
export const DOCUMENT_API_FAILURE = 'DOCUMENT_API_FAILURE'
export const FETCH_DOCUMENT_SUCCESS = 'FETCH_DOCUMENT_SUCCESS'
export const ADD_DOCUMENT_NODE = 'ADD_DOCUMENT_NODE'
export const REMOVE_DOCUMENT_NODE = 'REMOVE_DOCUMENT_NODE'
export const UPDATE_DOCUMENT_NODE = 'UPDATE_DOCUMENT_NODE'

/** Actions */
export interface DocumentAPIRequestAction
  extends Action<typeof DOCUMENT_API_REQUEST, null> {}

export interface DocumentAPIFailureAction
  extends Action<typeof DOCUMENT_API_FAILURE, string> {}

export interface FetchDocumentSuccessAction
  extends Action<typeof FETCH_DOCUMENT_SUCCESS, NodeType[]> {}

export interface AddDocumentNodeAction
  extends Action<typeof ADD_DOCUMENT_NODE, NodeType> {}

export interface RemoveDocumentNodeAction
  extends Action<typeof REMOVE_DOCUMENT_NODE, { id: string }> {}

export interface UpdateDocumentNodeAction
  extends Action<
    typeof UPDATE_DOCUMENT_NODE,
    { id: string; updatedContent: string }
  > {}

export declare type DocumentActionTypes =
  | DocumentAPIRequestAction
  | DocumentAPIFailureAction
  | FetchDocumentSuccessAction
  | AddDocumentNodeAction
  | RemoveDocumentNodeAction
  | UpdateDocumentNodeAction
