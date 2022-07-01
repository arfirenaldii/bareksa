import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 8px 16px;
  width: 100%;
  // min-width: 96px;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  border: ${props => props.line ? "1px solid" : "0"};
  border-color: ${props => props.color.border};
  background-color: ${props => props.color.backgroundColor};

  &:hover {
    background-color:${props => props.color.hover};
  }
`;

export default buttonStyles;
