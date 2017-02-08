//注释掉require('./style')才可以运行
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
          online: false
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
    console.log(Tips)
    expect(Title.props.children[0].props.children).toEqual('name text')
    expect(Title.props.children[1].props.children).toEqual('introduction text...')
    const Description = Title.props.children[2].props.children
    expect(Description.props.children).toEqual('description text...')
    // const Card = Link.props.children
    // const CardTitle = Card.props.children[0]
    // const CardMedia = Card.props.children[1]
    // const CardText  = Card.props.children[2]

    // expect(CardTitle.props.title).toEqual('this is article title')
    // expect(CardTitle.props.subtitle).toEqual('author')

    // expect(CardMedia.props.children.props.src).toEqual('cover url')
    // expect(CardText.props.children).toEqual('some text')

  })
})
