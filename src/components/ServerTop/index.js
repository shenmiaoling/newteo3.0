import React , { Component }from 'react'
import {Link} from 'react-router'
import './style.styl'
export default class NotFound extends Component {
  render() {
    const activeStyle = {color: 'rgb( 0, 200, 83)'}
    return (
    <div>
    	<div className="server-top">
      	<div className="top-title">将开发团队作为一种可量化的服务</div>
				<div className="top-title">敏捷开发、低成本投入、远程可控。</div>
      </div>
      <div className="category">
        <Link to="/serverintro" activeStyle={activeStyle}>
          <div className="category-title">
            <span className="iconfont icon-introduction category-icon"></span>
            <div className="category-txt">服务介绍</div>
          </div>
        </Link>
      	<Link to="/servercategy" activeStyle={activeStyle}>
					<div className="category-title">
	      		<span className="iconfont icon-category category-icon"></span>
						<div className="category-txt">服务分类</div>
	      	</div>
				</Link>
        <Link to="/servercontact" activeStyle={activeStyle}>
          <div className="category-title">
            <span className="iconfont icon-contact category-icon"></span>
            <div className="category-txt">联系我们</div>
          </div>
        </Link>
      	
			</div>
    </div>
      
    )
  }
}
