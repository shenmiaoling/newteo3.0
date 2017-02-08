import ServerTop from '../../src/components/ServerTop'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
function setup() {
  const renderer = TestUtils.createRenderer()
  renderer.render(
    <ServerTop/>
  )
const output = renderer.getRenderOutput()
  return {
    output: output,
    renderer: renderer
  }
}
describe('ServerTop component', () => {
  it('should render correctly', () => {
    const { output } = setup()
    const ServerTop = output.props.children

    expect(ServerTop[0].props.className).toEqual('server-top')
    const category = ServerTop[1]
    const IntroLink = category.props.children[0]

    expect(IntroLink.props.to).toEqual('/serverintro')

    const CategoryLink = category.props.children[1]
    expect(CategoryLink.props.to).toEqual('/servercategy')

    const ContactLink = category.props.children[2]
    expect(ContactLink.props.to).toEqual('/servercontact')

  })
})
