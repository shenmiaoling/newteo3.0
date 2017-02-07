import React,{ Component } from 'react'
import { Link } from 'react-router'
import {API_URL} from '../../../constant'
import validateContact from './validateContact'
import { Field, Form, Control} from 'react-redux-form';
import { connect } from 'react-redux';
import './style.styl'
 class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: {}}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.actions.fetchRequirementSuccess(false)
  }
  handleSubmit(val) {
    this.setState({
      errors: validateContact(val)
    })
    if (Object.keys(validateContact(val)).length == 0) {
        const {fetchRequirement} = this.props.actions
        fetchRequirement(`${API_URL}/requirement?token=newteo3.0`,val)
    }
  }
  render() {
    let { requirement } = this.props;
    const end = requirement.end
    const {tips} = this.props
    return (
          <div className="contact" id="here">
            <div className="contact-title">联系我们</div>
            <hr/>
            <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
              <div className="input-info">
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
                <div className="tips">温馨提示：</div>
                <div className="tips-text">称呼、联系方式和需求描述为必填项，有利于我们更好的沟通。</div>
              </div>
            </Form>
        <div className="show-tips" onClick={this.handleClick} style={{display: end ? "block" : "none"}}>
          <div className="tips-container">
            <div className="fetch-tips-txt">发送成功</div>
            <div className="fetch-tips-txt2">我们会尽快联系你！</div>
            <Control.reset model="user" type="reset" className="ok-btn">
              <div  onClick={this.handleClick}>确认</div>
            </Control.reset>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({ user: state.user }))(ContactForm);
