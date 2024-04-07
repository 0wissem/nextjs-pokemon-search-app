import { GenericItem, PokemonByCategoryResult } from '@/lib/types';
import pokemonImgUrl from './generatePokemonImageUrl';

export const IMG_URL_KEY = 'imgUrl';
export const IMG_ALT_KEY = 'imgAlt';
export const LINK_PATH_KEY = 'linkPath';

const mapListResults = (fetchedResults: PokemonByCategoryResult[]): GenericItem[] => {

  return fetchedResults.map((item) => ({
    ...item,
    [IMG_URL_KEY]: pokemonImgUrl(item.name as string),
    [LINK_PATH_KEY]: `/pokemon/${encodeURIComponent(item.name)}`,
    [IMG_ALT_KEY]: `${item.name} artwork`,
  }));
};

export default mapListResults;