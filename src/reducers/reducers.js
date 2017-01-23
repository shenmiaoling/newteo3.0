let initialState = {
  text: 'Hello',
  tips: false
}
export default function reducers (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: state.text=='Hello'?'Stark':'Hello'
      }
    case 'BUTTON_CLICK':
      return {
        text: 'You just click button'
      }
    case 'CLICK_TIPS':
      return {
        tips: !state.tips
      }
    default:
      return {
        text: 'Hello',
        tips: false
      }
  }
}
