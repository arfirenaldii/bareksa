import React from 'react';
import styled from 'styled-components';

import H5 from 'components/H5'
import IconDot from 'components/IconDot'

import ConversionChart from './ConversionChart'
import ChartWrapper from './ChartWrapper'

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

function Conversion(props) {
  return (
    <ChartWrapper>
      <TitleWrapper>
        <H5>Conversion</H5>
        <IconDot />
      </TitleWrapper>
      <ConversionChart {...props} />
    </ChartWrapper>
  )
}

export default Conversion
