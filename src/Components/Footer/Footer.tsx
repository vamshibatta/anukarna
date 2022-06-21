import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="c-details">
                <h4>ANUKARNA FOODS</h4>
                <p>House No: 2-2-1105/4/2,</p>
                <p>13th Street, Chappal Bazar,</p>
                <p>Near Asian Radhika Theater,</p>
                <p>ECIL, Hyderabad.</p>
            </div>
            <div className="menu-list">
                <p>About us</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Cancellation & Refund policy</p>
                <p>Shipping & Delivery Policy</p>
                <p>Disclaimer Policy</p>
            </div>
            <div className="contact-info">
                <h4>Contact us @</h4>
                <p>Phone No:  9876543210</p>
                <p>Email: anukarna@email.com</p>
            </div>
        </div>
    )
};

export default Footer;
