import React from 'react';
import styled from 'styled-components';

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

function Revenue(props) {
  return (
    <ChartWrapper>
      <TitleWrapper>
        <H5>Revenue</H5>
        <DatePicker />
      </TitleWrapper>
      <RevenueChart {...props} />
    </ChartWrapper>
  )
}

export default Revenue
