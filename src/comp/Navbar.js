import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        SkillExchange
      </div>
      
      {/* Navigation Links */}
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><a href="/chat">Chat</a></li>
        <li><a href="/about">About us</a></li>
      </ul>
    </nav>
   </>
  )
}

export default Navbar
