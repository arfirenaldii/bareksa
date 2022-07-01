import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTime } from 'date-fns';

import Calendar from 'components/Calendar'
import Column from 'components/Column'
import Button from 'components/Button'

import OrderTable from '../components/OrderTable'

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  text-align: center;
  gap: 16px;
  margin: 32px 0px;
`

const CalendarWrapper = styled.div`
  margin: 16px;
`

function getFilteredOrders(orders, date) {
  if (orders.length === 0) {
    return
  }

  let filteredOrders = []
  orders.forEach((order) => {
    if (
      (getTime(new Date(order.start_date)) >= getTime(date.startDate) && getTime(new Date(order.start_date)) <= getTime(date.endDate)) ||
      (getTime(new Date(order.due_date)) >= getTime(date.startDate) && getTime(new Date(order.due_date)) <= getTime(date.endDate))
    ) {
      filteredOrders.push(order)
    }
  });

  return filteredOrders
}

function FilterButton(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Wrapper>
        <Button
          color="white"
          line={true}
          handleRoute={props.onClickCancel}
        >
          Cancel
        </Button>
        <Button
          color="green"
          handleRoute={props.onClickFilter}
        >
          Filter
        </Button>
      </Wrapper>
    </div>
  )
}

function Orders(props) {
  const [orders, setOrders] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  function onChange(dates) {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  function onClickCancel(orders, date) {
    setStartDate(date.minDate)
    setEndDate(date.maxDate)
    setOrders(orders)
  };

  function onClickFilter(orders, date) {
    setOrders(getFilteredOrders(orders, date))
  };

  useEffect(() => {
    setOrders(props.home.orders)
    if (props.home.orders.length !== 0) {
      let lastIndex = props.home.orders.length - 1
      setMinDate(new Date(props.home.orders[0].start_date))
      setMaxDate(new Date(props.home.orders[lastIndex].start_date))
      setStartDate(new Date(props.home.orders[0].start_date))
      setEndDate(new Date(props.home.orders[lastIndex].start_date))
    }
  }, []);

  return (
    <div>
      <Column width={25}>
        <CalendarWrapper>
          <Calendar
            startDate={startDate}
            endDate={endDate}
            minDate={minDate}
            maxDate={maxDate}
            onChange={(date) => onChange(date)}
            {...props}
          >
            <FilterButton
              onClickCancel={() => onClickCancel(props.home.orders, { minDate, maxDate })}
              onClickFilter={() => onClickFilter(props.home.orders, { startDate, endDate })}
              {...props}
            />
          </Calendar>
        </CalendarWrapper>
      </Column>
      <Column width={75}>
        <OrderTable
          orders={orders}
          {...props}
        />
      </Column>
    </div>
  )
}

export default Orders
