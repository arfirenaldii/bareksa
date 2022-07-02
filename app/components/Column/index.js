import styled from 'styled-components';

export const Column = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 992px) {
    vertical-align: top;
    max-width: ${props => `${props.width}%`};
  }
`;

export default Column;
