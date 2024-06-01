import {
  getIdFromUrl,
  getPokemonImageUrl,
  capitalizeFirstLetter,
} from '../src/utils/utils';

describe('Utility Functions', () => {
  it('getIdFromUrl should return correct ID', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1/';
    const id = getIdFromUrl(url);
    expect(id).toBe('1');
  });

  it('getPokemonImageUrl should return correct URL', () => {
    const id = 1;
    const url = getPokemonImageUrl(id);
    expect(url).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    );
  });

  it('capitalizeFirstLetter should capitalize the first letter', () => {
    const str = 'bulbasaur';
    const capitalized = capitalizeFirstLetter(str);
    expect(capitalized).toBe('Bulbasaur');
  });
});
