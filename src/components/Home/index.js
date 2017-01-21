import React,{ Component } from 'react'
import { Link } from 'react-router'
import "./style.styl"
export default class Topbar extends Component {
  render() {
    const {text,actions} = this.props
    return (
      <div className="home">
      <div className="home-title">
      	<h2>无需花费100万的资金</h2>
        <h2>就能拥有100万的开发力量</h2>
      </div>
      </div>
    )
  }
}
