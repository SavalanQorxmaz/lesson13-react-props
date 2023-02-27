
import logo from "../images/logo.jpg"

import React from 'react'

const Header = ({saygac}) => {
  return (
    <div className="header">
        <div className="container">
         <div className="navbar">
         <img src={logo} alt="logo" className="logo"></img>
            <ul>
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
            </ul>

            <i className ="fa-solid fa-basket-shopping"></i>
            <span>{saygac}</span>
         </div>
        </div>
    </div>
  )
}

export default Header