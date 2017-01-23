import React,{ Component } from 'react'
import { Link } from 'react-router'
import "./style.styl"
export default class Topbar extends Component {
  render() {
    const {text,actions} = this.props
    const activeStyle = {backgroundColor: 'rgba( 155, 154, 155, 0.42)'}
    return (
      <div className="topbar">
{/*      <Hello text={text} actions={actions}/>
      <Change actions = {actions}/>
        <Link to="/contact">
          <button>联系我们</button>
          <div>hahahahh</div>
        </Link>*/}
        <div>
        <Link to="/home">
          <img src="/images/logo.png" className="logo"></img>
          <span className="title">新潮科技</span>
        </Link>
        <div className="menu-icon">
          <span className="iconfont icon-toggle-left" onClick={this.handleClick}></span>
        </div>
        </div>
        <div className="wrapper">
          <div id="slide">
          <div id="slide-icon"><span className="iconfont icon-toggle-button" onClick={this.handleClick}></span></div>
          </div>
          <div className="menu-title">
          <Link to="/home"><div>首页</div></Link>
          <Link to="/about"><div>关于我们</div></Link>
          <Link to=""><div>合作条款</div></Link>

          </div>
        </div>
      </div>
    )
  }
}
