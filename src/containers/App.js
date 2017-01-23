import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    // console.log(this.props);
    const { children,actions,text,tips,location,sideBar,project } = this.props
    return (
      <div>
        <Topbar location={location} sideBar={sideBar} actions={actions}/>
      {
          children && React.cloneElement(children, {
            actions: actions,
            text: text,
            tips: tips,
            location: location,
            sideBar: sideBar,
            project: project
          })
        }
        <Footer/>
      </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    text: state.reducers.text,
    tips: state.reducers.tips,
    sideBar: state.reducers.sideBar,
    project: state.projects.project
    }
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
