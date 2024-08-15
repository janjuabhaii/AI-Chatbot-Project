import React, { useEffect } from "react";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { WhatMakesDifferent } from "../components/what-makes-different";
import { WorkProcess } from "../components/work-process";
import { FAQ } from "../components/faq";
import { Footer } from "../components/footer";
import { Clients } from "../components/clients";
import { Contact } from "../components/contact";
import { BookingForm } from "../components/Demo-Booking/booking-form";

export const HomePage = (props) => {
    
    const data = props.data;
    
    useEffect(() => {
        // Load external JavaScript functionality
        const script = document.createElement('script');
        script.src = 'external.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup function to remove the script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Header />
            <main>
            <Banner />
            <WhatMakesDifferent />
            <WorkProcess />
            <Clients />
            <Contact />
            <FAQ />
            <BookingForm data={data} />
        </main>
        <Footer />
        </>
    );
}