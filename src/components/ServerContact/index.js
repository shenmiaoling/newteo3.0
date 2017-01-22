import React , { Component }from 'react'
import ServerTop from '../ServerTop'
import './style.styl'
export default class NotFound extends Component {
  render() {
    return (
      <div>
      	<ServerTop/>
      	<div className="category">
          <div className="intro-title">请填写以下信息（大概需要58秒），<div> 我们将尽快与你联系。</div></div>
	      		<div className="intro-contain">
              <input className="basic-input" placeholder="称呼"/>
              <input className="basic-input" placeholder="联系方式"/>
              <input className="basic-input" placeholder="公司"/>
              <textarea className="discription" placeholder="需求描述"/>
              <button className="post-btn">发送</button>
              <div className="contact-tips">温馨提示：</div>
              <div className="contact-tips-text">称呼、联系方式和需求描述为必填项，有利于我们更好的沟通。</div>
            </div>
            <div className="code-title">微信扫下面的二维码，添加 客服/团队负责人</div>		
      	    <img src="/images/wechat-code.png" className="wechat-code"/>
        </div>
      </div>
    )
  }
}
