import React from 'react'
import './navbar.css'
import logo from '../images/logo.PNG'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5" to='/'>
                        <img alt="logo" src={logo} height="45px" />
                    </NavLink>
                    <form className=" form-nav d-flex me-md-5">
                        <input className="searchbox form-control me-2 text-muted " type="search" placeholder="Search" />
                        <a className="nav-link text-dark fs-5 searchIcon" href='#'><i class="fa-solid fa-magnifying-glass"></i></a>

                        <a className="nav-link text-dark fs-5" href='#'><i class="fa-solid fa-house"></i></a>
                        <a className="nav-link text-dark fs-5" href='#'><i class="fa-regular fa-heart"></i></a>

                        <div class="dropdown" >
                            <a class="btn" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" >
                                <img className='navbar-profile-pic' alt="profile pic" src="https://images.unsplash.com/photo-1682685797527-63b4e495938f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" />


                            </a>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <NavLink className="dropdown-item mt-0" to='/myprofile'>My Profile</NavLink>
                                </li>
                                <li><a className="dropdown-item" href="#">
                                    <span>Logout</span>
                                </a></li>
                            </ul>
                        </div>

                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar