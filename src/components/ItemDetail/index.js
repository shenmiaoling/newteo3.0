import React , { Component }from 'react'
import './style.styl'
import {API_URL} from '../../../constant'
export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    const { fetchProject } = this.props.actions
    const id = this.props.params.id
    fetchProject(`${API_URL}/partner/${id}`)
  }
  handleClick(){
    this.props.actions.handleTips()
  }
  render() {
    const {data} = this.props.project
    const {tips} = this.props
    return (
      <div>
        <div className="detail">
          <div className="detail-title">{data.name}</div>
          <div className="item-info">{data.introduction}</div>
          <div className="info-card">启新科技公司因开发技术薄弱，和新潮合作一年，新潮向启新提供了设计师和前后端技术人员，弥补了启新暂时的短板，补全了启新的版图，战略得以完善。以下是双方合作的项目。</div>
        </div>
        {
          data.products && data.products.map((item,index) => {
            return <div key={index}> 
              <div className="detail-status">
                <img src={item.img[0].img_url} className="project-img"/>
                <div className="card">
                  <div className="card-bottom">{item.title}</div>
                  <button className={item.online?"card-btn":"no-card-btn" }>已上线</button>
                  <button className={item.online?"no-card-btn":"card-btn2" } onClick={this.handleClick}>开发中</button>
                </div>
              </div>
            </div>
          })
        }
        <div className="show-tips" onClick={this.handleClick} style={{display:tips?"block":"none"}}>
          <div className="tips-container">
            <div className="tips-top">提示</div>
            <div className="tips-txt">该项目还在开发中</div>
          </div>
        </div>
      </div>

    )
  }
}
