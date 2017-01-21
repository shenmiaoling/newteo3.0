import React,{ Component } from 'react'
import { Link } from 'react-router'
import "./style.styl"
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="footer-info">© 2017 新潮科技</span>
      </div>
    )
  }
}
