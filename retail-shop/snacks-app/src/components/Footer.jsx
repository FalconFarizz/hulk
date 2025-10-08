import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <footer
            className="footer bg-dark text-white py-5"
        >
            <div className="container">
                <div className="row">
                    {/* Brand/Logo Section */}
                    <motion.div variants={itemVariants} className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
                        <Link to="/" className="footer-brand d-flex align-items-center justify-content-center justify-content-md-start text-white text-decoration-none mb-3">
                            <i className="bi bi-shop display-5 me-2 text-warning"></i>
                            <span className="fs-4 fw-bold">Traditional Snacks</span>
                        </Link>
                        <p className="text-muted">Bringing the world's authentic flavors to your doorstep with passion and quality.</p>
                        <div className="social-icons mt-3">
                            <a href="https://facebook.com/traditionalsnacks" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle me-2"><i className="bi bi-facebook"></i></a>
                            <a href="https://instagram.com/traditionalsnacks" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle me-2"><i className="bi bi-instagram"></i></a>
                            <a href="https://twitter.com/traditionalsnacks" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle me-2"><i className="bi bi-twitter"></i></a>
                            <a href="https://youtube.com/traditionalsnacks" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle me-2"><i className="bi bi-youtube"></i></a>
                            <a href="https://pinterest.com/traditionalsnacks" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle"><i className="bi bi-pinterest"></i></a>
                        </div>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div variants={itemVariants} className="col-md-2 mb-4 mb-md-0 text-center text-md-start">
                        <h5 className="text-warning mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/our-story" className="text-white text-decoration-none">Our Story</Link></li>
                            <li><Link to="/partnerships" className="text-white text-decoration-none">Partnerships</Link></li>
                            <li><Link to="/customer-support" className="text-white text-decoration-none">Customer Support</Link></li>
                            <li><Link to="/how-it-works" className="text-white text-decoration-none">How It Works</Link></li>
                            <li><Link to="/blog" className="text-white text-decoration-none">Blog</Link></li>
                            <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
                            <li><Link to="/faq" className="text-white text-decoration-none">FAQ</Link></li>
                        </ul>
                    </motion.div>

                    {/* Policies Section */}
                    <motion.div variants={itemVariants} className="col-md-2 mb-4 mb-md-0 text-center text-md-start">
                        <h5 className="text-warning mb-3">Policies</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/terms-and-policy" className="text-white text-decoration-none">Terms and Policy</Link></li>
                            <li><Link to="/shipping-policy" className="text-white text-decoration-none">Shipping Policy</Link></li>
                            <li><Link to="/refund-and-replacement" className="text-white text-decoration-none">Refund and Replacement</Link></li>
                            <li><Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></li>
                        </ul>
                    </motion.div>

                    {/* Contact Info & Newsletter */}
                    <motion.div variants={itemVariants} className="col-md-4 text-center text-md-start">
                        <h5 className="text-warning mb-3">Contact Us</h5>
                        <p className="text-muted"><i className="bi bi-envelope-fill me-2"></i> Email: contact@traditionalsnacks.com</p>
                        <p className="text-muted"><i className="bi bi-phone-fill me-2"></i> Phone: 123-456-7890</p>
                        <p className="text-muted"><i className="bi bi-geo-alt-fill me-2"></i> Address: 123 Snack Ave, Flavor Town, ST 98765</p>

                        <h5 className="text-warning mt-4 mb-3">Newsletter</h5>
                        <p className="text-muted">Stay updated with our latest products and offers.</p>
                        <form className="d-flex newsletter-form-footer">
                            <input type="email" className="form-control rounded-pill me-2" placeholder="Your email" aria-label="Your email" />
                            <button className="btn btn-warning rounded-pill" type="submit"><i className="bi bi-send-fill"></i></button>
                        </form>
                    </motion.div>
                </div>

                <hr className="my-4 border-secondary" />

                {/* Footer Bottom */}
                <div className="row">
                    <div className="col-12 text-center text-muted">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Traditional Snacks. All rights reserved.</p>
                    </div>
                </div>
            </div>
       




       
        </footer>
    );
};

export default Footer;
