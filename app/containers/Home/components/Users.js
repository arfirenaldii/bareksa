import React from 'react';
import styled from 'styled-components';

import H5 from 'components/H5'
import IconDot from 'components/IconDot'

import UsersChart from './UsersChart'
import ChartWrapper from './ChartWrapper'

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

function Users(props) {
  return (
    <ChartWrapper>
      <TitleWrapper>
        <H5>Users</H5>
        <IconDot />
      </TitleWrapper>
      <UsersChart {...props} />
    </ChartWrapper>
  )
}

export default Users
