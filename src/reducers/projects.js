import superagent from 'superagent'
import {API_URL} from '../../constant'
let initialState = {
  status: '',
  data: [],
  errMsg: '',
  end: false
}
export default function projects (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROJECT_LIST_REQUEST':
      return Object.assign({}, state, {status: 'fetch_start', loading: true})
    case 'FETCH_PROJECT_LIST_SUCCESS':
      return Object.assign({}, state, {status: 'fetch_success',data: action.ProjectList, end: action.end})
    case 'FETCH_PROJECT_LIST_FAILURE':
      return Object.assign({},state,{status:'fetch_fail', errMsg: action.err})
    default:
      return state
  }
}
