import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Img from 'components/Img';

import Icon from './images/icon.svg';

const Wrapper = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border: solid 1px #e5e5e5;
  border-radius: 4px;
  cursor: pointer;
`;

function IconDot(props) {
  return (
    <Wrapper onClick={props.onClick}>
      <Img src={Icon} alt="3 Dots" />
    </Wrapper>
  );
}

IconDot.propTypes = {
  onClick: PropTypes.func,
};

export default IconDot;
