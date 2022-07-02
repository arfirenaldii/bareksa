import React from 'react';
import styled from 'styled-components';

import Img from 'components/Img';

import Bell from './images/bell.svg';
import Indicator from './images/indicator.svg';

const Wrapper = styled.div`
  margin-right: 16px;
  padding: 10px;
  position: relative;
  cursor: pointer;
`;

const StyledIndicator = styled(Img)`
  position: absolute;
  top: 2px;
`;

function Notification() {
  return (
    <Wrapper>
      <Img src={Bell} alt="Bell" />
      <StyledIndicator src={Indicator} alt="Indicator" />
    </Wrapper>
  );
}

export default Notification;
