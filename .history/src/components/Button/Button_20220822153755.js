import React from 'react'

function Button(props) {
  return (
    <button className="" onClick={props.onClick ? () => props.onClick : null}>

    </button>
  )
}

export default Button