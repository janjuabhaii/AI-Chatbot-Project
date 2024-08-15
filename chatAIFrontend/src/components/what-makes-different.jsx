import React from "react";

export const WhatMakesDifferent = (props) => {
    return(
        <section className="h2_about-area pb-100 pt-100" id="AboutSection">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="h2_about-img mb-40">
                                        <img src="assets/images/rebot/image-feature.jpg" alt="artifitial inteligence picture" className="inner-img-1 tp_fade_right" />
                                        <img src="assets/images/about/home2/bg-2.png" alt="light color gradient background" className="inner-img-2 tp_fade_bottom" />
                                        <img src="assets/images/about/home2/shape.png" alt="design for website without background" className="inner-img-shape" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="h2_about-content mb-40">
                                        <div className="h2_section-area mb-40">
                                            <span className="h2_section-subtitle tp_subtitle_anim">Who We Are?</span>
                                            <h2 className="h2_section-title tp_title_slideup mb-25">What Makes The AI Chatbot
                                                Different?</h2>
                                            <p className="h2_section-text tp_fade_bottom">Our AI chatbot stands out for its unparalleled ability to engage users seamlessly. With advanced algorithms powering its responses, 
                    it excels in providing personalized interactions that leave a lasting impression. </p>
                                            <p className="h2_section-text mt-10 tp_fade_bottom">Whether it's addressing customer queries with precision or guiding users through complex tasks effortlessly, our chatbot delivers unmatched performance. 
                    Experience the difference firsthand and revolutionize your customer experience journey with our AI-powered solution</p>
                                        </div>
                                        <a href="#" className="theme-btn-2 tp_fade_bottom">Explore Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    
    );
}