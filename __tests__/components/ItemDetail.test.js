
import ItemDetail from '../../src/components/ItemDetail'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
function setup(propOverrides) {

  const props = Object.assign({
    project: {
      data:{
        name:'name text',
        introduction:"introduction text...",
        description:"description text...",
        products:[
          {
            img:[{img_url:'img_url'}],
            title:"title",
            online: true
          }
        ]
      }
    },
  }, propOverrides)

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <ItemDetail {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}
describe('ItemDetail component', () => {
  it('should render correctly', () => {
    const { output } = setup()
    expect(output.props.className).toEqual('detail-card')

    const Title = output.props.children[0]
    const Context = output.props.children[1]
    const Tips = output.props.children[2]
    const card = Context.props.children[0].props.children.props.children[1]
    const status = card.props.children[1].props.children

    expect(Title.props.children[0].props.children).toEqual('name text')

    expect(Title.props.children[1].props.children).toEqual('introduction text...')
    const Description = Title.props.children[2].props.children

    expect(Description.props.children).toEqual('description text...')

    expect(status.props.className).toEqual('card-btn')
  })
})
