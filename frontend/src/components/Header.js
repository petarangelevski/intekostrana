import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
    return (
        <header className='header'
        style={{ backgroundSize: "cover", backgroundPosition: "center center", }}>
            <div className="banner__contents">
                <h1>
                    z
                </h1>
                <div className="banner_buttons">
                    <button className="banner__button"></button>
                    <button className="banner__button"></button>
                </div>
                <h1 className="banner__description">a</h1>
            </div>


            <div className="banner--fadeBottom"/>
        </header>
      )
}

export default Header;