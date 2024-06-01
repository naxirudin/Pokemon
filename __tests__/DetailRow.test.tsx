import React from 'react';
import { render } from '@testing-library/react-native';
import DetailRow from '../src/components/DetailRow';

describe('DetailRow Component', () => {
  it('renders title and value correctly', () => {
    const { getByText } = render(<DetailRow title="Height" value="70 cm" />);
    expect(getByText('Height')).toBeTruthy();
    expect(getByText('70 cm')).toBeTruthy();
  });

  it('renders title correctly without value', () => {
    const { getByText } = render(<DetailRow title="Height" />);
    expect(getByText('Height')).toBeTruthy();
  });
});
