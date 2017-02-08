import React , { Component }from 'react'
// import './style.styl'
import {API_URL} from '../../../constant'
export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount(){
    window.scroll(null,0)
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
      <div className="detail-card">
        <div className="detail">
          <div className="detail-title">{data.name}</div>
          <div className="item-info">{data.introduction}</div>
          <div className="info-card-box">
            <div className="info-card">{data.description}</div>
          </div>
        </div>
        <div>
        {
          data.products && data.products.map((item,index) => {
            return <div key={index}>
              <div className="detail-status">
                <img src={item.img[0].img_url} className="project-img"/>
                <div className="card">
                  <div className="card-bottom">{item.title}</div>
                  <a href={item.url}><button className={item.online?"card-btn":"no-card-btn" }>已上线</button></a>
                  <button className={item.online?"no-card-btn":"card-btn2" } onClick={this.handleClick}>开发中</button>
                </div>
              </div>
            </div>
          })
        }
        </div>
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
