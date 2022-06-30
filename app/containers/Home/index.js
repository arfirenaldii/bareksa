/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Header from 'components/Header'
import Calendar from 'components/Calendar'

import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { resetState, fetchOrders } from './actions';

import ConversionChart from './components/ConversionChart';
import UsersChart from './components/UsersChart';
import RevenueChart from './components/RevenueChart';
import OrderTable from './components/OrderTable';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Header />
        <FormattedMessage {...messages.header} />
        <ConversionChart {...this.props} />
        <UsersChart {...this.props} />
        <RevenueChart {...this.props} />
        <div style={{ fontSize: '24px', fontWeight: '700' }}>
          {"Orders"}
        </div>
        <Calendar />
        <OrderTable {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    resetState: () => dispatch(resetState()),
    fetchOrders: () => dispatch(fetchOrders()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
