import React from 'react';
import styled from 'styled-components';

import Img from 'components/Img';

import Shape from './images/shape.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-left: 48px;
`

const Icon = styled.div`
  font-weight: 700;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(145, 145, 145, 0.1);
  margin-right: 16px
`

const Name = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`

const Location = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9C9C9C;
`

const StyledImg = styled(Img)`
  padding: 10px;
  cursor: pointer;
`

function HeaderName() {
  return (
    <Wrapper>
      <Icon>RH</Icon>
      <div style={{ width: '146px' }}>
        <Name>Reinhart H.</Name>
        <Location>Kemang, Jakarta</Location>
      </div>
      <StyledImg src={Shape} alt="Shape" />
    </Wrapper>
  );
}

export default HeaderName;
