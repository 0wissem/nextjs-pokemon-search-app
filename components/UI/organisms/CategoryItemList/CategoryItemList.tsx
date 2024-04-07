import React, { FC } from 'react';
import { InfiniteData } from '@tanstack/react-query';
import CategoryList, { GenericItem } from '@/lib/types';
import { styled } from '@/stitches.config';
import CategoryCard from '../CategoryCard';

interface Props {
  list: InfiniteData<CategoryList>;
  titleKey: keyof GenericItem;
  linkPathKey: keyof GenericItem;
}

const GridContainer = styled('div', {
  width: '$w100',
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax($cardWidthBp1, $cardWidthBp3))`,
  gap: '$6',
  justifyItems: 'center',
  justifyContent: 'center',
  padding: '0 $4',
});

const CategoryItemList: FC<Props> = ({
  list,
  titleKey,
  linkPathKey,

}) => {
  return (
    <GridContainer>
      {list.pages.map((page) =>
        (page.results as GenericItem[]).map((item) => (
          <CategoryCard
            key={item[titleKey]}
            size={'large'}
            title={item[titleKey]}
            linkPath={item[linkPathKey]}
          />
        ))
      )}
    </GridContainer>
  );
};

export default CategoryItemList;
