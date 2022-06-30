import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

import H5 from 'components/H5'
import DatePicker from 'components/DatePicker'

import RevenueChart from './RevenueChart'
import ChartWrapper from './ChartWrapper'

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  position: relative;
`

function getRevenue(orders) {
  let keyRevenue = []
  let valueRevenue = []

  for (let i = 0; i < orders.length; i++) {
    let keyDate = format(new Date(orders[i].start_date), 'yyyy-MM-dd')
    if (keyRevenue.includes(keyDate)) {
      let index = keyRevenue.indexOf(keyDate)
      valueRevenue[index] += parseInt(orders[i].conversion_revenue)
    } else {
      keyRevenue.push(keyDate)
      valueRevenue.push(parseInt(orders[i].conversion_revenue))
    }
  }

  return {
    key: keyRevenue,
    value: valueRevenue
  }
}

function Revenue(props) {
  const [orders, setOrders] = useState([])
  const [revenue, setRevenue] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    setOrders(props.home.orders)
    // let index = getRevenue(props.home.orders).key.length - 1
    // setStartDate(new Date(getRevenue(props.home.orders).key[0]))
    // setEndDate(new Date(getRevenue(props.home.orders).key[index]))
    // setMinDate(new Date(getRevenue(props.home.orders).key[0]))
    // setMaxDate(new Date(getRevenue(props.home.orders).key[index]))

    // setLabels(getRevenue(props.home.orders).key)
    // setData(getRevenue(props.home.orders).value)

    setRevenue(getRevenue(props.home.orders))
  }, []);

  useEffect(() => {
    if (revenue.length !== 0) {
      setLabels(revenue.key)
      setData(revenue.value)

      let index = revenue.key.length - 1
      setStartDate(new Date(revenue.key[0]))
      setEndDate(new Date(revenue.key[index]))
      setMinDate(new Date(revenue.key[0]))
      setMaxDate(new Date(revenue.key[index]))
    }
  }, [revenue]);

  useEffect(() => {
    if (endDate !== null) {
      // setLabels(['2020-01-03', '2020-01-05', '2020-01-06'])
      // setData([1185, 672, 2695])
    }
  }, [endDate]);

  return (
    <ChartWrapper>
      <TitleWrapper>
        <H5>Revenue</H5>
        <DatePicker
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          maxDate={maxDate}
          onChange={onChange}
          {...props}
        />
      </TitleWrapper>
      <RevenueChart
        labels={labels}
        data={data}
        orders={orders}
        {...props}
      />
    </ChartWrapper>
  )
}

export default Revenue
