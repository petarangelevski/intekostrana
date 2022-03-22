import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-social-media">
        <a href="https://facebook.com" className="social-icons"><i className="fab fa-facebook"></i></a>
        <a href="https://twitter.com" className="social-icons"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com" className="social-icons"><i className="fab fa-instagram"></i></a>
    </div>
    <div className="footer-text">
        <p>&copy;Izraboteno od <span className="petar">Petar i Kristijan</span></p>
    </div>
</footer>
  )
}

export default Footer