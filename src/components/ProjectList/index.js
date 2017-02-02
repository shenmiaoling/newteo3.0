
import React,{ Component } from 'react'
import { Link } from 'react-router'
import {API_URL} from '../../../constant'
import "./style.styl"
export default class ProjectList extends Component {
  constructor(props){
    super(props)
    this.getProjectList = this.getProjectList.bind(this)
  }
  componentDidMount(){
    const {data} = this.props.projects

    if (data.length === 0){
      this.getProjectList()


    }
  }
  getProjectList(){

    const { fetchProjectList } = this.props.actions
    const { page } = this.props.projects
    fetchProjectList(`${API_URL}/partner`)

  }
  render() {
    const {data} = this.props.projects
    return (
      <div className="product">
      	<div className="product-intro">合作伙伴</div>
        <div className="product-subintro">新潮团队已为以下商家提供开发团队。</div>
      	 {
          data.map((item,index) => {
            return <Link to={`/detail/${item._id}`} key={index}>
            <div className="product-container">
              <img className="product-img" src={item.logo}/>
              <div className="product-title">{item.name}</div>
            </div>
          </Link>
          })
         } 
      </div>
    )
  }
}
