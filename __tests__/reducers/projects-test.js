
import projects from '../../src/reducers/projects'

let InitState =
{
  status:'',
  data: [],
  errMsg: ''
}

describe('projects reducer', () => {
  it('should return the initial state', () => {
    expect(projects(undefined, {})).toEqual(InitState)
  })
  it('should handle FETCH_PROJECT_LIST_REQUEST', () => {
    expect(
      projects([], {
      type: 'FETCH_PROJECT_LIST_REQUEST'
    })
    ).toEqual({
      status:'fetch_start',
    })
  })
  it('should handle FETCH_PROJECT_LIST_SUCCESS', () => {
    expect(
      projects([], {
      type: 'FETCH_PROJECT_LIST_SUCCESS',
      ProjectList: 'hello'
    })
    ).toEqual({
      status:'fetch_success',
      data: 'hello'
    })
  })
  it('should handle FETCH_PROJECT_LIST_FAILURE', () => {
    expect(
      projects([], {
      type: 'FETCH_PROJECT_LIST_FAILURE',
      err: 'oops'
    })
    ).toEqual({
      status:'fetch_failure',
      errMsg: 'oops'
    })
  })
})
