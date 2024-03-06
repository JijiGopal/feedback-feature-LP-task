import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { RiArrowDownSLine } from "react-icons/ri";

export const Navbar = () => {
    return (
        <nav className='navbar'>
             <div className="logo">THE <span className='product'>PRODUCT</span> PLATFORM</div> 
             <div className="nav-items">
                <div className='menu'>
                    <span>Learn</span> <RiArrowDownSLine size={38}/>
                </div>
                <div  className='menu'>
                    <span>Practice</span> 
                    <RiArrowDownSLine size={38}/>
                </div>
                 
                <img  className='user-logo' src="/src/assets/user-logo.png" alt="" />
                 
            </div>
        </nav>
    )
}
