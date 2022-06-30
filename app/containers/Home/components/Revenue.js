import React from 'react';

import H5 from 'components/H5'

import RevenueChart from './RevenueChart'
import ChartWrapper from './ChartWrapper'

function Revenue(props) {
  return (
    <ChartWrapper>
      <H5>Revenue</H5>
      <RevenueChart {...props} />
    </ChartWrapper>
  )
}

export default Revenue
