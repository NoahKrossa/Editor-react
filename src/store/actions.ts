import {
  ADD_DOCUMENT_NODE,
  DocumentActionTypes,
  DOCUMENT_API_FAILURE,
  DOCUMENT_API_REQUEST,
  FETCH_DOCUMENT_SUCCESS,
  NodeType,
  REMOVE_DOCUMENT_NODE,
  UPDATE_DOCUMENT_NODE
} from './types'

export function documentAPIRequestAction(): DocumentActionTypes {
  return {
    type: DOCUMENT_API_REQUEST,
    payload: null
  }
}

export function documentAPIFailureAction(
  errorMessage: string
): DocumentActionTypes {
  return {
    type: DOCUMENT_API_FAILURE,
    payload: errorMessage
  }
}

export function fetchDocumentSuccessAction(
  nodeList: NodeType[]
): DocumentActionTypes {
  return {
    type: FETCH_DOCUMENT_SUCCESS,
    payload: nodeList
  }
}

export function addDocumentNodeAction(node: NodeType): DocumentActionTypes {
  return {
    type: ADD_DOCUMENT_NODE,
    payload: node
  }
}

export function removeDocumentNodeAction(id: string): DocumentActionTypes {
  return {
    type: REMOVE_DOCUMENT_NODE,
    payload: id
  }
}

export function updateDocumentNodeAction(node: NodeType): DocumentActionTypes {
  return {
    type: UPDATE_DOCUMENT_NODE,
    payload: node
  }
}
