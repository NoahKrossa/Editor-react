export interface DocumentNode {
  id: string
  content: string
  toolbar?: {
    bold: boolean
    italic: boolean
    underline: boolean
  }
}

export interface DocumentState {
  nodeList: DocumentNode[]
  loading: boolean
  error: string
}

export const DOCUMENT_API_REQUEST = 'DOCUMENT_API_REQUEST'
export const DOCUMENT_API_FAILURE = 'DOCUMENT_API_FAILURE'
export const FETCH_DOCUMENT_SUCCESS = 'FETCH_DOCUMENT_SUCCESS'
export const ADD_DOCUMENT_NODE = 'ADD_DOCUMENT_NODE'
export const REMOVE_DOCUMENT_NODE = 'REMOVE_DOCUMENT_NODE'
export const UPDATE_DOCUMENT_NODE = 'UPDATE_DOCUMENT_NODE'
export const UPDATE_TOOLBAR = 'UPDATE_TOOLBAR'

/** Actions */
interface Action<T, P> {
  type: T
  payload: P
}

export interface DocumentAPIRequestAction
  extends Action<typeof DOCUMENT_API_REQUEST, null> {}

export interface DocumentAPIFailureAction
  extends Action<typeof DOCUMENT_API_FAILURE, string> {}

export interface FetchDocumentSuccessAction
  extends Action<typeof FETCH_DOCUMENT_SUCCESS, DocumentNode[]> {}

export interface AddDocumentNodeAction
  extends Action<typeof ADD_DOCUMENT_NODE, DocumentNode> {}

export interface RemoveDocumentNodeAction
  extends Action<typeof REMOVE_DOCUMENT_NODE, string> {}

export interface UpdateDocumentNodeAction
  extends Action<typeof UPDATE_DOCUMENT_NODE, DocumentNode> {}

/** Toolbar */
export type ToolbarButtonType = {
  name: 'underline' | 'italic' | 'bold'
  state: boolean
  nodeId: string
}
export interface UpdateToolbar
  extends Action<typeof UPDATE_TOOLBAR, ToolbarButtonType> {}

export declare type DocumentActionTypes =
  | DocumentAPIRequestAction
  | DocumentAPIFailureAction
  | FetchDocumentSuccessAction
  | AddDocumentNodeAction
  | RemoveDocumentNodeAction
  | UpdateDocumentNodeAction
  | UpdateToolbar
