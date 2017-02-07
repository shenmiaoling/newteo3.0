import React,{ Component } from 'react'
import { IndexLink, Link } from 'react-router'
require("./style.styl")
export default class Topbar extends Component {
    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
  }
  handleClick(){
    this.props.actions.handleMenu()
  }
  hideMenu(){
    this.props.actions.hideMenu()
  }
  render() {
    const {sideBar} = this.props
    return (
      <div className="topbar">
        <div>
        <IndexLink to="/">
          <img src="/images/logo.png" className="logo"></img>
          <span className="title">新潮科技</span>
        </IndexLink>
        <div className="menu-icon">
          <span className="iconfont icon-toggle-left" onClick={this.handleClick}></span>
        </div>
        </div>
        <div className={sideBar?"wrapper-display":"wrapper"}>
          <div id="slide">
          <div id="slide-icon"><span className="iconfont icon-toggle-button" onClick={this.handleClick}></span></div>
          </div>
          <div className="menu-title">
          <IndexLink to="/"><div className={this.props.location.pathname=="/"?"activeStyle":""} onClick={this.hideMenu}>首页</div></IndexLink>
          <Link to="/about"><div  className={this.props.location.pathname=="/about"?"activeStyle":""} onClick={this.hideMenu}>关于我们</div></Link>
          <Link to="/rule"><div  className={this.props.location.pathname=="/rule"?"activeStyle":""} onClick={this.hideMenu}>合作条款</div></Link>
          </div>
        </div>
      </div>
    )
  }
}
