import React from "react";

export const WorkProcess = (props) => {
    return(
        <section id="WorkSection" className="h2_work-area bg-default pt-140 pb-140" style={{ backgroundImage: "url('assets/images/work/home2/bg.jpg')" }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-5 col-md-6">
                                    <div className="h2_work-content mb-50 mb-md-0">
                                        <div className="h2_section-area mb-20">
                                            <span className="h2_section-subtitle tp_subtitle_anim">Working Process</span>
                                            <h2 className="h2_section-title tp_title_slideup mb-30">
                                                Constantly
                                                Improving Itself</h2>
                                            <p className="h2_section-text tp_fade_bottom">Constantly Evolving: Our AI chatbot adapts and learns from every interaction, ensuring continuous improvement in performance and efficiency.</p>
                                        </div>
                                        <ul className="h2_work-content-list tp_fade_bottom">
                                            <li>Learning and Development Ability</li>
                                            <li>Ease of Integration</li>
                                        </ul>
                                        <a href="#" className="theme-btn-2 tp_fade_bottom">Explore More</a>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-6">
                                    <div className="h2_work-img tp_fade_left">
                                        <img src="assets/images/rebot/banner-rebot-hd.png" alt="Image Not Found" />
                                    </div>
                                </div>
                            </div>
                            <div className="h2_work-bottom pt-80">
                                <div className="h2_work-item h2_work-item-1 tp_has_fade_anim" data-fade-from="bottom">
                                    <div className="h2_work-item-icon">
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="h2_work-item-info">
                                        <span>Data Processing</span>
                                    </div>
                                </div>
                                <div className="h2_work-item h2_work-item-2 tp_has_fade_anim" data-fade-from="bottom" data-delay=".8">
                                    <div className="h2_work-item-icon">
                                        <i className="fa-solid fa-comments"></i>
                                    </div>
                                    <div className="h2_work-item-info">
                                        <span>Generating a Response</span>
                                    </div>
                                </div>
                                <div className="h2_work-item h2_work-item-3 tp_has_fade_anim" data-fade-from="bottom" data-delay="1.1">
                                    <div className="h2_work-item-icon">
                                        <i className="fa-solid fa-rocket-launch"></i>
                                    </div>
                                    <div className="h2_work-item-info">
                                        <span>Integration and implementation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h2_work-shape d-none d-md-block">
                            <img src="assets/images/work/home2/shape-1.png" alt="video icon without background" className="h2_work-shape-1" data-speed="0.6" />
                            <img src="assets/images/work/home2/shape-2.png" alt="design for website" className="h2_work-shape-2" data-speed="0.8" />
                            <img src="assets/images/work/home2/shape-3.png" alt="dot image without background" className="h2_work-shape-3" data-speed="0.8" />
                            <img src="assets/images/work/home2/shape-4.png" alt="design for website without background" className="h2_work-shape-4" data-speed="0.7" />
                        </div>
                    </section>   
    );
}