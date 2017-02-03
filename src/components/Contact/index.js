import React,{ Component } from 'react'
import { Link } from 'react-router'
import {API_URL} from '../../../constant'
import './style.styl'
export default class Contact extends Component {
  render() {
    const {actions,requirement} = this.props
    console.log(requirement);
    return (
          <div className="contact" id="here">
            <div className="contact-title">联系我们</div>
            <hr/>
            <div className="input-info">
              <input className="basic-input" placeholder="称呼"/>
              <div className="star">称呼不能为空!</div>
              <input className="basic-input" placeholder="联系方式"/>
              <div className="star">联系方式不能为空!</div>
              <input className="basic-input" placeholder="公司"/>
              <textarea className="discription" placeholder="需求描述"/>
              <div className="star">需求不能为空!</div>
              <button className="post-btn">发送</button>
              <div className="tips">温馨提示：</div>
              <div className="tips-text">称呼、联系方式和需求描述为必填项，有利于我们更好的沟通。</div>
            </div>
          </div>
    )
  }
}
