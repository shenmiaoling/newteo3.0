
import project from '../../src/reducers/project'

let InitState =
{
  status:'',
  data: '',
  errMsg: ''
}

describe('project reducer', () => {
  it('should return the initial state', () => {
    expect(project(undefined, {})).toEqual(InitState)
  })
  it('should handle FETCH_PROJECT_REQUEST', () => {
    expect(
      project([], {
      type: 'FETCH_PROJECT_REQUEST'
    })
    ).toEqual({
      status:'fetch_start',
    })
  })
  it('should handle FETCH_PROJECT_SUCCESS', () => {
    expect(
      project([], {
      type: 'FETCH_PROJECT_SUCCESS',
      Project: 'new'
    })
    ).toEqual({
      status:'fetch_success',
      data: 'new'
    })
  })
  it('should handle FETCH_PROJECT_FAILURE', () => {
    expect(
      project([], {
      type: 'FETCH_PROJECT_FAILURE',
      err: 'oops'
    })
    ).toEqual({
      status:'fetch_failure',
      errMsg: 'oops'
    })
  })
})
