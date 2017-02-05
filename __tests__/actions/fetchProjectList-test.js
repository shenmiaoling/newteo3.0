
import { fetchProjectList } from '../../src/actions'
import { API_URL } from '../../constant'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('fetchProjectList action', () => {
  it('Get projects should sucess with correctly api', () => {
    const store = mockStore({})
    return  store.dispatch(fetchProjectList(`${API_URL}/partner`))
      .then(() => {
        expect(store.getActions()[1].type).toEqual('FETCH_PROJECT_LIST_SUCCESS')
      })
  })
})
