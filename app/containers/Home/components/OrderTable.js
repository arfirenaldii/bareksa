import React from 'react';
import { format } from 'date-fns';
import styled from 'styled-components';

import H5 from 'components/H5'
import TableHead from 'components/Table/TableHead'
import TableRowHead from 'components/Table/TableRowHead'
import TableRowBody from 'components/Table/TableRowBody'
import TableData from 'components/Table/TableData'
import Label from 'components/Label'

const Wrapper = styled.div`
  margin: 0px 16px;
`

const TableWrapper = styled.div`
  height: 336px;
  width: 100%;
  overflow-x: auto;
`

function getOrderId(orderId) {
  return `#${orderId.substring(0, 5)}`
}

function getStatus(status) {
  return `${status.charAt(0).toUpperCase()}${status.substring(1, status.length)}`
}

function getStatusColor(status) {
  switch (status) {
    case 'pending':
      return 'orange'
    case 'completed':
      return 'green'
    case 'canceled':
      return 'red'
    default:
      return 'white';
  }
}

function OrderTable(props) {
  if (props.home.loadingFetchOrders) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <Wrapper>
      <H5 style={{ margin: '24px 0px' }}>Orders</H5>
      <TableWrapper>
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
                <TableData>{getOrderId(order.order_id)}</TableData>
                <TableData>
                  <Label label={getStatus(order.status)} color={getStatusColor(order.status)} />
                </TableData>
                <TableData>{order.full_name}</TableData>
                <TableData>{order.location}</TableData>
                <TableData>{format(new Date(order.start_date), 'dd/MM/yy HH:mm')}</TableData>
                <TableData>{format(new Date(order.due_date), 'dd/MM/yy HH:mm')}</TableData>
              </TableRowBody>
            )}
          </tbody>
        </table>
      </TableWrapper>
    </Wrapper>
  )
}

export default OrderTable
