import superagent from 'superagent'
import {API_URL} from '../../constant'
let initialState = {
  project: [],
}
export default function projects (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROJECT':
      return {project:''}
      // superagent.get(`API_URL/partner`).end((err,response)=>{
      //     project: response.body
      //   })
      // break
    default:
      return {
        project: []
      }
  }
}
