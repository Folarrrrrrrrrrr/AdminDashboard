import React, { useEffect, useState } from 'react'
import Style from "./Date_Picker.module.css"
import arrow_left from "../../assets/svg/arrow_up.svg"
import arrow_right from "../../assets/svg/arrow_down2.svg"



const Date_Picker = ({ onDateChange }) => {

  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const [selectedDay, setSelectedDay] = useState(date.getDate());



  const months = [

    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",

  ];


  // useEffect(() => {
  //   if (onDateChange) {
  //     onDateChange(date); // Trigger the date change in the parent component
  //   }
  // }, [selectedDate]);



  const renderCalendar = () => {
    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); // First day of the current month
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Last date of the current month
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); // Last date of previous month

    let liTag = [];

    // Previous month's days
    for (let i = 0; i < firstDayOfMonth; i++) {

      liTag.push(
        <p key={`prev-${i}`} className={Style.inactive}>

          {lastDateOfLastMonth - firstDayOfMonth + i + 1}
        </p>
      );
    }

    // Current month's days
    for (let i = 1; i <= lastDateOfMonth; i++) {

      let isToday = i === selectedDay;

      liTag.push(

        <p
          key={`current-${i}`}

          className={isToday ? Style.active : ""}

          onClick={() => handleDayClick(i)}
        >
          {i}
        </p>
      );
    }

    // Next month's first few days
    // let remainingDays = 42 - liTag.length; // 6 weeks grid, 42 slots in total

    // for (let i = 1; i <= remainingDays; i++) {

    //   liTag.push(

    //     <p key={`next-${i}`} className={Style.inactive}>
    //       {i}
    //     </p>
    //   );
    // }

    return liTag;
  };

  const handleDayClick = (day) => {

    setSelectedDay(day);
    // Update the date object to the clicked day
    //   setDate(new Date(currYear, currMonth, day));

    const newDate = new Date(currYear, currMonth, day);
    setDate(newDate);

    if (onDateChange) {

      onDateChange(newDate);  // Call the parent function with the new date
    }
  };

  const handlePrevNext = (direction) => {

    if (direction === "prev") {

      setCurrMonth((prevMonth) => {

        let newMonth = prevMonth - 1;

        if (newMonth < 0) {
          setCurrYear((prevYear) => prevYear - 1);
          return 11; // Set to December of the previous year

        }
        return newMonth;
      });

    } else if (direction === "next") {

      setCurrMonth((prevMonth) => {

        let newMonth = prevMonth + 1;

        if (newMonth > 11) {
          setCurrYear((prevYear) => prevYear + 1);
          return 0; // Set to January of the next year
        }

        return newMonth;
      });
    }
  };

  useEffect(() => {

    renderCalendar(); // Rerender the calendar when month/year or day changes
  }, [currMonth, currYear, selectedDay]);


  return (
    <div id={Style.mainDiv}>
      <div id={Style.wrapper}>

        <header>
          <img id={Style.prev} onClick={() => handlePrevNext("prev")} src={arrow_left} alt="" />

          <div id={Style.current_date}> {`${months[currMonth]} ${selectedDay}, ${currYear}`} {/* Show full selected date */}</div>

          {/* <div id={Style.icons}> */}
            <img id={Style.next} onClick={() => handlePrevNext("next")} src={arrow_right} alt="" />
          {/* </div> */}

        </header>

        <div className={Style.calendar}>

          <div id={Style.weeks}>
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thur</p>
            <p>Fri</p>
            <p>Sat</p>
          </div>

          <div id={Style.days}>

            {renderCalendar()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Date_Picker