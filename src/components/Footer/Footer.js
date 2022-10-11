import React from "react";
import Button from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive out best vacation
                    proposals.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <form>
                    <div className="input-areas">
                        <input
                            type="email"
                            name="email"
                            className="footer-input"
                            placeholder="Your Email address"
                        />

                        <Button buttonStyle="btnOutline">Subscribe</Button>
                    </div>
                </form>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/SignUp">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/"> Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/SignUp">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/"> Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About us</h2>
                        <Link to="/SignUp">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/"> Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/SignUp">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/"> Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            Rustam <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights"> Rustammio 20222</small>
                    <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to=""
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to=""
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                            className="social-icon-link linkedin"
                            to=""
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
