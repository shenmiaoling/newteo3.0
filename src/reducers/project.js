let InitState = 
{
  status:'',
  data: '',
  errMsg: ''
}

export default function project (state = InitState, action) {
	switch (action.type) {
		case 'FETCH_PROJECT_REQUEST':
			return Object.assign({}, state, {status: 'fetch_start'})
		case 'FETCH_PROJECT_SUCCESS':
			return Object.assign({}, state, {status: 'fetch_success', data: action.Project})
		case 'FETCH_PROJECT_FAILURE':
			return Object.assign({}, state, {status: 'fetch_failure', errMsg: action.err})
		default:
			return state
	}
}