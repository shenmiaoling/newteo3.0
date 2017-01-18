import React from 'react'
import Hello from './Hello'
import Change from './Change'
class App extends React.Component{
  render(){
    const { actions,text } = this.props
    return (
      <div>
        <Hello actions = {actions} text={text}/>
        <Change actions = {actions}/>
      </div>
      )
  }
}
export default App
