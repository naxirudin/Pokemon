import configureStore from 'redux-mock-store';
import { persistStore } from 'redux-persist';
import {
  setPokemonList,
  setSelectedPokemon,
} from '../src/features/pokemonSlice';
import { pokemonApi } from '../src/services/pokemonApi';
import { RootState } from '../src/store';

const mockStore = configureStore<RootState>([]);
const store = mockStore({
  pokemon: {
    pokemonList: [],
    selectedPokemon: null,
  },
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

describe('Redux store', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should dispatch setPokemonList action', () => {
    const pokemonList = [
      {
        id: 1,
        name: 'bulbasaur',
        height: 7,
        weight: 69,
        types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      },
    ];

    store.dispatch(setPokemonList(pokemonList));

    const actions = store.getActions();
    expect(actions[0].type).toBe('pokemon/setPokemonList');
    expect(actions[0].payload).toEqual(pokemonList);
  });

  it('should dispatch setSelectedPokemon action', () => {
    const selectedPokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
    };

    store.dispatch(setSelectedPokemon(selectedPokemon));

    const actions = store.getActions();
    expect(actions[0].type).toBe('pokemon/setSelectedPokemon');
    expect(actions[0].payload).toEqual(selectedPokemon);
  });

  it('should handle state persistence', () => {
    const persistor = persistStore(store);
    expect(persistor).toBeDefined();
  });
});
