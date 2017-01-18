import React, { PropTypes } from 'react'
// const PropTypes = {
//   handleClick: PropTypes.func.isRequired
// }
class Change extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.actions.buttonClick()
  }
  render(){
    return (
      <button onClick={this.handleClick}>change</button>
      )
  }
}
// Change.PropTypes = PropTypes;
export default Change
