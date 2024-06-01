import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGetPokemonByIdQuery } from '../services/pokemonApi';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import DetailRow from '../components/DetailRow';
import { PokemonDetailScreenRouteProp, Pokemon } from '../types';
import { getPokemonImageUrl, capitalizeFirstLetter } from '../utils/utils';
import { Colors } from '../constants/colors';
import { PokemonType } from '../types/index';

const PokemonDetailScreen: React.FC = () => {
  const route = useRoute<PokemonDetailScreenRouteProp>();
  const { pokemonId } = route.params;
  const numericPokemonId = Number(pokemonId);
  const { data, error, isLoading } =
    useGetPokemonByIdQuery<Pokemon>(numericPokemonId);

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load Pokemon details" />;

  const imageUrl = data ? getPokemonImageUrl(numericPokemonId) : '';

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image style={styles.pokemonImage} source={{ uri: imageUrl }} />
      ) : (
        <Text>Image not available</Text>
      )}
      <View style={styles.divider} />
      <DetailRow title="Name" value={capitalizeFirstLetter(data?.name)} />
      <DetailRow title="Height" value={`${data?.height} cm`} />
      <DetailRow title="Weight" value={`${data?.weight} kg`} />
      <DetailRow
        title="Types"
        value={data?.types
          .map((type: PokemonType) => type.type.name)
          .join(', ')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.white,
  },
  pokemonImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGray,
    marginVertical: 8,
  },
});

export default PokemonDetailScreen;
