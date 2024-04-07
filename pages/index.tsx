import React, { FC } from 'react';
import { useFetchCategoriesWithInfinityScroll } from '../hooks/usePokemon';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';
import useFetchNextPage from '../hooks/useFetchNextPage';
import Container from '@/components/UI/atoms/Container';
import CategoryPage from '@/components/pages/CategoryPage';

const IndexPage: FC = (): JSX.Element => {
  const { data, isSuccess, hasNextPage, fetchNextPage, isInitialLoading } =
    useFetchCategoriesWithInfinityScroll();

  useFetchNextPage(hasNextPage, fetchNextPage);

  if (isInitialLoading) {
    return (
      <Container page="spinner">
        <MyBeatLoader loading={isInitialLoading} />
      </Container>
    );
  }

  if (isSuccess) {
    return <CategoryPage CategoryList={data} />;
  }

  return <></>;
};

export default IndexPage;
