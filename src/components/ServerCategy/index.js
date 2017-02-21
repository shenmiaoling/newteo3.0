import React , { Component }from 'react'
import ServerTop from '../ServerTop'
import './style.styl'
export default class NotFound extends Component {
  render() {
    return (
      <div>
      	<ServerTop/>
      	<div className="categorys category-contain">
      		<div className="intro-title">我们提供三种套餐，<div>总有一款适合你</div></div>

          <div className="intro-contain">
            <table className="gridtable">
              <tbody>
                <tr className="table-color">
                <th width="25%">分类</th><th width="25%">A</th><th width="25%">B</th><th width="25%">C</th>
              </tr>
              <tr>
                <td width="25%">服务时间</td><td width="25%">半年</td><td width="25%">一年</td><td width="25%">两年</td>
              </tr>
              <tr className="table-color">
                <td width="25%">服务费用</td><td width="25%">40-60万</td><td width="25%">80-120万</td><td width="25%">220-300万</td>
              </tr>
              <tr>
                <td>付款方式</td><td width="32.5%">按季度／一次性</td><td colSpan="2">按季度／按年</td>
              </tr>
              <tr className="table-color">
                <td>开发力量</td><td colSpan="3">技术总监、设计师、前端开发、后端开发</td>
              </tr>
              <tr>
                <td>项目周期</td><td colSpan="3">1-3 个月</td>
              </tr>
              <tr className="table-color">
                <td>推广运营</td><td colSpan="3">暂未提供，如有需要，可以联系</td>
              </tr>
              <tr>
                <td>涉及领域</td><td colSpan="3">小程序 iOS Android 网页 桌面软件</td>
              </tr>
              <tr className="table-color">
                <td>配套工具</td><td colSpan="3">为提高服务质量，我们开发了“小桥梁”</td>
              </tr>
              </tbody>
            </table>
      	</div>
        <div className="remarks">
          <div>补充说明</div>
          <div>1、服务费用、付款方式根据实际情况而定；</div>
          <div>2、技术总监利用自己对互联网技术和产品的理解优势，结合你的  实际需求，与你商讨并确定解决方案；</div>
          <div>3、技术总监只负责和客户更新项目进度，不参与实际开发，设计师、前端开发、后端开发均为全职开发。</div>
        </div>
      </div>
      </div>
    )
  }
}
