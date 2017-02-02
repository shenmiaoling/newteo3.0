import fetch from 'isomorphic-fetch'

function fetchProjectListRequest(){
  return {
    type: 'FETCH_PROJECT_LIST_REQUEST'
  }
}
function fetchProjectListSuccess(json,end) {
  return {
    type: 'FETCH_PROJECT_LIST_SUCCESS',
    ProjectList: json,
    end: end
  }
}
function fetchProjectListFailure(err){
  return {
    type:'FETCH_PROJECT_LIST_FAILURE',
    err: err
  }
}
export function fetchProjectList(api) {
  return dispatch => {
    dispatch(fetchProjectListRequest())
    return fetch(api)
      .then(response => response.json())
      .then(json => {
        const len = json.length
        if (len<20) {
          dispatch(fetchProjectListSuccess(json,true))
        }else{
          dispatch(fetchProjectListSuccess(json,false))
        }
      })
      .catch((err) => {
        fetchProjectListFailure(err)
      })
  }
}
function fetchProjectRequest() {
  return {
    type: 'FETCH_PROJECT_REQUEST'
  }
}
function fetchProjectSuccess(json) {
  return {
    type:'FETCH_PROJECT_SUCCESS',
    Project: json
  }
}
function fetchProjectFailure(err) {
  return {
    type: 'FETCH_PROJECT_FAILURE',
    err: err
  }
}
export function fetchProject(api) {
  return dispatch => {
    dispatch(fetchProjectRequest())
    return fetch(api)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchProjectSuccess(json))
      })
      .catch((err) => {
        dispatch(fetchProjectFailure(err))
      })
  }
}
export function handleTips(){
  return {
    type: 'CLICK_TIPS'
  }
}
export function handleMenu(){
  return {
    type: 'CLICK_MENU'
  }
}
export function hideMenu(){
  return {
    type: 'HIDE_MENU'
  }
}

