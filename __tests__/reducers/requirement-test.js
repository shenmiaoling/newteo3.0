
import requirement from '../../src/reducers/requirement'

let InitState =
{
  status:'',
  data: [],
  errMsg: ''
}

describe('requirement reducer', () => {
  it('should return the initial state', () => {
    expect(requirement(undefined, {})).toEqual(InitState)
  })
  it('should handle FETCH_PROJECT_LIST_REQUEST', () => {
    expect(
      requirement([], {
      type: 'FETCH_PROJECT_LIST_REQUEST'
    })
    ).toEqual({
      status:'fetch_start',
    })
  })
  it('should handle FETCH_PROJECT_LIST_SUCCESS', () => {
    expect(
      requirement([], {
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
      requirement([], {
      type: 'FETCH_PROJECT_LIST_FAILURE',
      err: 'oops'
    })
    ).toEqual({
      status:'fetch_failure',
      errMsg: 'oops'
    })
  })
})
