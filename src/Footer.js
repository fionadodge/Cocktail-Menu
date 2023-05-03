import React from 'react';
import './Footer.css';

function Footer() {
    return (
    <div className="footer">
        <ul>
            <li><a href="#sitemap" class="active">Site Map</a></li>
            <li><a href="#generalterms"  class="active">General Terms and Conditions</a></li>
            <li><a href="#data" class="active">Data and Privacy</a></li>
        </ul>
    </div>
    );
}

export default Footer;