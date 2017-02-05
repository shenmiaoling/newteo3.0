import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import booleans from './booleans'
import projects from './projects'
import project from './project'
import requirement from './requirement'
import { modelReducer, formReducer } from 'react-redux-form'
const rootReducer = combineReducers({
  booleans,
  projects,
  project,
  requirement,
  routing,
  user: modelReducer('user', { name: '', phone:'', company:'', info:''}),
  userForm: formReducer('user')
})
export default rootReducer
