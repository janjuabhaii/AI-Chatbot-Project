import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {  
  return (

        <section id="ContactSection" className="h2_work-area bg-default pt-140 pb-140" style={{ backgroundImage: "url('assets/images/work/home2/bg.jpg')" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-5 col-xl-6">
                        <div className="inner_section-area mb-50 text-center">
                            <span className="inner_section-subtitle tp_subtitle_anim">LET’S TALK</span>
                            <h2 className="inner_section-title tp_title_slideup mb-30">Engage in conversation with skilled engineers.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-30 tp_fade_left" data-fade-from="left">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fa-solid fa-message-lines"></i>
                            </div>
                            <div className="contact-content">
                                <h4 className="contact-content-title">Chat with us.</h4>
                                <p>Anytime at any location 24/7. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 tp_fade_left" data-fade-from="left" data-delay=".6">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fa-solid fa-phone-arrow-up-right"></i>
                            </div>
                            <div className="contact-content">
                                <h4 className="contact-content-title">Give us a call</h4>
                                <a href="tel:+480-555-0103">South Africa: +27 718 361 820</a>
                                <a href="tel:+480-555-0103">Pakistan: +92 314 1800010</a>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-30 tp_fade_left" data-fade-from="left" data-delay=".9">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <i className="fa-solid fa-envelope-open"></i>
                            </div>
                            <div className="contact-content">
                                <h4 className="contact-content-title">Email with us.</h4>
                                <a href="mailto:contact@broliss.com">contact@broliss.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

  );
};
