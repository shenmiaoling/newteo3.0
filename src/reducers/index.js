import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import reducers from './reducers'

const rootReducer = combineReducers({
  reducers,
  routing
})

export default rootReducer
