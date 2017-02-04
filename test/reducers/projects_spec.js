//test done
import expect from 'expect'
import projects from '../../reducers/projects'

let InitState =
{
  status:'',
  data: '',
  errMsg: ''
}

describe.skip('projects reducer', () => {
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
      ArticleList: 'hello'
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
      err: 'world'
    })
    ).toEqual({
      status:'fetch_failure',
      errMsg: 'world'
    })
  })
})
