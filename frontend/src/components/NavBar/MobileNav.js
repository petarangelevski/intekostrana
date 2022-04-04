import React, { useState } from 'react'
import NavLinks from './NavLinks'
import "../Nav.css";
import ListIcon from '@mui/icons-material/List';
import logo from "../images/logo.png"
function MobileNav() {
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <div className='mobileNav'>

        <img className='nav__logo' src={logo} alt="logo" />


        <ul className="navbar__nav mr__auto" style={{ display: showHamburger ? "flex" : "none", width: "100%", listStyleType: 'none' }}>
          <NavLinks />
        </ul>

        <ListIcon className='hamburger__menu' onClick={() => {setShowHamburger((s) => !s)}} style={{fontSize: '50px'}} />

    </div>
  )
}

export default MobileNav