import Topbar from '../../src/components/Topbar'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
function setup() {
  const renderer = TestUtils.createRenderer()
  renderer.render(
    <Topbar location={{pathname:'/'}} sideBar={false}/>
  )
const output = renderer.getRenderOutput()
  return {
    output: output,
    renderer: renderer
  }
}
describe('Topbar component', () => {
  it('should render correctly', () => {
    const { output } = setup()
    expect(output.props.className).toEqual('topbar')
    const TopBox  = output.props.children
    expect(TopBox[0].props.className).toEqual('topbar-contain')
    expect(TopBox[1].props.className).toEqual('wrapper')
    const IndexLink = TopBox[0].props.children
    expect(IndexLink[0].props.to).toEqual('/')
  })
})
