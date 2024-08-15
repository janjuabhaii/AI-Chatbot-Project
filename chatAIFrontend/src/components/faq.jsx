import React from "react";

export const FAQ = (props) =>{
    return (
        <section className="h2_faq-area mt-100 mb-50" id="FaqSection">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-8 col-md-10">
                                    <div className="h2_section-area text-center mb-50">
                                        <span className="h2_section-subtitle tp_subtitle_anim">Have Any Questions</span>
                                        <h2 className="h2_section-title tp_title_slideup mb-0">Frequently Asked Questions
                                            (FAQ) on Chatbot</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xxl-9 col-xl-10">
                                    <div className="h2_faq-wrap tp_fade_bottom">
                                        <div className="h2_faq-content">
                                            <div className="accordion" id="Expp">
                                                <div className="accordion-item mb-30">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is a chatbot and how can it benefit my business?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#Expp">
                                                        <div className="accordion-body">
                                                            <p>
                                                            A chatbot is an AI-powered software that simulates human conversation. It can benefit your business by automating customer support, improving response times, and increasing customer engagement.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-30">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How does your chatbot work?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#Expp">
                                                        <div className="accordion-body">
                                                            <p>
                                                            Our chatbot uses natural language processing and machine learning algorithms to understand user queries and provide relevant responses in real-time.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-30">
                                                    <h2 className="accordion-header" id="headingThree">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Can your chatbot integrate with my existing systems?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#Expp">
                                                        <div className="accordion-body">
                                                            <p>
                                                            Yes, our chatbot is designed to seamlessly integrate with various platforms and systems, including websites, mobile apps, CRMs, and messaging platforms like Slack and Facebook Messenger.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-30">
                                                    <h2 className="accordion-header" id="headingFour">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> Is it easy to set up and customize the chatbot for my business?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#Expp">
                                                        <div className="accordion-body">
                                                            <p>
                                                            Absolutely! Our chatbot comes with a user-friendly interface and customizable templates, making it easy for you to set up and tailor it to match your brand and specific requirements.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-30">
                                                    <h2 className="accordion-header" id="headingFive">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">What level of customer support do you offer?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#Expp">
                                                        <div className="accordion-body">
                                                            <p>
                                                            We provide comprehensive customer support to help you get started with the chatbot and address any issues or questions you may have. Our dedicated team is available via email and live chat.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item mb-30">
                                                    <h2 className="accordion-header" id="headingSix">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"> Can I see a demo of the chatbot in action before purchasing?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#Expp">
                                                        <div className="accordion-body">
                                                            <p>
                                                            Absolutely! You can book a personalized demo at your preferred date and time through our website's demo booking section. Our team will walk you through the features of our chatbot and answer any questions you may have during the demo session.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
    );
};