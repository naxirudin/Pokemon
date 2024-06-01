import pokemonReducer, {
  setPokemonList,
  setSelectedPokemon,
  PokemonState,
  Pokemon,
} from '../src/features/pokemonSlice';

describe('pokemon reducer', () => {
  const initialState: PokemonState = {
    pokemonList: [],
    selectedPokemon: null,
  };

  it('should handle initial state', () => {
    expect(pokemonReducer(undefined, { type: 'unknown' })).toEqual(
      initialState,
    );
  });

  it('should handle setPokemonList', () => {
    const pokemonList: Pokemon[] = [
      {
        id: 1,
        name: 'bulbasaur',
        height: 7,
        weight: 69,
        types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      },
    ];
    const actual = pokemonReducer(initialState, setPokemonList(pokemonList));
    expect(actual.pokemonList).toEqual(pokemonList);
  });

  it('should handle setSelectedPokemon', () => {
    const selectedPokemon: Pokemon = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
    };
    const actual = pokemonReducer(
      initialState,
      setSelectedPokemon(selectedPokemon),
    );
    expect(actual.selectedPokemon).toEqual(selectedPokemon);
  });
});
