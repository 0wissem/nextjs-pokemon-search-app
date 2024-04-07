import { GenericItem, PokemonByCategoryResult } from '@/lib/types';
import pokemonImgUrl from './generatePokemonImageUrl';

export const IMG_URL_KEY = 'imgUrl';
export const IMG_ALT_KEY = 'imgAlt';
export const LINK_PATH_KEY = 'linkPath';

const mapListResults = (fetchedResults: PokemonByCategoryResult[]): GenericItem[] => {
  return fetchedResults.map((item) => ({
    ...item,
    name: `${item.pokemon.name.slice(0, 1).toUpperCase() + item.pokemon.name.slice(1)}`,
    [IMG_URL_KEY]: pokemonImgUrl(item.pokemon.name as string),
    [LINK_PATH_KEY]: `/pokemon/${encodeURIComponent(item.pokemon.name)}`,
  }));
};

export default mapListResults;
