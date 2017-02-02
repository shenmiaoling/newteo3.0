import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import booleans from './booleans'
import projects from './projects'
import project from './project'
const rootReducer = combineReducers({
  booleans,
  projects,
  project,
  routing
})
export default rootReducer
