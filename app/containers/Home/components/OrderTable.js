import React from 'react';

import H5 from 'components/H5'

import TableHead from './TableHead'
import TableRowHead from './TableRowHead'
import TableRowBody from './TableRowBody'

function OrderTable(props) {
  if (props.home.loadingFetchOrders) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <div>
      <H5>Orders</H5>
      <table style={{ width: '100%' }}>
        <thead>
          <TableRowHead>
            <TableHead>Order Number</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Operator</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Due Date</TableHead>
          </TableRowHead>
        </thead>
        <tbody>
          {props.home.orders.map((order) =>
            <TableRowBody key={order.order_id}>
              <td>#2458</td>
              <td>{order.status}</td>
              <td>{order.full_name}</td>
              <td>{order.location}</td>
              <td>{order.start_date}</td>
              <td>{order.due_date}</td>
            </TableRowBody>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default OrderTable
