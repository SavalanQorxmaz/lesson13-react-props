

import React, {useState} from 'react'



const Button = ({value, onClick, newClass}) => {

  return (
    <button className={"button " + newClass}  onClick = {onClick} > {value} </button>
  )
}

export default Button