import React from "react";

export const AdminFooter = (props) => {
    return(
        <footer className="h2_footer-area">
                    <div className="h2_footer-bottom">
                        <div className="container">
                            <div className="row justify-content-sm-between align-items-center justify-content-center">
                                <div className="col-xl-4 col-lg-5 col-md-12 order-3 order-lg-0 tp_fade_bottom_footer">
                                    <div className="h2_footer-bottom-copyright text-center text-lg-start">
                                        <p>&copy; 2024 Chatbot All Rights Reserved by site</p>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-sm-6 col-auto tp_fade_bottom_footer">
                                    <div className="h2_footer-bottom-logo mb-10 mb-lg-0">
                                        <a href="index.html"><img src="assets/images/rebot/logo-w.png" alt="Image Not Found" /></a>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-sm-6 col-auto tp_fade_bottom_footer">
                                    <div className="h2_footer-bottom-social mb-10 mb-lg-0">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-dribbble"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    );
}