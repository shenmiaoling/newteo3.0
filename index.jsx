import React from 'react'
import { render } from 'react-dom'
import { createStore,bindActionCreators } from 'redux'
import { Provider,connect } from 'react-redux'
//action
function changeText(){
  return {
    type: 'CHANGE_TEXT'
  }
}
function buttonClick(){
  return {
    type: 'BUTTON_CLICK'
  }
}
//reducer
//最初的状态是'Hello'
const initialState = {
  text: 'Hello'
}
function myApp(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: state.text=='Hello'?'Stark':'Hello'
      }
    case 'BUTTON_CLICK':
      return {
        text: 'You just click button'
      }
    default:
      return {
        text: 'Hello'
      }
  }
}
//store
let store = createStore(myApp)
//组件Hello
class Hello extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.actions.changeText()
  }
  render() {
    return (
      <h1 onClick={this.handleClick}> {this.props.text} </h1>
      )
  }
}
//组件 Change
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
//组件 App
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    //下面connect方法把state和action给props了
    const { actions,text } = this.props
    return (
      <div>
        <Hello actions={actions} text={text}/>
        <Change actions={actions}/>
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
    actions : bindActionCreators({changeText: changeText,buttonClick:buttonClick},dispatch)
  }
}
//这里实际上给了App两个props：text和actions，即第4步中的那段注释
App = connect(mapStateToProps,mapDispatchToProps)(App)
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
  )
