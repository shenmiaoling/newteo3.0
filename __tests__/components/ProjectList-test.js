
import ProjectList from '../../src/components/ProjectList'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
function setup(propOverrides) {

  const props = Object.assign({
    projects: {
      data:[
        {
          name:'product name',
          _id:'1',
          logo:"http://example/images/1.jpeg",
          }
      ]
    },
  }, propOverrides)

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <ProjectList {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}
describe('ProjectList component', () => {
  it('should render correctly', () => {
    const { output } = setup()

    expect(output.props.className).toEqual('product')

    const List = output.props.children[2]
    const Link = List[0]

    expect(Link.props.to).toEqual('/detail/1')

    const Product = Link.props.children
    const ImgSrc = Product.props.children[0]

    expect(ImgSrc.props.src).toEqual('http://example/images/1.jpeg')

    const ProductName = Product.props.children[1]

    expect(ProductName.props.children).toEqual('product name')
  })
})
