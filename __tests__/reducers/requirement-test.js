
import requirement from '../../src/reducers/requirement'

let InitState =
{
  status:'',
  errMsg: '',
  end: false
}

describe('requirement reducer', () => {
  it('should return the initial state', () => {
    expect(requirement(undefined, {})).toEqual(InitState)
  })
  it('should handle FETCH_REQUIREMENT_REQUEST', () => {
    expect(
      requirement([], {
      type: 'FETCH_REQUIREMENT_REQUEST'
    })
    ).toEqual({
      status:'fetch_start',
    })
  })
  it('should handle FETCH_REQUIREMENT_SUCCESS', () => {
    expect(
      requirement([], {
      type: 'FETCH_REQUIREMENT_SUCCESS',
      end: true
    })
    ).toEqual({
      status:'fetch_success',
      end: true
    })
  })
  it('should handle FETCH_REQUIREMENT_FAILURE', () => {
    expect(
      requirement([], {
      type: 'FETCH_REQUIREMENT_FAILURE',
      err: 'oops'
    })
    ).toEqual({
      status:'fetch_failure',
      errMsg: 'oops'
    })
  })
})
