import React, { useEffect, useState } from "react";
import axios from "axios";
import { AdminHeader } from "../../components/admin/AdminHeader";
import { AdminFooter } from "../../components/admin/AdminFooter";
import Swal from "sweetalert2";
import moment from 'moment-timezone';

export const Settings = () => {

    useEffect(() => {
        // Get all timezones when component mounts
        const timezones = moment.tz.names();
        setAllTimezones(timezones);
        // check if user is logged in
        if (!localStorage.getItem('admin')) {
            window.location.href = "/admin-login";
        }
    },[1])

    const[settings, setSettings] = React.useState({});
    const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [allTimezones, setAllTimezones] = useState([]);

     // handle timezone select change
        const onTimezoneChange = (event) => {
            setSelectedTimezone(event.target.value);
        }


    function getSettings(){
        axios
            .get("api/get-settings")
            .then((response) => {
                setSettings(response.data.settings);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    //get settings
    useEffect(() => {
        getSettings();
    },[1]);
    const handlePasswordChange = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = Object.fromEntries(form.entries());
        
        axios.post('api/change-password', data).
            then((response) => {
                if(response.data.status === "success"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: response.data.message,
                        toast: true,
                        position: 'top-end',
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                    getSettings();
                }
                else{
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: response.data.message,
                        toast: true,
                        position: 'top-end',
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                }
            })
    }

    const handleConfigChange = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = Object.fromEntries(form.entries());
        if(data.timeslot_length == ""){
            data.timeslot_length = settings.timeslot_length;
        }
        if(data.start_time == ""){
            data.start_time = settings.start_time;
        }
        if(data.end_time == ""){
            data.end_time = settings.end_time;
        }
        
        axios.post('api/change-settings', data).
            then((response) => {
                if(response.data.status === "success"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: response.data.message,
                        toast: true,
                        position: 'top-end',
                        timer: 3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                    })
                }
                else{
                   Swal.fire({
                       icon: 'error',
                       title: 'Error',
                       text: response.data.message,
                       toast: true,
                       position: 'top-end',
                       timer: 3000,
                       timerProgressBar: true,
                       showConfirmButton: false
                   })
                }
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
        <div style={{minHeight: "95%", backgroundColor: "whiteSmoke"}}>
            <AdminHeader />
            <main>
                <div className="page-title-area">
                    <div className="container">
                        <div className="page-title-content pt-30 pb-20">
                            <h2><i className="fa-light fa-cog"></i> Settings</h2>
                            <hr />
                        </div>
                    </div>
                </div>    
                <div className="container">
                    <div className="row pb-100">
                        <div className="col-md-6">
                        <div className="card mb-50">
                        <div className="card-header bg-light">
                            <span className="card-title text-muted h6">Basic Config</span>
                        </div>
                        <div className="card-body">
                        <form onSubmit={handleConfigChange}>
                            <input type="hidden" name="id" value={settings ? settings.id : ""} />
                        <div className="form-group mb-2">
                                <label for="timeslot_length">Timeslot lenth in mins</label>
                                <input type="number" className="form-control" id="timeslot_length" name="timeslot_length" min="30"
                                />
                                <span className="text-muted">
                                    Current Timeslot Length: {settings ? settings.timeslot_length+" mins" : ""}
                                </span>
                            </div>
                            <div className="form-group mb-2">
                                    <select value={selectedTimezone}  class="form-select" name="timezone" onChange={onTimezoneChange}>
                                        <option value="">Select Timezone</option>
                                        {allTimezones.map((timezone, index) => (
                                        <option value={timezone} key={index}>{timezone}</option>
                                        ))}
                                    </select>
                                </div>
                            <div className="form-group mb-2">
                                <label for="start_time">Starting Time</label>
                                <input type="time" className="form-control" 
                                id="start_time" placeholder="Start Time" name="start_time" />
                                <span className="text-muted">
                                    Current Start Time: {settings ? settings.start_time : ""}
                                </span>
                            </div>
                            <div className="form-group mb-2">
                                <label for="end_time">Ending Time</label>
                                <input type="time" className="form-control" 
                                id="end_time" placeholder="Ending Time" name="end_time" />
                                <span className="text-muted">
                                    Current Ending Time: {settings ? settings.end_time : ""}
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    </div>
                        </div>
                        <div className="col-md-6">

                        <div className="card mb-50">
                        <div className="card-header bg-light">
                            <span className="card-title text-muted h6">Change Password</span>
                        </div>
                        <div className="card-body">
                        <form onSubmit={handlePasswordChange}>
                            <div className="form-group mb-2">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" name="email"
                                value={localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin')).email : ''}
                                readOnly
                                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group mb-2">
                                <label for="exampleInputPassword1">Current Password</label>
                                <input type="password" className="form-control" name="current_password" id="exampleInputPassword1" placeholder="Password" required />
                            </div>
                            <div className="form-group mb-2">
                                <label for="exampleInputPassword2">New Password</label>
                                <input type="password" className="form-control" name="new_password" id="exampleInputPassword2" placeholder="Password"  required/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </main>
        </div>
            <AdminFooter />

        </>
    );

}