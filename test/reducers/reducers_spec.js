import expect from 'expect'
import myApp from '../../src/reducers/index.js'

describe('reducer test', ()=>{
  it('handle CHANGE_TEXT', ()=>{
    // const state = 'Hello'
    // const action = { type: 'CHANGE_TEXT'}
    // const nextState = reducer(state, action)
    expect(myApp(undefined,{})).toEqual({text: 'Hello'})
  })
})
