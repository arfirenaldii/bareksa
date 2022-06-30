import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4px 8px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
  background-color: ${props => props.color};
  border-radius: 4px;
  text-align: center;
`

function getColor(color) {
  switch (color) {
    case 'orange':
      return '#E69849';
    case 'green':
      return '#789764';
    case 'red':
      return '#D66D4B';
    default:
      return '#FFFFFF';
  }
}

function Label(props) {
  return (
    <Wrapper color={getColor(props.color)}>{props.label}</Wrapper>
  )
}

export default Label;
