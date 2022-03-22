import React, { useEffect, useState } from 'react';
import "./Nav.css";
import logo from "./images/logo.png";
import bootstrap from "bootstrap"

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 449) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__wrapper">
                <div className="image__container">
                    <img className='nav__logo' src={logo} alt="logo" />

                </div>
                <div className="navbar__collapse" >
                    <ul className="navbar__nav mr__auto" style={{display: "flex", width: "100%",  listStyleType: 'none'}}>
                        <li className="nav__item">
                            <a className="nav__link" href="/"><strong>Home</strong></a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="/api/zanas"><strong>Za nas</strong></a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="/api/sportska-oprema"><strong>Oprema</strong></a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="/api/sportski-objekti"><strong>Sportski Objekti</strong></a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="/api/kontakt"><strong>Kontakt</strong></a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="/api/sistemi"><strong>Sistemi</strong></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav