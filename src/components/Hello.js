import React, { PropTypes } from 'react'
 class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.actions.changeText()
  }
  render(){
    const {text} = this.props
    // console.log(this.props)
    return (
      <h1
    onClick={this.handleClick}>{text} </h1>
      )
  }
}
export default Hello


