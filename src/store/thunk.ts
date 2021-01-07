import { Action } from 'redux'
import {
  documentAPIFailureAction,
  documentAPIRequestAction,
  fetchDocumentSuccessAction
} from './actions'
import { RootState } from './index'
import { ThunkAction } from 'redux-thunk'
import { DocumentNode } from './types'

export const thunkFetchData = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<DocumentNode[]>
> => async (dispatch: any) => {
  dispatch(documentAPIRequestAction)
  try {
    // simulate http request
    setTimeout(() => {
      dispatch(
        fetchDocumentSuccessAction([
          {
            id: '12345',
            content: '<h1>Hello world!</h1>'
          }
        ])
      )
    }, 3000)
  } catch (err) {
    dispatch(documentAPIFailureAction(err))
  }
}
