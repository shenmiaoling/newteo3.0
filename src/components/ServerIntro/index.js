import React , { Component }from 'react'
import ServerTop from '../ServerTop'
import './style.styl'
export default class NotFound extends Component {
  componentWillMount(){
    window.scroll(null,0)
  }
  render() {
    return (
      <div className="server-height">
      	<ServerTop/>
      	<div className="server">
      		<div className="intro-title">服务介绍</div>
      		<div className="intro-contain">
	      		<div className="intro-txt">
	      		当我们接手一个互联网产品时，我们会先站在合作伙伴的角度根据经验做一番详细且透彻的解答，这样才有了做产品的开始。
	      		</div>
	      		<div className="intro-txt">
	      		我们为每款产品定制适合、专业的发展路线，比如说一款产品以网页的形式做比较好，也有可能以App方式实现更合适，或者以微信小程序实现，我们会给出更实际、更专业、更贴切的意见实现产品。
	      		</div>
	      		<div className="intro-txt">
	      		我们拥有专有工具，合作伙伴可以掌控团队的工作进程，可直接与开发者交流探讨功能的实现，也能与设计师探讨产品的呈现方式，双方深入交换意见才能产出好产品。
	      		</div>
      		</div>

      	</div>
      </div>
    )
  }
}
