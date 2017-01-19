import React,{ Component } from 'react'
import { Link } from 'react-router'
export default class Topbar extends Component {
  render() {
    return (
      <div className="Topbar">
        <Link to="/home">
          <button>联系我们</button>
        </Link>
      </div>
    )
  }
}
