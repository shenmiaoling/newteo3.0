import React, { PropTypes } from 'react'
const Hello = ({handleClick,text})=>(
  <h1 
    onClick=handleClick}> {text} </h1>   
  )
}

Hello.PropTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Hello