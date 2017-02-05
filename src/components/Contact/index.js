import React,{ Component } from 'react'
import { Link } from 'react-router'
import {API_URL} from '../../../constant'
import validateContact from './validateContact'
import { Field, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import './style.styl'
 class ContactForm extends Component {
  handleSubmit(val) {
    console.log(this.props);
    const {fetchRequirement} = this.props.actions
    fetchRequirement(`${API_URL}/requirement?token=newteo3.0`,val)
  }
  render() {
    let { user } = this.props;
    return (
          <div className="contact" id="here">
            <div className="contact-title">联系我们</div>
            <hr/>
            <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
              <div className="input-info">
                <Field model="user.name">
                  <input type="text" className="basic-input" placeholder="称呼" />
                </Field>
                <Field model="user.phone">
                  <input type="number" className="basic-input" placeholder="联系方式" />
                </Field>
                <Field model="user.company">
                  <input type="text" className="basic-input" placeholder="公司" />
                </Field>
                <Field model="user.info">
                  <textarea type="text" className="discription" placeholder="需求描述" />
                </Field>
                <button className="post-btn">发送</button>
                <div className="tips">温馨提示：</div>
                <div className="tips-text">称呼、联系方式和需求描述为必填项，有利于我们更好的沟通。</div>
              </div>
            </Form>
          </div>
    )
  }
}

export default connect(state => ({ user: state.user }))(ContactForm);
