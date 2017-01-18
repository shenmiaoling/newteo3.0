import { expect } from 'chai';
import reducer from '../../src/reducers/index.js'

describe.skip('reducer test', ()=>{
  it('handle CHANGE_TEXT', ()=>{
    const state = 'Hello'
    const action = { type: 'CHANGE_TEXT'}
    const nextState = reducer(state, action)
    expect(nextState).to.not.equal({
      text: 'Stark'
    })
  })
})
