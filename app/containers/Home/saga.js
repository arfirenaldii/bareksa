import { takeLatest, call, put, select } from 'redux-saga/effects';

import request from 'utils/request';
import { API_URL } from 'utils/constants';

import { ordersFetched, fetchOrdersFailed } from './actions';

import { FETCH_ORDERS } from './constants';

export function* fetchOrders() {
  const URL = API_URL;
  const header = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    const orders = yield call(request, URL, header);
    yield put(ordersFetched(orders));
  } catch (err) {
    yield put(fetchOrdersFailed(err));
  }
}

export default function* Home() {
  yield takeLatest(FETCH_ORDERS, fetchOrders);
}
