import React from 'react';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";

import './style.css'

function Calendar(props) {
  return (
    <DatePicker
      className="datepicker"
      selected={props.startDate}
      onChange={props.onChange}
      startDate={props.startDate}
      endDate={props.endDate}
      formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
      selectsRange
      minDate={props.minDate}
      maxDate={props.maxDate}
      showDisabledMonthNavigation
      disabledKeyboardNavigation
      inline
    >
      {props.children}
    </DatePicker>
  );
}

Calendar.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  onChange: PropTypes.func,
  children: PropTypes.object,
};

export default Calendar;
