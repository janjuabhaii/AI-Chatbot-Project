import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import axios from 'axios';
import seedrandom from 'seedrandom';
import './slot.css';

const Timeslots = (props) => {
  const [slots, setSlots] = useState([]);
  const [randNumber, setRandNumber] = useState([3,5]);

  useEffect(() => {
    // Fetch settings and generate timeslots
    getSettings();
  }, [props.selectedDate, props.selectedTimezone]);

  function getSettings() {
    axios
      .get("api/get-settings")
      .then((response) => {
        const settings = response.data.settings;
        const inTime = settings.start_time;
        const outTime = settings.end_time;
        const slotTime = settings.timeslot_length;
        const settingTimezone = settings.timezone || "Asia/Karachi";
        intervals(inTime, outTime, slotTime, props.selectedTimezone, settingTimezone);
        const s_date = moment(props.selectedDate).format("YYYY-MM-DD");
        setRandNumber(generateRandomNumbers(s_date));
        console.log(randNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function intervals(startString, endString, slotTime, userTimezone, settingTimezone) {
    const timeFormat = "hh:mm a";
    //if timezone is not set get current timezone
    if (!userTimezone) {
      userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    //convert the start and end time from Asia/Karachi to selected timezone
    const start = moment.tz(startString, timeFormat, settingTimezone).tz(userTimezone);
    const end = moment.tz(endString, timeFormat, settingTimezone).tz(userTimezone);
    
    start.minutes(Math.ceil(start.minutes() / slotTime) * slotTime);

    const timeslots = [];
    let current = moment(start);
    while (current <= end) {
      const timeSlot = current.format(timeFormat) + " - " + current.add(slotTime, 'minutes').format(timeFormat);
      // if (!slots.includes(timeSlot)) {
        timeslots.push(timeSlot);
      // }
    }
    setSlots(timeslots);
  }


  // handle radio button selection changed
  const onTimeslotChange = (event) => {
    props.handleTimeslotChange(event.target.value);
  }

  const generateRandomNumbers = (dateString) => {
    // Convert the date string to a seed value
    const seed = dateString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
    // Initialize the random number generator with the seed
    const rng = seedrandom(seed);
  
    // Generate two random numbers between 2 and 6
    let randomNumber1 = Math.floor(rng() * 5) + 2; // Random number between 2 and 6
    let randomNumber2 = Math.floor(rng() * 5) + 2; // Random number between 2 and 6
    if(randomNumber1 === randomNumber2){
      randomNumber2 = randomNumber2 + 1;
    }
    return [randomNumber1, randomNumber2];
  };
  

  return (
      <div className='row'>
         {
          slots && slots.length > 0 ? slots.map((time, index) => {
            return (
              <div className="col-md-3 col-lg-3 col-sm-6 col-xs-6 mb-3" key={`slot-${index}`}>
                <input type="radio" className="btn-check" name="timeslots" id={`timeslot-${index}`} 
                disabled={index % randNumber[0] === 0 || index % randNumber[1] === 0 || props.bookedSlots.includes(time)}
                autoComplete="off" value={time} onChange={onTimeslotChange} />
                <label className="btn btn-outline-slot" htmlFor={`timeslot-${index}`}>{time}</label>
              </div>
            );
          }) : null
        }
      </div>
  );
}

export default Timeslots;