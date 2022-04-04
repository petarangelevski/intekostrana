import React, { useEffect, useState } from 'react';
import "./Nav.css";
import logo from "./images/logo.png";
import bootstrap from "bootstrap"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import NavLinks from './NavBar/NavLinks';
import MobileNav from './NavBar/MobileNav';
import ListIcon from '@mui/icons-material/List';
function Nav() {
    return (
        <>
                <div className="nav__wrapper">
                    <div className="image__container">
                        <img className='nav__logo' src={logo} alt="logo" />
                        <span class="fi fi-gr fis"></span>
                    </div>
                    <div className="navbar__collapse">
                    <ul className="navbar__nav mr__auto" style={{ display: "flex", width: "100%", listStyleType: 'none' }}>
                        <NavLinks />
                    </ul>
                    </div>
                    
                </div>
                </>
    )
}

export default Nav