import {
  ADD_DOCUMENT_NODE,
  DocumentActionTypes,
  DocumentNode,
  DocumentState,
  DOCUMENT_API_FAILURE,
  DOCUMENT_API_REQUEST,
  FETCH_DOCUMENT_SUCCESS,
  REMOVE_DOCUMENT_NODE,
  UPDATE_DOCUMENT_NODE
} from './types'

const initialState: DocumentState = {
  loading: false,
  nodeList: [{ content: '<h1>hello</h1>', id: '12345' }],
  error: ''
}

export default function documentReducer(
  state = initialState,
  action: DocumentActionTypes
): DocumentState {
  switch (action.type) {
    case DOCUMENT_API_REQUEST:
      return {
        ...state,
        loading: true
      }
    case DOCUMENT_API_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case FETCH_DOCUMENT_SUCCESS:
      return {
        ...state,
        nodeList: action.payload
      }
    case ADD_DOCUMENT_NODE: {
      return {
        ...state,
        loading: false,
        nodeList: [action.payload, ...state.nodeList]
      }
    }
    case REMOVE_DOCUMENT_NODE:
      return {
        ...state,
        loading: false,
        nodeList: state.nodeList.filter(
          (node: DocumentNode) => node.id !== action.payload
        )
      }
    case UPDATE_DOCUMENT_NODE:
      return {
        ...state,
        loading: false,
        nodeList: state.nodeList.map((node: DocumentNode) => {
          if (node.id === action.payload.id) node = action.payload
          return node
        })
      }
    default:
      return state
  }
}
