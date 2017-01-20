import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render(){
<<<<<<< HEAD
    const { children,actions,text } = this.props
=======
    const { actions,text } = this.props
    // console.log(this.props);
>>>>>>> a42fb2f97113964a3ab81be2db7bd19eab9a5f69
    return (
      <div>
      {
          children && React.cloneElement(children, {
            actions: actions,
            text: text
          })
        }
      </div>
      )
  }
}
function mapStateToProps(state) {
  return { text: state.text }
}
//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
  return{
    actions : bindActionCreators(Actions,dispatch)
  }
}
//这里实际上给了AppContainer两个props：text和actions
export default connect(
  mapStateToProps,
  mapDispatchToProps)(App)