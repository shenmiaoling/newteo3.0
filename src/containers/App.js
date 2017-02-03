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
    const { children,actions,tips,location,sideBar,projects,project,requirement } = this.props
    return (
      <div>
        <Topbar location={location} sideBar={sideBar} actions={actions}/>
      {
          children && React.cloneElement(children, {
            actions: actions,
            tips: tips,
            location: location,
            sideBar: sideBar,
            projects: projects,
            project: project,
            requirement: requirement
          })
        }
        <Footer/>
      </div>
      )
  }
}
function mapStateToProps(state) {
  return {
    text: state.booleans.text,
    tips: state.booleans.tips,
    sideBar: state.booleans.sideBar,
    projects: state.projects,
    project: state.project,
    requirement: state.requirement
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
