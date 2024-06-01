import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { useRoute } from '@react-navigation/native';
import { useGetPokemonByIdQuery } from '../src/services/pokemonApi';
import PokemonDetailScreen from '../src/screens/PokemonDetailScreen';

jest.mock('../src/services/pokemonApi', () => ({
  useGetPokemonByIdQuery: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useRoute: jest.fn(),
}));

const mockPokemonData = {
  id: 1,
  name: 'bulbasaur',
  height: 7,
  weight: 69,
  types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
};

describe('PokemonDetailScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state correctly', () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: { pokemonId: 1 },
    });
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    const { getByTestId } = render(<PokemonDetailScreen />);

    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('renders error state correctly', async () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: { pokemonId: 1 },
    });
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: null,
      error: { message: 'API Error' },
      isLoading: false,
    });
  });

  it('renders Pokemon details correctly', async () => {
    (useRoute as jest.Mock).mockReturnValue({
      params: { pokemonId: 1 },
    });
    (useGetPokemonByIdQuery as jest.Mock).mockReturnValue({
      data: mockPokemonData,
      error: null,
      isLoading: false,
    });

    const { getByText } = render(<PokemonDetailScreen />);

    await waitFor(() => {
      expect(getByText('Bulbasaur')).toBeTruthy();
      expect(getByText('7 cm')).toBeTruthy();
      expect(getByText('69 kg')).toBeTruthy();
    });
  });
});
