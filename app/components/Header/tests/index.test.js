import '@testing-library/jest-dom/extend-expect';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { push } from 'react-router-redux';

import Header from '../index';

describe('<Header />', () => {
  it('should render header', () => {
    window.testMediaQueryValues = { width: 993 }

    render(
      <Header />
    )

    expect(screen.getByRole('img', { name: 'Logo' })).toBeInTheDocument()
    expect(screen.getByText('RH')).toBeInTheDocument()
    expect(screen.getByText('Reinhart H.')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Bell' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Indicator' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Settings' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Shape' })).toBeInTheDocument()
  });

  it('should search', () => {
    window.alert = jest.fn()

    window.testMediaQueryValues = { width: 993 }

    render(
      <Header />
    )

    const input = screen.getByPlaceholderText('Search text')
    fireEvent.change(input, {
      target: { value: 'revenue' },
    });
    expect(screen.getByPlaceholderText('Search text')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Search' })).toBeInTheDocument()
    expect(input.value).toBe('revenue')

    fireEvent.click(screen.getByRole('img', { name: 'Search' }));
    expect(window.alert).toHaveBeenCalledWith('revenue')
  });
});
