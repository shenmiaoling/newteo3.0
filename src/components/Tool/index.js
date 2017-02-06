import React , { Component }from 'react'
import './style.styl'
export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount(){
    window.scroll(null,0)
  }
  handleClick(){
    document.getElementById("code").scrollIntoView()
  }
  render() {
    return (
      <div className="tool">
        <div className="tool-top">
          <div className="tool-title">有了「小桥梁」，进度随时跟进。</div>
          <button className="tool-btn" onClick={this.handleClick}>获取</button>
        </div>
        <img src="/images/tool.png" className="tool-img"/>
        <div className="tool-intro">
          <div className="intro-title">掌握工作情况</div>
          <div className="main-intro">远程工作都会面临距离问题，但通过电话、短信等传统方式，容易面临不准确、产生疑惑等问题，从而使合作产生不愉快。使用我们的工具，可以有效地避免以上问题，让项目尽在掌握之中。服务，贯穿始终。</div>
        </div>
        <img src="/images/tool.png" className="tool-img"/>
        <div className="tool-intro">
          <div className="intro-title">项目管理</div>
          <div className="main-intro">合作伙伴启动我们的服务，会有多个项目进行。有条不紊地管理项目可以起到节省时间和高效的作用，工具在客户和新潮之间架起了沟通和理解的桥梁，并为共赢打下了坚实的基础。服务，物超所值。</div>
        </div>
        <div className="tool-bottom">
          <div className="code-title">用微信扫二维码使用</div>
          <img src="/images/wechat-code.jpg" className="wechat-code"  id="code"/>
        </div>

      </div>
    )
  }
}
