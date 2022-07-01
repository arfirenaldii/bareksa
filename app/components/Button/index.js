/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

const green = {
  color: '#333333',
  backgroundColor: '#82C341',
  backgroundColor: '#82C341',
  hover: ''
}

const white = {
  color: '#333333',
  backgroundColor: '#FFFFFF',
  border: '#E5E5E5',
  hover: ''
}

function getColor(color) {
  switch (color) {
    case 'green':
      return green

    default:
      return white
  }
}

function Button(props) {
  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick} color={getColor(props.color)} line={props.line}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute} color={getColor(props.color)} line={props.line}>
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return <Wrapper>{button}</Wrapper>;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
