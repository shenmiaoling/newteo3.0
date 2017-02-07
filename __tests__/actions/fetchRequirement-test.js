
import { fetchRequirement } from '../../src/actions'
import { API_URL } from '../../constant'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
// import * as types from '../../src/ActionTypes'
// import nock from 'nock'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('fetchRequirement action', () => {
  // beforeEach(function (done) {
  //       window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  //       setTimeout(function () {
  //           done();
  //       }, 500);
  //   });
  it('Get projects should sucess with correctly api', () => {
    const mockUser = {name:"testname",phone:"13535654520",company:"teststring",info:"teststring"}
    const store = mockStore({})

    return  store.dispatch(fetchRequirement(`${API_URL}/requirement?token=newteo3.0`,mockUser))
      .then(() => {
        expect(store.getActions()[1].type).toEqual('FETCH_REQUIREMENT_SUCCESS')
      })
  })
})
