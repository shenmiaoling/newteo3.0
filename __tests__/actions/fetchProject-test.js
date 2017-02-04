
import { fetchProject } from '../../src/actions'
import { API_URL } from '../../constant'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('fetchProject action', () => {
  it('Get project should sucess with correctly api', () => {
    const store = mockStore({})
    return  store.dispatch(fetchProject(`${API_URL}/partner`))
      .then(() => {
        expect(store.getActions()[1].type).toEqual('FETCH_PROJECT_SUCCESS')
      })
  })
})
