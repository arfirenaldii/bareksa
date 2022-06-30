/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Header from 'components/Header'
import Calendar from 'components/Calendar'
import Column from 'components/Column'

import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';

import { resetState, fetchOrders } from './actions';

import Conversion from './components/Conversion';
import Users from './components/Users';
import Revenue from './components/Revenue';
import OrderTable from './components/OrderTable';

/* eslint-disable react/prefer-stateless-function */
export class Home extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ margin: '24px 0px' }}>
          <Column width={25}>
            <Conversion {...this.props} />
          </Column>
          <Column width={25}>
            <Users {...this.props} />
          </Column>
          <Column width={50}>
            <Revenue {...this.props} />
          </Column>
        </div>
        <Column width={25}>
          <Calendar />
        </Column>
        <Column width={75}>
          <OrderTable {...this.props} />
        </Column>
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
