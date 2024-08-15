import React from "react";

export const Banner = (props) => {

    return (
        <section className="banner-area">
                        <div className="container custom-container-1">
                            <div className="banner-single">
                                <div className="banner-content">
                                    {/* <span className="banner-content-subtitle tp_fade_left">Today special offer</span> */}
                                    <h1 className="banner-content-title tp_has_text_reveal_anim">Humanoid Customer Care Chatbot</h1>
                                    <p className="tp_title_slideup">AI powered Interactive Customer Care Chatbot. Chat With The Future: Where Human Meets AI In Seamless Interaction.</p>
                                    {/* Bounce the below tagline to reveal the text */}
                                    <span class="banner-content-subtitle mb-5 tp_fade_bottom" style={{marginTop: "-20px", fontSize: "20px", fontWeight: "450"}}>Chat smoothly in 100+ languages</span>
                                    <div className="banner-content-btn">
                                    <a href="#BookingSection" className="page-scroll theme-btn tp_fade_bottom">Book a demo</a>
                                        <span className="tp_fade_bottom">
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.4555 0.0244961C16.2201 0.206689 15.2018 0.523653 14.0862 1.07023C12.6337 1.78153 11.3259 2.7424 10.0056 4.06517C8.07885 5.9969 6.49652 8.40034 5.42334 11.0359C5.33349 11.258 5.25612 11.4427 5.25113 11.4477C5.24863 11.4502 5.22118 11.3304 5.19123 11.1781C4.88425 9.64324 3.79359 8.26307 2.56067 7.84877C2.20128 7.72898 1.8369 7.70152 1.50745 7.77141C1.27784 7.81882 0.920944 8.00102 0.736256 8.16574C0.481686 8.38786 0.204654 8.80716 0.0524114 9.1965L0 9.32378L0.292007 9.34125C0.983338 9.37869 1.43258 9.58584 1.8943 10.0725C2.14388 10.3346 2.32357 10.6041 2.53322 11.0259C2.75534 11.4727 2.89511 11.8395 3.26448 12.9327C3.62887 14.0084 3.77362 14.3877 3.9658 14.7721C4.21288 15.2662 4.52485 15.683 4.80438 15.8952L4.94415 16L5.08391 15.9052C5.30853 15.7504 5.78273 15.2612 6.0348 14.9243C6.53645 14.2455 6.90084 13.6065 7.8717 11.6898C8.97733 9.50348 9.39912 8.71731 10.0231 7.68405C12.0621 4.30227 14.4106 1.90632 17.3157 0.24163C17.5279 0.121832 17.7076 0.0170088 17.7126 0.00952148C17.73 -0.00794792 17.6377 -0.000461578 17.4555 0.0244961Z" fill="currentColor"/>
                                            </svg>
                                            Feel Free To Book A Free Demo Now
                                        </span>
                                    </div>
                                </div>
                                <div className="banner-img tp_fade_left">
                                    <img src="assets/images/rebot/robo-call-banner.gif"
                                    style={{borderRadius: "14px"}}
                                    alt="call center picture picture that showing comunication with client" />
                                </div>
                            </div>
                        </div>
                        <div className="banner-shape d-none d-lg-block">
                            <img src="assets/images/banner/home1/shape-1.png" alt="arrow image with no background" className="banner-shape-1" data-speed="0.7" />
                            <img src="assets/images/banner/home1/shape-2.png" alt="video icon with no background" className="banner-shape-2" data-speed="0.8" />
                            <img src="assets/images/banner/home1/shape-3.png" alt="message icon without background" className="banner-shape-3" data-speed="0.8" />
                            <img src="assets/images/banner/home1/shape-4.png" alt="dot icon without background" className="banner-shape-4" data-speed="0.7" />
                            <img src="assets/images/banner/home1/shape-5.png" alt="design for website" className="banner-shape-5" />
                        </div>
                    </section>
    ); 
       
}