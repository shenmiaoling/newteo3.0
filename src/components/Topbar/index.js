import React,{ Component } from 'react'
import { Link } from 'react-router'
import "./style.styl"
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
        <Link to="/home">
          <img src="/images/logo.png" className="logo"></img>
          <span className="title">新潮科技</span>
        </Link>
        <div className="menu-icon">
          <span className="iconfont icon-toggle-left" onClick={this.handleClick}></span>
        </div>
        </div>
        <div className={sideBar?"wrapper-display":"wrapper"}>
          <div id="slide">
          <div id="slide-icon"><span className="iconfont icon-toggle-button" onClick={this.handleClick}></span></div>
          </div>
          <div className="menu-title">
          <Link to="/home"><div className={this.props.location.pathname=="/home" || this.props.location.pathname=="/"?"activeStyle":""} onClick={this.hideMenu}>首页</div></Link>
          <Link to="/about"><div  className={this.props.location.pathname=="/about"?"activeStyle":""} onClick={this.hideMenu}>关于我们</div></Link>
          <Link to="/rule"><div  className={this.props.location.pathname=="/rule"?"activeStyle":""} onClick={this.hideMenu}>合作条款</div></Link>
          </div>
        </div>
      </div>
    )
  }
}
