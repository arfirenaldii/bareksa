import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format, getTime } from 'date-fns';
import MediaQuery from 'react-responsive';

import H5 from 'components/H5';
import DatePicker from 'components/DatePicker';

import RevenueChart from './RevenueChart';
import ChartWrapper from './ChartWrapper';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 32px;

  @media (max-width: 992px) {
    margin: 0px;
  }
`;

function getRevenue(orders) {
  const keyRevenue = [];
  const valueRevenue = [];

  for (let i = 0; i < orders.length; i++) {
    const keyDate = format(new Date(orders[i].start_date), 'yyyy-MM-dd');
    if (keyRevenue.includes(keyDate)) {
      const index = keyRevenue.indexOf(keyDate);
      valueRevenue[index] += parseInt(orders[i].conversion_revenue);
    } else {
      keyRevenue.push(keyDate);
      valueRevenue.push(parseInt(orders[i].conversion_revenue));
    }
  }

  return {
    key: keyRevenue,
    value: valueRevenue,
  };
}

function getFilteredRevenue(revenue, date) {
  if (revenue.length === 0) {
    return;
  }

  const filteredKey = [];
  const filteredRevenue = [];
  revenue.key.forEach((key, index) => {
    if (
      getTime(new Date(key)) >= getTime(new Date(date.startDate)) &&
      getTime(new Date(key)) <= getTime(new Date(date.endDate))
    ) {
      filteredKey.push(key);
      filteredRevenue.push(revenue.value[index]);
    }
  });

  return {
    key: filteredKey,
    value: filteredRevenue,
  };
}

function Revenue(props) {
  const [revenue, setRevenue] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    setRevenue(getRevenue(props.home.orders));
  }, []);

  useEffect(
    () => {
      if (revenue.length !== 0) {
        const index = revenue.key.length - 1;
        setStartDate(new Date(revenue.key[0]));
        setEndDate(new Date(revenue.key[index]));
        setMinDate(new Date(revenue.key[0]));
        setMaxDate(new Date(revenue.key[index]));
      }
    },
    [revenue],
  );

  useEffect(
    () => {
      if (endDate !== null && revenue.length !== 0) {
        const filteredRevenue = getFilteredRevenue(revenue, {
          startDate,
          endDate,
        });
        setLabels(filteredRevenue.key);
        setData(filteredRevenue.value);
      }
    },
    [endDate],
  );

  return (
    <ChartWrapper>
      <TitleWrapper>
        <H5>Revenue</H5>
        <MediaQuery
          query="(min-width: 992px)"
          values={window.testMediaQueryValues}
        >
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            minDate={minDate}
            maxDate={maxDate}
            onChange={onChange}
            {...props}
          />
        </MediaQuery>
      </TitleWrapper>
      <MediaQuery
        query="(max-width: 992px)"
        values={window.testMediaQueryValues}
      >
        <div style={{ marginBottom: '16px' }}>
          <DatePicker
            startDate={startDate}
            endDate={endDate}
            minDate={minDate}
            maxDate={maxDate}
            onChange={onChange}
            {...props}
          />
        </div>
      </MediaQuery>
      <RevenueChart labels={labels} data={data} {...props} />
    </ChartWrapper>
  );
}

export default Revenue;
