import React from "react";
import { Link } from "react-router-dom";
export const Header2 = (props) => {
  return (
    <header className="h2_header-area header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-6">
                                <div className="h2_header-logo">
                                    <a href="index.html"><img src="assets/images/rebot/logo.png" alt="logo for chatbot company " /></a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 text-center d-none d-lg-block">
                                <div className="h2_header-menu d-none d-lg-flex justify-content-center">
                                    <nav className="h2_header-nav-menu" id="mobile-menu">
                                        <ul>
                                            <li className="menu-has-child">
                                                <a href="index.html">Home</a>
                                                <ul className="submenu">
                                                    <li><a href="index.html">AI Chatbot</a></li>
                                                    <li><a href="index-2.html">AI Co-Pilot</a></li>
                                                    <li><a href="index-3.html">AI Image Generator</a></li>
                                                    <li><a href="index-4.html">AI Text Generator</a></li>
                                                    <li><a href="index-5.html">AI Photostock</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about.html">About</a></li>
                                            <li className="menu-has-child">
                                                <a href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li><a href="service.html">Services</a></li>
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="work.html">Portfolio</a></li>
                                                    <li><a href="price.html">Pricing</a></li>
                                                    <li><a href="faq.html">FAQ's</a></li>
                                                    <li><a href="testimonial.html">Testimonials</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="login.html">Login</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-has-child">
                                                <a href="shop.html">Shop</a>
                                                <ul className="submenu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-details.html">Shop Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-has-child">
                                                <a href="blog.html">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li><Link to={"/contact-us"}>Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="h2_header-action-wrap d-flex align-items-center justify-content-end">
                                    <div className="h2_header-action d-none d-sm-flex">
                                        <a href="#" className="h2_header-action-login">
                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.01172 8C8.94472 8 10.5117 6.433 10.5117 4.5C10.5117 2.567 8.94472 1 7.01172 1C5.07872 1 3.51172 2.567 3.51172 4.5C3.51172 6.433 5.07872 8 7.01172 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M13.026 15C13.026 12.291 10.331 10.1 7.013 10.1C3.695 10.1 1 12.291 1 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Login                                           
                                        </a>
                                        <Link to={"/book-demo"} className="h2_header-action-btn theme-btn-2">
                                            Book a demo                                        
                                        </Link>
                                    </div>
                                    <div className="header-menu-bar d-lg-none ml-10">
                                        <span className="header-menu-bar-icon side-toggle">
                                            <i className="fa-light fa-bars"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
  );
};
