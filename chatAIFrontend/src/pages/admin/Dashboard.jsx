import React, { useEffect } from "react";
import { AdminHeader } from "../../components/admin/AdminHeader";
import { BookingTable } from "../../components/admin/BookingTable";
import { AdminFooter } from "../../components/admin/AdminFooter";

export const Dashboard = () => {

    useEffect(() => {
        // check if user is logged in
        if (!localStorage.getItem('admin')) {
            window.location.href = "/admin-login";
        }
    })
    return (
        <>
        <div style={{minHeight: "95%", backgroundColor: "whiteSmoke"}}>
            <AdminHeader />
            <main style={{backgroundColor: "whiteSmoke"}}>
                <div className="page-title-area">
                    <div className="container">
                        <div className="page-title-content pt-30 pb-20">
                            <h2><i className="fa-light fa-chart-line"></i> Dashboard</h2>
                            <hr />
                        </div>
                    </div>
                </div>    
                <div className="container">
                    <BookingTable />
                </div>
            </main>
            
        </div>
        <AdminFooter />
        </>
    );

}