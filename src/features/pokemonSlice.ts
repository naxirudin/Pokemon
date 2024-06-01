import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

interface PokemonState {
  pokemonList: Pokemon[];
  selectedPokemon: Pokemon | null;
}

const initialState: PokemonState = {
  pokemonList: [],
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonList(state, action: PayloadAction<Pokemon[]>) {
      state.pokemonList = action.payload;
    },
    setSelectedPokemon(state, action: PayloadAction<Pokemon>) {
      state.selectedPokemon = action.payload;
    },
  },
});

export const { setPokemonList, setSelectedPokemon } = pokemonSlice.actions;

export const selectPokemonList = (state: RootState) =>
  state.pokemon.pokemonList;
export const selectSelectedPokemon = (state: RootState) =>
  state.pokemon.selectedPokemon;

export default pokemonSlice.reducer;
