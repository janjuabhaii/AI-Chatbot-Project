import React from "react";

export const Clients = (props) => {
    return(
        <section className="h2_brand-area pb-140 pt-135" id="PartnerSection">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xxl-8 col-xl-9 col-lg-9">
                                    <div className="h2_section-area text-center mb-50">
                                        <span className="h2_section-subtitle tp_subtitle_anim">Our Partners</span>
                                        <h2 className="h2_section-title tp_title_slideup mb-0">Professionals & Teams Choose Chatbot</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="h2_brand-wrap">
                                <div className="h2_brand-item tp_fade_bottom">
                                    <img src="assets/images/logo/bean-bend.png" alt="logo for company without background " />
                                </div>
                                <div className="h2_brand-item tp_fade_bottom p-4">
                                    <img src="assets/images/logo/safe.png" alt="logo for company without background " />
                                </div>
                            
                                <div className="h2_brand-item tp_fade_bottom">
                                    <img src="assets/images/logo/shortlisted.png" className="img-fluid"  alt="logo for company without background " />
                                </div>
                                
                                {/* <div className="h2_brand-item tp_fade_bottom">
                                    <img src="assets/images/brand/4.png" alt="Image Not Found" />
                                </div>
                                <div className="h2_brand-item tp_fade_bottom">
                                    <img src="assets/images/brand/5.png" alt="Image Not Found" />
                                </div> */}
                            </div>
                        </div>
                    </section>
    );
}