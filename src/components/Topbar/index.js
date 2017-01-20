import React,{ Component } from 'react'
import { Link } from 'react-router'
import Hello from '../Hello'
import Change from '../Change'
import "./style.styl"
export default class Topbar extends Component {
  render() {
    const {text,actions} = this.props
    return (
      <div className="topbar">
{/*      <Hello text={text} actions={actions}/>
      <Change actions = {actions}/>
        <Link to="/contact">
          <button>联系我们</button>
          <div>hahahahh</div>
        </Link>*/}
        <img src="/images/test.png" className="logo"></img>
      </div>
    )
  }
}
