import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Label from '../index';

describe('<Label />', () => {
  it('should render label orange', () => {
    render(
      <Label
        color="orange"
        label="Canceled"
      />
    )

    expect(screen.getByText('Canceled')).toBeInTheDocument()
    expect(screen.getByText('Canceled')).toHaveStyle(`background-color: #E69849`)
  });

  it('should render label green', () => {
    render(
      <Label
        color="green"
        label="Completed"
      />
    )

    expect(screen.getByText('Completed')).toBeInTheDocument()
    expect(screen.getByText('Completed')).toHaveStyle(`background-color: #789764`)
  });

  it('should render label red', () => {
    render(
      <Label
        color="red"
        label="Canceled"
      />
    )

    expect(screen.getByText('Canceled')).toBeInTheDocument()
    expect(screen.getByText('Canceled')).toHaveStyle(`background-color: #D66D4B`)
  });

  it('should render label white', () => {
    render(
      <Label
        color="white"
        label="Default"
      />
    )

    expect(screen.getByText('Default')).toBeInTheDocument()
    expect(screen.getByText('Default')).toHaveStyle(`background-color: #FFFFFF`)
  });
});
