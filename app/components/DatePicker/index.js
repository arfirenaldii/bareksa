import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

import './style.css'

function Calendar(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 10));
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      dateFormatCalendar="MMMM"
      dateFormat="MMM yyyy"
      formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
      selectsRange
      minDate={new Date()}
      maxDate={addDays(new Date(), 30)}
      showDisabledMonthNavigation
      disabledKeyboardNavigation
      showPopperArrow={false}
    />
  );
}

export default Calendar;
