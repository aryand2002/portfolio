import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
        <header className='container'>
            <h2>Aryan <span style={{color:'rgb(113, 113, 205)'}}>Dewangan</span></h2>
            <ul className='sub_container'>
                <li style={{color:'rgb(113, 113, 205)'}}>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
        </header>
    </div>
  )
}

export default Header