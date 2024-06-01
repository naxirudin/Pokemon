import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import configureStore from 'redux-mock-store';
import HomeScreen from '../src/screens/HomeScreen';
import { setPokemonList } from '../src/features/pokemonSlice';
import { pokemonApi } from '../src/services/pokemonApi';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Loader from '../src/components/Loader';

jest.mock('../src/services/pokemonApi', () => {
  const actualModule = jest.requireActual('../src/services/pokemonApi');
  return {
    ...actualModule,
    useGetPokemonListQuery: jest.fn(),
  };
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const mockStore = configureStore([]);
const pokemonList = [
  { id: 1, name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { id: 2, name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
];

describe('HomeScreen', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a list of Pokemon', async () => {
    const { useGetPokemonListQuery } = require('../src/services/pokemonApi');
    useGetPokemonListQuery.mockReturnValue({
      data: { results: pokemonList },
      error: null,
      isLoading: false,
    });

    const store = mockStore({
      pokemon: { pokemonList: [] },
      [pokemonApi.reducerPath]: {},
    });
    const persistor = persistStore(store);
    store.dispatch = jest.fn();

    const {} = render(
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <NavigationContainer>
            <HomeScreen />
          </NavigationContainer>
        </PersistGate>
      </Provider>,
    );
    store.dispatch(setPokemonList(pokemonList));
  });

  it('displays error message on API error', async () => {
    const { useGetPokemonListQuery } = require('../src/services/pokemonApi');
    useGetPokemonListQuery.mockReturnValue({
      data: null,
      error: { message: 'API Error' },
      isLoading: false,
    });

    const store = mockStore({
      pokemon: { pokemonList: [] },
      [pokemonApi.reducerPath]: {},
    });
    const persistor = persistStore(store);
    store.dispatch = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <NavigationContainer>
            <HomeScreen />
          </NavigationContainer>
        </PersistGate>
      </Provider>,
    );
  });

  it('displays loader while fetching data', () => {
    const { useGetPokemonListQuery } = require('../src/services/pokemonApi');
    useGetPokemonListQuery.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    const store = mockStore({
      pokemon: { pokemonList: [] },
      [pokemonApi.reducerPath]: {}, // Initialize the pokemonApi state
    });
    const persistor = persistStore(store);
    store.dispatch = jest.fn();

    const {} = render(
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <NavigationContainer>
            <HomeScreen />
          </NavigationContainer>
        </PersistGate>
      </Provider>,
    );
  });
});
