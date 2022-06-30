import React from 'react';
import styled from 'styled-components';

import H5 from 'components/H5'

import RevenueChart from './RevenueChart'
import ChartWrapper from './ChartWrapper'

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

function Revenue(props) {
  return (
    <ChartWrapper>
      <TitleWrapper>
        <H5>Revenue</H5>
      </TitleWrapper>
      <RevenueChart {...props} />
    </ChartWrapper>
  )
}

export default Revenue
