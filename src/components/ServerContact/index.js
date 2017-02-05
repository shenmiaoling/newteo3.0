import React , { Component }from 'react'
import ServerTop from '../ServerTop'
import { Field, Form } from 'react-redux-form';
import validateContact from '../Contact/validateContact'
import {API_URL} from '../../../constant'
import './style.styl'
export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: {}}
  }
  handleSubmit(val) {
    this.setState({
      errors: validateContact(val)
    })
    if (Object.keys(validateContact(val)).length == 0) {
        const {fetchRequirement} = this.props.actions
        fetchRequirement(`${API_URL}/requirement?token=newteo3.0`,val)
        window.location.reload()
    }
  }
  render() {
    return (
      <div>
      	<ServerTop/>
      	<div className="category">
          <div className="intro-title">请填写以下信息（大概需要58秒），<div> 我们将尽快与你联系。</div></div>
            <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
              <div className="intro-contain">
                <Field model="user.name">
                  <input type="text" className="basic-input" placeholder="称呼" />
                  <div className="star">{this.state.errors.name}</div>
                </Field>
                <Field model="user.phone">
                  <input type="number" className="basic-input" placeholder="联系方式" />
                  <div className="star">{this.state.errors.phone}</div>
                </Field>
                <Field model="user.company">
                  <input type="text" className="basic-input" placeholder="公司" />
                </Field>
                <Field model="user.info">
                  <textarea type="text" className="discription" placeholder="需求描述" />
                  <div className="star">{this.state.errors.info}</div>
                </Field>
                <button className="post-btn">发送</button>
                <div className="contact-tips">温馨提示：</div>
              <div className="contact-tips-text">称呼、联系方式和需求描述为必填项，有利于我们更好的沟通。</div>
              </div>
            </Form>
            <div className="code-title">微信扫下面的二维码，添加 客服/团队负责人</div>
      	    <img src="/images/wechat-code.png" className="wechat-code"/>
        </div>
      </div>
    )
  }
}
