import React,{ Component } from 'react'
import { Link } from 'react-router'
import {API_URL} from '../../../constant'
import { reduxForm } from 'redux-form'
import validateContact from './validateContact'
import './style.styl'
 class ContactForm extends Component {

  render() {
    // const {fileds: {name,phone,company,info}, handleSubmit } = this.props
    return (
          <div className="contact" id="here">
            <div className="contact-title">联系我们</div>
            <hr/>
            <form onSubmit={handleSubmit}>
              <div className="input-info">
                <input type="text" className="basic-input" placeholder="称呼" {...name}/>
                <div className="star">称呼不能为空!</div>
                <input type="number" className="basic-input" placeholder="联系方式" {...phone}/>
                <div className="star">联系方式不能为空!</div>
                <input type="text" className="basic-input" placeholder="公司" {...campany}/>
                <textarea type="text" className="discription" placeholder="需求描述" {...info}/>
                <div className="star">需求不能为空!</div>
                <button className="post-btn" onClick={this.handleSubmit}>发送</button>
                <div className="tips">温馨提示：</div>
                <div className="tips-text">称呼、联系方式和需求描述为必填项，有利于我们更好的沟通。</div>
              </div>
            </form>
          </div>
    )
  }
}
ContactForm = reduxForm({
  form: 'contact',
  fields: ['name', 'phone', 'company', 'info'],
  validate: validateContact
})(ContactForm);

export default ContactForm;
