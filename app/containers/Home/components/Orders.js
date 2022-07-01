import React, { useState, useEffect } from 'react';

import Calendar from 'components/Calendar'
import Column from 'components/Column'
import Button from 'components/Button'

import OrderTable from '../components/OrderTable'

function FilterButton(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Button
        color="white"
        line={true}
        handleRoute={() => console.log('cancel')}
      >
        Cancel
      </Button>
      <Button
        color="green"
        handleRoute={() => console.log('filter')}
      >
        Filter
      </Button>
    </div>
  )
}

function Orders(props) {
  const [orders, setOrders] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    setOrders(props.home.orders)
  }, []);

  useEffect(() => {
    if (orders.length > 0) {
      let lastIndex = orders.length - 1
      setStartDate(new Date(orders[0].start_date))
      setEndDate(new Date(orders[lastIndex].start_date))
      setMinDate(new Date(orders[0].start_date))
      setMaxDate(new Date(orders[lastIndex].start_date))
    }
  }, [orders]);

  return (
    <div>
      <Column width={25}>
        <Calendar
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          maxDate={maxDate}
          onChange={onChange}
          {...props}
        >
          <FilterButton {...props} />
        </Calendar>
      </Column>
      <Column width={75}>
        <OrderTable {...props} />
      </Column>
    </div>
  )
}

export default Orders