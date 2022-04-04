import React, { useEffect, useState } from 'react';
import "../Nav.css";
import logo from "../images/logo.png";
import bootstrap from "bootstrap"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';
import Nav from '../Nav';

function Navigation() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 355) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);
    return (
        <><div className='header__line' >
            <div className='mail'>
            <a href="mailto:info@inteko.mk"  target="_top" style={{cursor: 'pointer'}}>info@inteko.mk</a>
                &nbsp;
                <MailOutlineIcon style={{ color: 'white' }} />
            </div>
            <div className='location'>
                Локација
                &nbsp;
                <LocationOnIcon />
            </div>
            <div className='location'>
                +389 70 123 456
                &nbsp;
                <PhoneInTalkIcon />
            </div>
            <div className='flag'>
                {/* <Flags.US /> */}
            </div>
        </div>
            <div className={`nav ${show && "nav__black"}`}>
                    <Nav/>
                    <MobileNav/>
            </div></>
    )
}

export default Navigation;