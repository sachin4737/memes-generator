import React from 'react'

import logo from '../Components/images/logo.png'

export default function Navbar() {
  return (
    <div className='container'>
        <nav className='navbar'>
            <img src={logo} alt="logo" />
            <p>React Course - Project 3</p>
        </nav>
    </div>
  )
}
