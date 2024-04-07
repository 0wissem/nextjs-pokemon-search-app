import React, { FC } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import Card from '../Card';
import PokemonList, { GenericItem } from '@/lib/types';
import { styled } from '@/stitches.config';
import { IMG_ALT_KEY, IMG_URL_KEY, LINK_PATH_KEY } from '@/utils/mapPokemonPaginatedResults';

interface Props {
  list: InfiniteData<PokemonList>;
  titleKey: keyof GenericItem;
  imgSrcKey: keyof GenericItem;
  imgAltKey: keyof GenericItem;
  linkPathKey: keyof GenericItem;
}

export const GridContainer = styled('div', {
  display: 'flex',
  flex:1,
  flexDirection:"row",
  gap: '$6',
  padding: '0 $4',
});

const ItemHorizontalList: FC<Props> = ({
  list,
  imgSrcKey,
  titleKey,
  imgAltKey,
  linkPathKey,
}) => {
  return (
    <GridContainer>
       { (list as unknown as GenericItem[]).map((item)=><Card
            key={item?.name}
            size={'large'}
            title={item[titleKey]}
            imgSrc={item[imgSrcKey]}
            imgAlt={item[imgAltKey]}
            linkPath={item[linkPathKey]}
          />)}
    </GridContainer>
  );
};

export default ItemHorizontalList;
