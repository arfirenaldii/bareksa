/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RESET_STATE,
  FETCH_ORDERS,
  ORDERS_FETCHED,
  FETCH_ORDERS_FAILED,
} from './constants';

export const initialState = fromJS({
  loadingFetchOrders: false,
  userCategory: [],
  orders: [],
  errFetchOrders: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_STATE:
      return initialState;

    case FETCH_ORDERS:
      return state.set('loadingFetchOrders', true);

    case ORDERS_FETCHED:
      return state
        .set('loadingFetchOrders', false)
        .set('orders', action.orders.data.orders)
        .set('userCategory', action.orders.data.user_category);

    case FETCH_ORDERS_FAILED:
      return state
        .set('loadingFetchOrders', false)
        .set('errFetchOrders', action.err);

    default:
      return state;
  }
}

export default homeReducer;
