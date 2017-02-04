let InitState = {
  post: false,
  status:'',
  errMsg: '',
  userinfo:{
    name:'',
    phone:'',
    company:'',
    info:''
  }
}

export default function requirement (state = InitState, action) {
  switch (action.type) {
    case 'FETCH_REQUIREMENT_REQUEST':
      return Object.assign({}, state, {status: 'fetch_start'})
    case 'FETCH_REQUIREMENT_SUCCESS':
      return Object.assign({}, state, {status: 'fetch_success', post: true})
    case 'FETCH_REQUIREMENT_FAILURE':
      return Object.assign({}, state, {status: 'fetch_failure', errMsg: action.err})
    default:
      return state
  }
}
