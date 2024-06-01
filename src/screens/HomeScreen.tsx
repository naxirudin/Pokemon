import React, { useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../store';
import { useGetPokemonListQuery } from '../services/pokemonApi';
import { setPokemonList, selectPokemonList } from '../features/pokemonSlice';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import Card from '../components/Card';
import { HomeScreenNavigationProp, PokemonListItem } from '../types';
import {
  getIdFromUrl,
  getPokemonImageUrl,
  capitalizeFirstLetter,
} from '../utils/utils';
import { Colors } from '../constants/colors';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const pokemonList = useAppSelector(selectPokemonList);
  const { data, error, isLoading } = useGetPokemonListQuery();

  useEffect(() => {
    if (data && data.results) {
      const pokemonListWithIds: PokemonListItem[] = data.results.map(
        (pokemon: { name: string; url: string }) => ({
          ...pokemon,
          id: parseInt(getIdFromUrl(pokemon.url), 10),
          url: pokemon.url,
        }),
      );
      dispatch(setPokemonList(pokemonListWithIds));
    }
  }, [data, dispatch]);

  const renderPokemonItem = useCallback(
    ({ item }: { item: PokemonListItem }) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PokemonDetail', {
            pokemonId: item.id,
            pokemonName: capitalizeFirstLetter(item.name),
          })
        }
      >
        <Card>
          <View style={styles.listItem}>
            <Image
              style={styles.pokemonImage}
              source={{ uri: getPokemonImageUrl(item.id) }}
            />
            <Text style={styles.pokemonName}>
              {capitalizeFirstLetter(item.name)}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    ),
    [navigation],
  );

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message="Failed to load Pokemon list" />;

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPokemonItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pokemonName: {
    fontSize: 18,
    color: Colors.gray,
    marginLeft: 20,
  },
  pokemonImage: {
    width: 50,
    height: 50,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGray,
    marginVertical: 8,
  },
});

export default HomeScreen;
