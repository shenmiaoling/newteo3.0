import React from 'react'
import App from '../components/App.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
// class AppContainer extends React.Component {
//   render() {
//     const { actions,text } = this.props
//     return <App actions={actions} text={text} />;
//   }
// }
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
