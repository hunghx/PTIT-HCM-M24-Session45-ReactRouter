import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const isActiveStyle = ({isActive}: {isActive : boolean})=>{
    return {
        color : isActive?"Orange":"Black"
    }
}


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="logo" href="index.html"><img src="images/logo.png" /></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink style={isActiveStyle} className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={isActiveStyle} className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink style={isActiveStyle} className="nav-link" to="/blog">Blog</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="repair.html">Repair</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="contact.html">Contact Us</NavLink>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
            <div className="search_icon"><a href="#"><img src="images/search-icon.png" /></a></div>
        </form>
    </div>
</nav>
  )
}

export default Navbar
