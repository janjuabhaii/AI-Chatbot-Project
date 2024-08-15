import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const BookingTable = () => {

    const [bookings, setBookings] = useState([]);

    function getBookings(){
        axios
            .get("api/bookings")
            .then((response) => {
                setBookings(response.data.bookings);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getBookings();
    }, [1]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        // get form data
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        axios.post("api/booking-status", data)
            .then((response) => {
                if (response.data.status === "success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: response.data.message,
                        toast: true,
                        position: 'top-end',
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    getBookings();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.data.message,
                        toast: true,
                        position: 'top-end',
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    const actionBodyTemplate = (booking) => {
        return (
            <form onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={booking.id} />
            <input type="hidden" name="status" value={booking.status === "pending" ? "completed" : "pending"} />
            {
                booking.status === "pending" ? <button type="submit" className="btn btn-success btn-sm"><i class="fa-solid fa-check"></i> </button> 
                : <button type="submit" className="btn btn-warning btn-sm"><i class="fa-solid fa-clock-rotate-left"></i> </button>
            }
            
        </form>
        );
    }

    const statusBodyTemplate = (booking) => {
        return(
            booking.status === "pending" ? <span className="badge bg-warning text-dark">Pending</span> : <span className="badge bg-success">Completed</span>
        )
    }

    //paginate excute javascript to initialize table

    return (
        <div>
            <div className="card-body pb-100" >
            <h5 className="h5">Bookings</h5>
            <hr className="border" />
            <DataTable value={bookings} paginator rows={10} showGridlines rowsPerPageOptions={[5, 10, 25]}>
                <Column field="fullName" header="Name"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="phoneNumber" header="Phone Number"></Column>
                <Column field="industry" header="Industry"></Column>
                <Column field="country" header="Country"></Column>
                <Column field="timeslot" header="Timeslot"></Column>
                <Column field="bookingDate" header="Demo Date"></Column>
                <Column field="timezone" header="Timezone"></Column>
                <Column field="status" header="Status" body={statusBodyTemplate}></Column>
                <Column header="Action" body={actionBodyTemplate}></Column>
            </DataTable> 
            </div>
        </div>
    )
}