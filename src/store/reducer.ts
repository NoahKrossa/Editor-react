import {
  ADD_DOCUMENT_NODE,
  DocumentActionTypes,
  DocumentNode,
  DocumentState,
  DOCUMENT_API_FAILURE,
  DOCUMENT_API_REQUEST,
  FETCH_DOCUMENT_SUCCESS,
  REMOVE_DOCUMENT_NODE,
  UPDATE_DOCUMENT_NODE,
  UPDATE_TOOLBAR
} from './types'

const initialState: DocumentState = {
  loading: false,
  nodeList: [{ content: '<h1><strong>hello</strong></h1>', id: '12345' }],
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
        nodeList: state.nodeList.map((node) => {
          if (node.id === action.payload.id) node = action.payload
          return node
        })
      }

    case UPDATE_TOOLBAR:
      return {
        ...state,
        nodeList: state.nodeList.map((node: DocumentNode) => {
          if (node.id === action.payload.nodeId) {
            if (!node.toolbar)
              node.toolbar = {
                bold: false,
                italic: false,
                underline: false
              }
            node.toolbar[action.payload.name] = action.payload.state
          }
          return node
        })
      }
    default:
      return state
  }
}
