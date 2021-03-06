/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="Bareksa" defaultTitle="Bareksa">
        <meta name="description" content="Bareksa" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
