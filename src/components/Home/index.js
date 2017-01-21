import React,{ Component } from 'react'
import { Link } from 'react-router'
import "./style.styl"
export default class Topbar extends Component {
  componentDidMount() {
  }
  render() {
    const {text,actions} = this.props
    return (
      <div>
        <div className="home">
          <div className="home-title">
            <h2>无需花费100万的资金</h2>
            <h2>就能拥有100万的开发力量</h2>
            <div id="typefield">— 助力传统行业实现互联网+ </div>
          </div>
          <div className="two-btn">
            <button className="contact-btn">联系我们</button>
            <div className="team-btn">新潮团队</div>
          </div>
          </div>
          <div className="server-page">
            <div className="server-title">服务近在咫尺</div>
            <p className="server-subtitle">提供现有的、未来的、属于你的团队。</p>
            <div className="server-context">以往有公司想做产品时，可能需要花费大量的精力和资金去培养一支开发团队，现在不用了，合作伙伴可以购买我们的服务为产品提供技术支持，对产品进行有效开发、升级及维护。我们甚至可以培养一支专属团队为这个产品做长期的维护。</div>
            <button className="know-more">了解更多</button>
          </div>
          <div className="server-intro">
            <img src="/images/tool.png" className="tool-img"></img>
            <div className="intro">
              <div className="intro-title">服务触手可及</div>
              <div className="intro-subtitle">为了使服务达到极致，</div>
              <div className="intro-subtitle">我们研发了“小桥梁”。</div>
              <div style={{textAlign:"right"}}>
                <button id="know-more" className="know-more">了解更多</button>
              </div>

            </div>
          </div>
        </div>


    )
  }
}
