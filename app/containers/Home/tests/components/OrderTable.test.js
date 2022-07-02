import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import OrderTable from '../../components/OrderTable';

describe('<OrderTable />', () => {
  it('should render loading', () => {
    let props = {
      home: {
        loadingFetchOrders: true
      },
      orders: []
    }

    render(
      <OrderTable {...props} />
    )

    expect(screen.getByText('loading...')).toBeInTheDocument()
  });

  it('should render table header', () => {
    let props = {
      home: {
        loadingFetchOrders: false
      },
      orders: [
        {
          conversion_item: "Bonds",
          conversion_revenue: "701",
          due_date: "2020-02-06 07:45:42",
          full_name: "Patti Beahan",
          location: "Darrenton, Montserrat",
          order_id: "256d9692-630c-4af3-ad06-e27c53034b8d",
          start_date: "2020-01-06 07:45:42",
          status: "completed",
        },
        {
          conversion_item: "Mutualfund",
          conversion_revenue: "6",
          due_date: "2020-02-06 13:25:02",
          full_name: "Vicki Rutherford",
          location: "Taylorsville, Central African Republic",
          order_id: "26e37a8f-6ee9-417e-8fca-e7d3b65254fa",
          start_date: "2020-01-06 13:25:02",
          status: "canceled",
        },
        {
          conversion_item: "Gold",
          conversion_revenue: "213",
          due_date: "2020-02-06 14:00:22",
          full_name: "Rodolfo Runte",
          location: "Port Sigridport, Gibraltar",
          order_id: "821aa160-5fb6-4e19-8322-2c1ed779c1b5",
          start_date: "2020-01-06 14:00:22",
          status: "pending",
        }
      ]
    }

    render(
      <OrderTable {...props} />
    )

    expect(screen.getByText('Orders')).toBeInTheDocument()
    expect(screen.getByText('Order Number')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Operator')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Start Date')).toBeInTheDocument()
    expect(screen.getByText('Due Date')).toBeInTheDocument()
  });

  it('should render table data', () => {
    let props = {
      home: {
        loadingFetchOrders: false
      },
      orders: [
        {
          conversion_item: "Bonds",
          conversion_revenue: "701",
          due_date: "2020-02-06 07:45:42",
          full_name: "Patti Beahan",
          location: "Darrenton, Montserrat",
          order_id: "256d9692-630c-4af3-ad06-e27c53034b8d",
          start_date: "2020-01-06 07:45:42",
          status: "completed",
        },
        {
          conversion_item: "Mutualfund",
          conversion_revenue: "6",
          due_date: "2020-02-06 13:25:02",
          full_name: "Vicki Rutherford",
          location: "Taylorsville, Central African Republic",
          order_id: "26e37a8f-6ee9-417e-8fca-e7d3b65254fa",
          start_date: "2020-01-06 13:25:02",
          status: "canceled",
        },
        {
          conversion_item: "Gold",
          conversion_revenue: "213",
          due_date: "2020-02-06 14:00:22",
          full_name: "Rodolfo Runte",
          location: "Port Sigridport, Gibraltar",
          order_id: "821aa160-5fb6-4e19-8322-2c1ed779c1b5",
          start_date: "2020-01-06 14:00:22",
          status: "pending",
        }
      ]
    }

    render(
      <OrderTable {...props} />
    )

    expect(screen.getByText('#256d9')).toBeInTheDocument()
    expect(screen.getByText('Completed')).toBeInTheDocument()
    expect(screen.getByText('Patti Beahan')).toBeInTheDocument()
    expect(screen.getByText('Darrenton, Montserrat')).toBeInTheDocument()
    expect(screen.getByText('06/01/20 07:45')).toBeInTheDocument()
    expect(screen.getByText('06/02/20 07:45')).toBeInTheDocument()

    expect(screen.getByText('#26e37')).toBeInTheDocument()
    expect(screen.getByText('Canceled')).toBeInTheDocument()
    expect(screen.getByText('Vicki Rutherford')).toBeInTheDocument()
    expect(screen.getByText('Taylorsville, Central African Republic')).toBeInTheDocument()
    expect(screen.getByText('06/01/20 13:25')).toBeInTheDocument()
    expect(screen.getByText('06/02/20 13:25')).toBeInTheDocument()

    expect(screen.getByText('#821aa')).toBeInTheDocument()
    expect(screen.getByText('Pending')).toBeInTheDocument()
    expect(screen.getByText('Rodolfo Runte')).toBeInTheDocument()
    expect(screen.getByText('Port Sigridport, Gibraltar')).toBeInTheDocument()
    expect(screen.getByText('06/01/20 14:00')).toBeInTheDocument()
    expect(screen.getByText('06/02/20 14:00')).toBeInTheDocument()
  });
});
