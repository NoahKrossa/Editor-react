import { createStore, applyMiddleware, combineReducers } from 'redux'
import Thunk from 'redux-thunk'
import documentReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  document: documentReducer
})

export type RootState = ReturnType<typeof rootReducer>

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
)

export default Store
