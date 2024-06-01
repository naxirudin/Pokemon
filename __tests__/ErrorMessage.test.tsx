import React from 'react';
import { render } from '@testing-library/react-native';
import ErrorMessage from '../src/components/ErrorMessage';

describe('ErrorMessage Component', () => {
  it('renders error message correctly', () => {
    const { getByText } = render(<ErrorMessage message="An error occurred" />);
    expect(getByText('An error occurred')).toBeTruthy();
  });
});
