import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

import './style.css'

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 10));
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      className="datepicker"
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      dateFormatCalendar="MMMM"
      formatWeekDay={nameOfDay => nameOfDay.substring(0, 1)}
      selectsRange
      minDate={new Date()}
      maxDate={addDays(new Date(), 30)}
      showDisabledMonthNavigation
      disabledKeyboardNavigation
      inline
    >
      <div style={{ textAlign: 'center' }}>
        <button type="button" onClick={() => console.log('cancel')}>Cancel</button>
        <button type="button" onClick={() => console.log('filter')}>Filter</button>
      </div>
    </DatePicker>
  );
}

export default Calendar;
