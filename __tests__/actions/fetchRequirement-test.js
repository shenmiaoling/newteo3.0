
import { fetchRequirement } from '../../src/actions'
import { API_URL } from '../../constant'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('fetchRequirement action', () => {
  it('Post requirement should sucess with correctly api', () => {
    const expectedActions = [
        { type: type.FETCH_REQUIREMENT_REQUEST },
        { type: type.FETCH_REQUIREMENT_SUCCESS,
          body: {name:"teststring",phone:"13568225380",company:"teststring",info:"teststring"}
        }]
    const store = mockStore({})
    return  store.dispatch(fetchRequirement(`${API_URL}/requirement`))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
