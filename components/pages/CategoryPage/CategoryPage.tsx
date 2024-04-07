import DefaultTemplate from '@/components/templates/PokemonsTemplate';
import CategoriesTemplate from '@/components/templates/CategoriesTemplate';
import ItemList from '@/components/UI/organisms/ItemList';
import CategoryList from '@/lib/types';
import {
  IMG_ALT_KEY,
  IMG_URL_KEY,
  LINK_PATH_KEY,
} from '@/utils/mapCategoriesPaginatedResults';
import { InfiniteData } from '@tanstack/react-query';
import { FC } from 'react';
import CategoryItemList from '@/components/UI/organisms/CategoryItemList/CategoryItemList';

interface Props {
  CategoryList: InfiniteData<CategoryList>;
}

const CategoryPage: FC<Props> = ({ CategoryList}): JSX.Element => {
  return (
    <CategoriesTemplate title="Pokemon Categories">
      <CategoryItemList
        list={CategoryList}
        titleKey="name"
        linkPathKey={LINK_PATH_KEY}
      />
    </CategoriesTemplate>
  );
};

export default CategoryPage;
