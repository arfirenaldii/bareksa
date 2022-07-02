import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Users from '../../components/Users';

describe('<Users />', () => {
  it('should render', () => {
    const props = {
      home: {
        loadingFetchOrders: false,
        orders: [
          {
            conversion_item: 'Bonds',
            conversion_revenue: '701',
            due_date: '2020-02-06 07:45:42',
            full_name: 'Patti Beahan',
            location: 'Darrenton, Montserrat',
            order_id: '256d9692-630c-4af3-ad06-e27c53034b8d',
            start_date: '2020-01-06 07:45:42',
            status: 'completed',
          },
          {
            conversion_item: 'Mutualfund',
            conversion_revenue: '6',
            due_date: '2020-02-06 13:25:02',
            full_name: 'Vicki Rutherford',
            location: 'Taylorsville, Central African Republic',
            order_id: '26e37a8f-6ee9-417e-8fca-e7d3b65254fa',
            start_date: '2020-01-06 13:25:02',
            status: 'canceled',
          },
          {
            conversion_item: 'Gold',
            conversion_revenue: '213',
            due_date: '2020-02-06 14:00:22',
            full_name: 'Rodolfo Runte',
            location: 'Port Sigridport, Gibraltar',
            order_id: '821aa160-5fb6-4e19-8322-2c1ed779c1b5',
            start_date: '2020-01-06 14:00:22',
            status: 'pending',
          },
        ],
      },
    };

    render(<Users {...props} />);

    expect(screen.getByText('Users')).toBeInTheDocument();
  });
});
