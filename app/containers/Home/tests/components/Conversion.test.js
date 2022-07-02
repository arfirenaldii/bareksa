import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Conversion from '../../components/Conversion';

describe('<Conversion />', () => {
  it('should render', () => {
    let props = {
      home: {
        loadingFetchOrders: false,
        userCategory: {
          "risk_averse": "987",
          "conservative": "750",
          "moderate": "311",
          "risk_taker": "473"
        }
      },
    }

    render(
      <Conversion {...props} />
    )

    expect(screen.getByText('Conversion')).toBeInTheDocument()
  });
});
