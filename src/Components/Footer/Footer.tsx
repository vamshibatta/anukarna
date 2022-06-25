import { Col, Row } from 'antd';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <Row className="footer-container">
            <Col className="c-details"
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
                xxl={8}
            >
                <h4>ANUKARNA FOODS</h4>
                <p>House No: 2-2-1105/4/2,</p>
                <p>13th Street, Chappal Bazar,</p>
                <p>Near Asian Radhika Theater,</p>
                <p>ECIL, Hyderabad.</p>
            </Col>
            <Col className="menu-list"
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
                xxl={8}
            >
                <p>About us</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Cancellation & Refund policy</p>
                <p>Shipping & Delivery Policy</p>
                <p>Disclaimer Policy</p>
            </Col>
            <Col className="contact-info"
                xs={24}
                sm={24}
                md={12}
                lg={8}
                xl={8}
                xxl={8}
            >
                <h4>Contact us @</h4>
                <p>Phone No:  9876543210</p>
                <p>Email: anukarna@email.com</p>
            </Col>
        </Row>
    )
};

export default Footer;
