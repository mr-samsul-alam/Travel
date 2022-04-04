import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container } from '@mui/material';
const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <Container>
                    <div className="footer-left">

                        <img width={100} src="http://ingenioushubs.com/Travel/demo/images/header-logo.png" alt="Logo" />

                        <p className="footer-links">
                            <Link to="/home">Home</Link>
                            <Link to="/packages">Package</Link>
                            <Link to="/about">About</Link>
                            <Link to="/popular_destinations">Popular Destinations</Link>
                        </p>
                        <p className="footer-company-name" style={{ color: "#FEB925" }}> Travel © 2022</p>
                    </div>
                    <div className="footer-center">
                        <div >
                            <FontAwesomeIcon className="icon" icon={faMapMarked} size='2x' />
                            <p className="d-inline-block"><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                        </div>
                        <div >
                            <FontAwesomeIcon className="icon" icon={faPhone} size='2x' />
                            <p>+1.555.555.5555</p>
                        </div>
                        <div >
                            <FontAwesomeIcon className="icon" icon={faEnvelope} size='2x' />
                            <p><a href="mailto:dev.samsul.alam@gmail.com" style={{ color: "#FEB925" }}>dev.samsul.alam@gmail.com</a></p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span style={{ color: "#FEB925" }} >Join Us</span>
                            Follow us on social Media to Know update and Get existing offers
                        </p>
                        <div className="footer-icons">
                            <a href="https://www.facebook.com/contact.samsul.alam"><FontAwesomeIcon className="icon" icon={faFacebook} size='3x' /></a>
                            <a href="https://www.instagram.com/contact.samsul.alam/"> <FontAwesomeIcon className="icon" icon={faInstagram} size='3x' /></a>
                            <a href="https://twitter.com/dev_samsul_alam"> <FontAwesomeIcon className="icon" icon={faTwitter} size='3x' /></a>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;