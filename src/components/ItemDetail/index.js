import React , { Component }from 'react'
import './style.styl'
export default class NotFound extends Component {
  render() {
    return (
      <div>
        <div className="detail">
          <div className="detail-title">启新科技网络有限公司</div>
          <div className="item-info">启新科技公司成立于2015年，是一支朝气蓬勃，有活力，有思想的团队。主要为其他公司制作网页、开发软件；同时还为没有开发力量的公司提供服务和帮助。</div>
          <div className="info-card">启新科技公司因开发技术薄弱，和新潮合作一年，新潮向启新提供了设计师和前后端技术人员，弥补了启新暂时的短板，补全了启新的版图，战略得以完善。以下是双方合作的项目。</div>
        </div>
        <div className="detail-status">
          <img src="/images/project1.png" className="project-img"/>
          <div className="card">
            <div className="card-bottom">启新科技官方网站</div>
            <button className="card-btn">已上线</button>
          </div>
          
        </div>
        
      </div>
      
    )
  }
}
