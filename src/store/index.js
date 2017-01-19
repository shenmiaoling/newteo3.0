import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers/reducers'
const configureStore = (preloadedState) => createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  )

export default configureStore
