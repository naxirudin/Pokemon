import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  PokemonDetail: { pokemonId: number };
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type PokemonDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'PokemonDetail'
>;

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  height?: number;
  weight?: number;
  types?: { type: { name: string } }[];
}

export interface PokemonType {
  type: {
    name: string;
  };
}

export interface PokemonListItem {
  id: number;
  name: string;
  url: string;
}
