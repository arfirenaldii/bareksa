import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #F5F5F5;
  height: 56px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px;
`

const Date = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
`

function Bar() {
  return (
    <Wrapper>
      <Date>8 April 2021</Date>
    </Wrapper>
  );
}

export default Bar;
