import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import Img from 'components/Img';

import HeaderName from './HeaderName';
import HeaderSearch from './HeaderSearch';
import Notification from './Notification';
import Settings from './Settings';
import Bar from './Bar';

import Logo from './images/Logo.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <Wrapper>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Img src={Logo} alt="Logo" />
            <MediaQuery
              query="(min-width: 992px)"
              values={window.testMediaQueryValues}
            >
              <HeaderName />
            </MediaQuery>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MediaQuery
              query="(min-width: 992px)"
              values={window.testMediaQueryValues}
            >
              <HeaderSearch />
            </MediaQuery>
            <Notification />
            <Settings />
          </div>
        </Wrapper>
        <Bar />
      </div>
    );
  }
}

export default Header;
