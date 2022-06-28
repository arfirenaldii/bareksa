/*
 *
 * Home actions
 *
 */

import {
  RESET_STATE,
  FETCH_ORDERS,
  ORDERS_FETCHED,
  FETCH_ORDERS_FAILED,
} from './constants';

export function resetState() {
  return {
    type: RESET_STATE,
  };
}

export function fetchOrders() {
  return {
    type: FETCH_ORDERS,
  };
}

export function ordersFetched(orders) {
  return {
    type: ORDERS_FETCHED,
    orders,
  };
}

export function fetchOrdersFailed(err) {
  return {
    type: FETCH_ORDERS_FAILED,
    err,
  };
}
