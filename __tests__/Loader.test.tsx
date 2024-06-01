import React from 'react';
import { render } from '@testing-library/react-native';
import Loader from '../src/components/Loader';

describe('Loader Component', () => {
  it('renders ActivityIndicator correctly', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId('activity-indicator');
    expect(loader).toBeTruthy();
  });
});
