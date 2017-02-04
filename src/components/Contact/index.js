import React,{ Component } from 'react'
import { Link } from 'react-router'
import {API_URL} from '../../../constant'
import './style.styl'
export default class Contact extends Component {
  handleChange(event){
    const {userinfo} = this.props.requirement
    userinfo[event.target.name] = event.target.value
    console.log(this.props.requirement)
    const { fetchRequirement } = this.props.actions

  }
  handleSubmit(){
    fetchRequirement(`API_URL/requirement`,userinfo)
  }
  render() {
    const {actions,requirement} = this.props
    return (
          <div className="contact" id="here">
            <div className="contact-title">联系我们</div>
            <hr/>
            <div className="input-info">
              <input className="basic-input" placeholder="称呼" onChange={this.handleChange} name="name"/>
              <div className="star">称呼不能为空!</div>
              <input className="basic-input" placeholder="联系方式" name="phone" onChange={this.handleChange}/>
              <div className="star">联系方式不能为空!</div>
              <input className="basic-input" placeholder="公司" name="campany" onChange={this.handleChange}/>
              <textarea className="discription" placeholder="需求描述" name="info" onChange={this.handleChange}/>
              <div className="star">需求不能为空!</div>
              <button className="post-btn" onClick={this.handleSubmit}>发送</button>
              <div className="tips">温馨提示：</div>
              <div className="tips-text">称呼、联系方式和需求描述为必填项，有利于我们更好的沟通。</div>
            </div>
          </div>
    )
  }
}
