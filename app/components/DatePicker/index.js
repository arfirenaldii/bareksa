import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './style.css'

function Calendar(props) {
  return (
    <DatePicker
      selected={props.startDate}
      onChange={props.onChange}
      startDate={props.startDate}
      endDate={props.endDate}
      dateFormat="MMM yyyy"
      formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
      selectsRange
      minDate={props.minDate}
      maxDate={props.maxDate}
      showDisabledMonthNavigation
      disabledKeyboardNavigation
      showPopperArrow={false}
    />
  );
}

export default Calendar;
