import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <div className="navbar">
        <div className="leftNavSection"><h3 id='logo-name'>Abhishek Kange</h3></div>
        <div className="rightNavSection">

        <div className="nav-links">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Author</a></li>
                <li><a href="#services">Books </a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        </div>
      
        
    </div>
    </>
  )
}
