import React,{ Component } from 'react'
import { Link } from 'react-router'
import Hello from '../Hello'
export default class Topbar extends Component {
  render() {
    const {text} = this.props
    console.log(this.props)
    return (
      <div className="Topbar">
      <Hello text={text}/>
        <Link to="/contact">
          <button>联系我们</button>
          <div>hahahahh</div>
        </Link>
      </div>
    )
  }
}
