import React from "react";
import { Link } from "react-router-dom";
export const AdminHeader = (props) => {
    const logout = () => {
        localStorage.removeItem('admin');
        window.location.href = "/admin-login";
    }
  return (
    <header className="h2_header-area header-sticky bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-6">
                                <div className="h2_header-logo">
                                    <a href="index.html"><img src="assets/images/rebot/logo.png" alt="Image Not Found" /></a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 text-center d-none d-lg-block">
                                <div className="h2_header-menu d-none d-lg-flex justify-content-center">
                                    <nav className="h2_header-nav-menu" id="mobile-menu">
                                        <ul>
                                            <li className="menu-has-child">
                                                <Link to="/admin" >Dashbaord</Link>
                                            </li>
                                            <li><Link to="/admin-settings">Settings</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="h2_header-action-wrap d-flex align-items-center justify-content-end">
                                    <div className="h2_header-action d-none d-sm-flex">
                                        <a href="#" className="h2_header-action-login" onClick={logout}>
                                            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.01172 8C8.94472 8 10.5117 6.433 10.5117 4.5C10.5117 2.567 8.94472 1 7.01172 1C5.07872 1 3.51172 2.567 3.51172 4.5C3.51172 6.433 5.07872 8 7.01172 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M13.026 15C13.026 12.291 10.331 10.1 7.013 10.1C3.695 10.1 1 12.291 1 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Logout                                         
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
                </header>
                
  );
};
