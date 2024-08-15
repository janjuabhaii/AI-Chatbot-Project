import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Timeslots from "./timeslots";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './booking-form.css'
import axios from "axios";
import moment from 'moment-timezone';

export const BookingForm = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [timeslot, setTimeslot] = useState("");
    const[contries, setContries] = useState(props.data.Countries);
    const[industries, setIndustries] = useState(props.data.Industries);
    const [bookedTimeslots, setBookedTimeslots] = useState([]);
    const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [allTimezones, setAllTimezones] = useState([]);


    useEffect(() => {

        // Get all timezones when component mounts
        const timezones = moment.tz.names();
        setAllTimezones(timezones);

        setContries(props.data.Countries);
        setIndustries(props.data.Industries);
    }, [props.data.Countries, props.data.Industries]);

    const onDateChange = (date) => {
        let bookingDate = moment(date).format("YYYY-MM-DD");
        setSelectedDate(date);
        axios
      .get("/api/booked-timeslots?bookingDate="+bookingDate)
      .then((response) => {
        setBookedTimeslots(response.data.bookedSlots);   
      })
      .catch((error) => {
        console.log(error);
      });
    }

    // handle timezone select change
  const onTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  }



    const showToastMessage = (msg) => {
        Swal.fire({
            icon: "error",
            text: msg,
            toast: true,
            position: 'top-end',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false
        })
    }
    const handleSubmit = (e) => {
        
        e.preventDefault();
        //check validation
        if(timeslot === ""){
            showToastMessage("Please select timeslot");
            return false;
        }
        if(selectedDate === null){
            showToastMessage("Please select date");
            return false;
        }
        //date should be greater than current date
        if(moment(selectedDate).isBefore(moment())){
            showToastMessage("Please select future date");
            return false;
        }
        
        Swal.fire({
            title: "Are you sure?",
            text: "Please cross check your details before submitting!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Submit it!"
          }).then((result) => {
            if (result.isConfirmed) {
                //get form data
                const formData = new FormData(e.target);
                let data = Object.fromEntries(formData.entries());
                data.bookingDate = moment(selectedDate).format("YYYY-MM-DD");
                data.timeslot = timeslot;
                data.timezone = selectedTimezone;
                console.log("form", data)
                axios.post("/api/book-timeslot", data)
                .then((response) => {
                    console.log(response.data);
                    if(response.data.status === "success"){
                        Swal.fire({
                            title: "Submitted!",
                            text: "Your request has been submitted. We will get back to you shortly.",
                            icon: "success"
                          });
                          //reset form
                          e.target.reset();
                          onDateChange(selectedDate);
                    }
                    else{
                        showToastMessage(response.data.message);
                    }
                }).catch((error) => {
                    console.log(error);
                })
            }
          });
    }

    const handleTimeslotChange = (timeslot) => {
        setTimeslot(timeslot);
    }
    
    const isWeekends = (date) => {
        const day = date.getDay();
        return day == 0 || day == 6;
      };

    return(
        <section id="BookingSection" className="h2_work-area bg-default pt-140 pb-140" style={{ backgroundImage: "url('assets/images/work/home2/bg.jpg')" }}>
        <div class="container">
                    <div class=" tp_fade_left0">
                        <span class="login-content-subtitle">Book A Demo</span>
                        <h2 class="h2_section-title tp_title_slideup text-center">Unlock the power of conversation with our interactive humanoid AI chatbot</h2>
                        <form action="#" class="login-form p-4" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="login-form-item mb-25">
                                        <input name="fullName" type="text" placeholder="Your Name" required />
                                        <i class="fa-light fa-user"></i>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="login-form-item mb-25">
                                        <input type="email" name="email" placeholder="Your Email" required />
                                        <i class="fa-light fa-envelope"></i>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="login-form-item mb-25">
                                        <input name="phoneNumber" type="text" placeholder="Contact Number" />
                                        <i class="fa-light fa-phone"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <select value={selectedTimezone}  class="form-select" name="timezone" onChange={onTimezoneChange}>
                                        <option value="">Select Timezone</option>
                                        {allTimezones.map((timezone, index) => (
                                        <option value={timezone} key={index}>{timezone}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <div class="login-form-item mb-25">
                                    <select name="country" class="form-select" aria-label="Default select example">
                                
                                            <option selected>Select Country</option>
                                            {
                                            contries && contries.length > 0 ? contries.map((country, index) => {
                                                return <option key={`country-${index}`} value={country.name}>{country.name}</option>
                                            }) : null
                                        }
                                        </select>
                                    </div>
                                </div>
                                {/* dropdown for industry */}
                                <div className="col-md-4">
                                    <div class="login-form-item mb-25">
                                        <select name="industry" class="form-select" aria-label="Default select example">
                                            <option selected>Select Industry</option>
                                            {
                                            industries && industries.length > 0 ? industries.map((industry, index) => {
                                                return <option key={`industry-${index}`} value={industry.name}>{industry.name}</option>
                                            }) : null
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class=" mb-20">
                            <div className="row">
                                <p>Select your preferred date and timeslot</p>
                                <div className="col-lg-4">
                                <Calendar 
                                    onChange={onDateChange} 
                                    value={selectedDate} 
                                    minDate={new Date()}
                                    //disable weekends
                                    // tileDisabled={({ date }) => isWeekends(date)}
                                />
                                </div>
                                <div className="col-lg-8">
                                <Timeslots bookedSlots={bookedTimeslots} selectedDate={selectedDate} selectedTimezone={selectedTimezone} handleTimeslotChange={handleTimeslotChange} />
                                </div>
                            </div>
                            
                                
                                
                            </div>

                            <div class="login-form-item mb-25">
                                <button type="submit">Book Demo</button>
                            </div>
                        </form>
                    
                        <div class="login-content-link">
                            <p>Any issue in booking ?  <Link to="/contact-us">Contact Us</Link></p>
                        </div>
                        
             
            </div>
        </div>
        <div class="login-shape d-none d-xl-block">
            {/* <img src="assets/images/bg/login-shpae-1.png" alt="" class="login-shape-1" data-speed="0.8" /> */}
            {/* <img src="assets/images/bg/login-shpae-2.png" alt="" class="login-shape-2" data-speed="0.8" /> */}
            {/* <img src="assets/images/bg/login-shpae-3.png" alt="" class="login-shape-3" data-speed="0.8" /> */}
        </div>
    </section>

    
    );
    
}