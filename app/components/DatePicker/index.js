import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';

import './style.css';

function CustomDatePicker(props) {
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

CustomDatePicker.propTypes = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  onChange: PropTypes.func,
};

export default CustomDatePicker;
