import findPokemonSuggestions from '@/utils/findPokemonSuggestions';
import mapListResults from '@/utils/mapPokemonPaginatedResults';
import mapPokemonByCategoryPaginatedResults from '@/utils/mapPokemonByCategoryPaginatedResults';
import mapListCategoriesResults from '@/utils/mapCategoriesPaginatedResults';
import mapEvolutionPokemonChain from '@/utils/mapEvolutionPokemonChain';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import api from '../pages/api/pokemon';
import PokemonList, { PokemonData, PokemonEvolutionData, Result } from '../lib/types';
import axios from 'axios';
import { extractEvolutions } from '@/utils/extractionEvolutions';

const FETCH_LIMIT = 9;

const fetchPokemon = async (offset: number) => {
  const { data } = await api.get<PokemonList>(
    `/pokemon?limit=${FETCH_LIMIT}&offset=${offset}`
  );
  data.results = mapListResults(data.results as Result[]);
  return data;
};

const fetchPokemonByCategory = async (offset: number,category:string) => {
  const { data } = await api.get<PokemonList>(
    `/type/${category}?limit=${FETCH_LIMIT}&offset=${offset}`
  );
  data.results = mapPokemonByCategoryPaginatedResults(data?.pokemon);
  return data;
};

const fetchCategories = async (offset: number) => {
  const { data } = await api.get<PokemonList>(
    `/type?limit=${FETCH_LIMIT}&offset=${offset}`
  );
  data.results = mapListCategoriesResults(data.results as Result[]);
  return data;
};
export const useFetchCategoriesWithInfinityScroll = () => {
  return useInfiniteQuery(
    ['categoriesList'],
    ({ pageParam = 0 }) => fetchCategories(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const url = new URL(lastPage.next!);
          return url.searchParams.get('offset');
        }
        return undefined;
      },
    }
  );
};


export const searchPokemon = async (query: string) => {
  const { data } = await api.get<PokemonData>(`/pokemon/${query}/`);
  return data;
};

export const searchPokemonSpecies = async (query: string) => {
  const { data } = await api.get<PokemonEvolutionData>(`/pokemon-species/${query}/`);
  return data;
};
export const getPokemonChain = async (query: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${query}/`;
  const response = await api.get(url);
  const evolutionChainUrl = response.data.evolution_chain.url;
  const evolutionResponse = await api.get(evolutionChainUrl);
  const chain = extractEvolutions(evolutionResponse.data?.chain||null);
  return mapEvolutionPokemonChain(chain)
}

export const useFetchPokemonByCategoryWithInfinityScroll = (category:string) => {
  return useInfiniteQuery(
    [`pokemonList/${category}`],
    ({ pageParam = 0 }) => fetchPokemonByCategory(pageParam,category),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next) {
          const url = new URL(lastPage.next!);
          return url.searchParams.get('offset');
        }
        return undefined;
      },
    }
  );
};

export const useSearchPokemon = (query: string) => {
  return useQuery(['searchPokemon', query], () => searchPokemon(query), {
    enabled: query.length > 0,
    staleTime: Infinity,
    retry: false,
  });
};


export const useGetPokemonChain = (query: string) => {
  return useQuery(['pokemonChain', query], () => getPokemonChain(query), {
    enabled: query.length > 0,
    staleTime: Infinity,
    retry: false,
  });
};

const useFindPokemonSuggestions = (slug: string) => {
  return useQuery(
    ['findPokemonSuggestions', slug],
    () => findPokemonSuggestions(slug),
    {
      enabled: slug.length > 0,
    }
  );
};


export default useFindPokemonSuggestions;
