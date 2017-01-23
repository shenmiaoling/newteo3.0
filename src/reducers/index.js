import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import reducers from './reducers'
import projects from './projects'

const rootReducer = combineReducers({
  reducers,
  projects,
  routing
})
export default rootReducer
