let initialState = {
  tips: false,
  sideBar: false
}
export default function booleans (state = initialState, action) {
  switch (action.type) {
    case 'CLICK_TIPS':
      return {
        tips: !state.tips
      }
    case 'CLICK_MENU':
      return {
        sideBar: !state.sideBar
      }
    case 'HIDE_MENU':
      return {
        sideBar: true
      }
    default:
      return {
        tips: false,
        sideBar: false
      }
  }
}
