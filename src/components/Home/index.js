import React,{ Component } from 'react'
import { Link } from 'react-router'
import "./style.styl"
export default class Topbar extends Component {
  handleClick(){
    document.getElementById("here").scrollIntoView()
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
            <button className="contact-btn" onClick={this.handleClick}>联系我们</button>
            <Link to="/about">
              <div className="team-btn">新潮团队</div>
            </Link>

          </div>
          </div>
          <div className="server-page">
            <div className="server-title">服务近在咫尺</div>
            <p className="server-subtitle">提供现有的、未来的、属于你的团队。</p>
            <div className="server-context">以往有公司想做产品时，可能需要花费大量的精力和资金去培养一支开发团队，现在不用了，合作伙伴可以购买我们的服务为产品提供技术支持，对产品进行有效开发、升级及维护。我们甚至可以培养一支专属团队为这个产品做长期的维护。</div>
            <Link to="/serverintro">
            	<button className="know-more">了解更多</button>
            </Link>
            
          </div>
          <div className="server-intro">
            <img src="/images/tool.png" className="tool-img"></img>
            <div className="intro">
              <div className="intro-title">服务触手可及</div>
              <div className="intro-subtitle">为了使服务达到极致，</div>
              <div className="intro-subtitle">我们研发了“小桥梁”。</div>
              <div style={{textAlign:"right"}}>
                <Link to="/tool">
                  <button id="know-more" className="know-more">了解更多</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="product">
          	<div className="product-intro">合作伙伴</div>
            <div className="product-subintro">新潮团队已为以下商家提供开发团队。</div>
          	 <Link to="/detail">
              <div className="product-container">
                <img className="product-img" src="/images/product1.png"/>
                <div className="product-title">广东红苹果一元家具设计有限公司</div>
              </div>
            </Link>
            
          	<div className="product-container">
          		<img className="product-img" src="/images/sky.png"/>
          		<div className="product-title">北京蓝天科技有限公司</div>
          	</div>
          </div>
          <div className="contact" id="here">
            <div className="contact-title">联系我们</div>
            <hr/>
            <div className="input-info">
              <input className="basic-input" placeholder="称呼"/>
              <input className="basic-input" placeholder="联系方式"/>
              <input className="basic-input" placeholder="公司"/>
              <textarea className="discription" placeholder="需求描述"/>
              <button className="post-btn">发送</button>
              <div className="tips">温馨提示：</div>
              <div className="tips-text">称呼、联系方式和需求描述为必填项，有利于我们更好的沟通。</div>
            </div>
          </div>
        </div>


    )
  }
}
