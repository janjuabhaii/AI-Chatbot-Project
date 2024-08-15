import React from "react";
import { Link } from "react-router-dom";
export const Header = (props) => {
  return (
    <header className="header-area header-sticky">
                    <div className="header-top d-none d-md-flex">
                        <div className="container custom-container-1">
                            <div className="row">
                                <div className="col-xl-9 col-lg-9">
                                    <div className="header-top-text">
                                        <p>Welcome to the Humanoid Customer Care Chatbot – Your personalized assistant for swift and efficient support!</p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                    <div className="header-top-social">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="https://www.linkedin.com/company/broliss/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            {/* <li><a href="#"><i className="fa-brands fa-google-plus-g"></i></a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-main header-sticky">
                        <div className="container custom-container-1">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2 col-6">
                                    <div className="header-logo">
                                        <a href="index.html"><img src="assets/images/rebot/logo.png" alt="Chatbot company logo" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 text-center d-none d-lg-block">
                                    <div className="header-menu ">
                                        <nav className="header-nav-menu" id="mobile-menu">
                                            <ul>
                                                <li><a href="#HomeSection">Home</a></li>
                                                <li><a href="#AboutSection" className="page-scroll">About</a></li>
                                                <li><a href="#WorkSection" className="page-scroll">Work Process</a></li>
                                                <li><a href="#PartnerSection" className="page-scroll">Our Partners</a></li>
                                                <li><a href="#ContactSection" className="page-scroll">Contact Us</a></li>
                                                <li><a href="#FaqSection" className="page-scroll">FAQs</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-6">
                                    <div className="header-action-wrap d-flex align-items-center justify-content-end">
                                        <div className="header-action d-none d-sm-flex">
                                        <a href="#BookingSection" className="page-scroll header-action-btn">
                                                Book a demo                                        
                                            </a>
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
                    </div>
                </header>
                
  );
};
