import React, { useState, useEffect } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, subMonths, addMonths } from "date-fns";
import './Datepicker.scss';
import OutsideDetect from "../../hooks/detectOutside";
import calendarImage from "../../assets/icons/icons8-calendar-64 (2).png";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [clickedDate, setClickedDate] = useState('');
  const [month, setMonth] = useState();
  const [showCalendar, setShowCalendar] = useState(false);

  let datesArray = [];

  const yyyyMmmm = format(activeDate, "yyyy/MM/");

  console.log("YYMM", yyyyMmmm);
  const currentMonth = format(activeDate, "MMMM yyyy");

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
    // setMonth(monthStart);
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
    const tempDate = event.target.textContent;
    setClickedDate(event.target.textContent);
    formatDate(event.target.textContent);
  }

  const formatDate = (date) => {
    const day = parseInt(date) < 10 ? '0' + date : date;
    console.log(day);
    console.log(currentMonth);
    console.log(day + ' ' + currentMonth);

    
  }

  useEffect(() => {
    // console.log(formatDate(clickedDate));
    // console.log(currentMonth);
  }, [clickedDate])




  getDates();
  // console.log(datesArray[0]);

  return (
    <div className="datepicker-input">
      
      <div className="date-input-container">
        <label>Date</label>
        <input
          type="text" 
          placeholder="Select date" 
          onFocus = {()=>setShowCalendar(true)}
          onClick={()=>setShowCalendar(true)}
        />
        <img src={calendarImage}/>
      </div>
      <OutsideDetect showCalendar={showCalendar} setShowCalendar={setShowCalendar}>
        <div className={`datepicker-container ${showCalendar ? "" : "hide"}`}>
          <div className="datepicker-wrapper">
            <div className="button-header">
              <button onClick={() => setActiveDate(subMonths(activeDate, 1))}>{"<"}</button>
              <h3>{currentMonth}</h3>
              <button onClick={() => setActiveDate(addMonths(activeDate, 1))}>{">"}</button>
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
            <div className="dates-wrapper">
              <div className="date-days">
                {
                  datesArray.map((date, index) => {
                    return(
                      <ul className="days-content" key={index}>
                      {
                        date.map((subdate) => {
                          return(
                            <li className="day">
                              <p className={clickedDate ? 'clicked' : 'unclick'} onClick={onClickDate}>{subdate}</p>
                            </li>
                          )
                        })
                      }
                        
                      </ul>
                    )
                  })
                }
              </div>
            </div>
            
          </div>
          
        </div>
      </OutsideDetect>
      
    </div>
    
  )
}

export default DatePicker;
