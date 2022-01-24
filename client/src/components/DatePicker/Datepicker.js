import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, subMonths, addMonths } from "date-fns";
import './Datepicker.scss';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [clickedDate, setClickedDate] = useState(new Date());

  let datesArray = [];

  const currentMonth = format(activeDate, "MMMM yyyy");

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const getCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
       weekDays.push(format(currentDate, "d"));
       currentDate = addDays(currentDate, 1);
    }
    // console.log(weekDays);
    datesArray.push(weekDays);

  }

  
  const getDates = () => {
    //get date of first day of current month
    const monthStart = startOfMonth(activeDate);
    const monthEnd = endOfMonth(activeDate);

    // console.log(monthStart);
    // console.log(monthEnd);

    //get first day of the current month
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    // console.log(startDate);
    // console.log(endDate);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      
      allWeeks.push(
        getCurrentWeek(currentDate, selectedDate, activeDate)
      );
     
      currentDate = addDays(currentDate, 7);
      
    }
    // console.log(allWeeks);
  };

  const onClickDate = (event) => {
    setClickedDate(event.target);
    console.log(event.target);
    // console.log(clickedDate);
  }

  getDates();
  // console.log(datesArray[0]);

  return (
    <div className="date-container">
      <button onClick={() => setActiveDate(subMonths(activeDate, 1))}>prev</button>
      <button onClick={() => setActiveDate(addMonths(activeDate, 1))}>next</button>
      <div className="date-header">
        <h3>{currentMonth}</h3>
      </div>
      <div className="date-weekdays">
        {
          days.map(day => {
            return (
              <p>{day}</p>
            )
          })
        }
      </div>
      <div className="date-days">
        {
          datesArray.map((date, index) => {
            return(
              <div className="days-content"key={index}>
              {
                date.map((subdate) => {
                  return(
                    <div className="day">
                      <p className={clickedDate ? 'clicked' : 'unclick'} onClick={onClickDate}>{subdate}</p>
                    </div>
                  )
                })
              }
                
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DatePicker;