import React,{ Component } from 'react'
import './style.styl'
export default class Topbar extends Component {
  render() {
    return (
      <div className="team">
        <img src="/images/logo_hg.png" className="team-logo"/>
          <h1 className="team-name">newTeo</h1>
          <div className="arrow-up"></div>
          <div className="team-intro">
            <div className="team-context">newTeo 团队成立于2015年，团队的核心理念是：一个人牛逼不是真正的牛逼，团队牛逼才是真正的牛逼。</div>
            <div className="team-context">由众多国内衍生的团队中，我们以服务为特色，为广大客户提供前、中、后期的服务。我们是正规团队，有着必需完成客户需求和自己职责的团队，有着足够的开发力量为客户提供开发需求中的产品，也有着自己崇尚的理念遵循，不断创新、不断研磨自己的开发技术和探索更为前景的领域。</div>
            <div className="team-context">我们每个人都热爱技术，都想揭开计算机世界中的一层层面纱。每天都在不断的成长，接受新的挑战，敢于拥抱变化突破自己，在团队发展壮大的同时成就自己。</div>
          </div>
      </div>
    )
  }
}
