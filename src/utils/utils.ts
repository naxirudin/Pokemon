export const getIdFromUrl = (url?: string): string => {
  if (!url) {
    console.error('getIdFromUrl: url is undefined');
    return '';
  }
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const getPokemonImageUrl = (id: number): string => {
  if (!id) {
    console.error('getPokemonImageUrl: id is undefined');
    return '';
  }
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const capitalizeFirstLetter = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);
