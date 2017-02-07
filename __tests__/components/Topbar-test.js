import Topbar from '../../src/components/Topbar'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
describe('Topbar render',()=>{
  let TopbarTest = TestUtils.renderIntoDocument(
    <Topbar/>
    )
  it('输入框',()=>{
    let topTitle = TestUtils.scryRenderedDOMComponentsWithClass(TopbarTest,'title')
    expect(topTitle.textContent).toBe('新潮科技')
  })
})
