import React, { FC } from 'react';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';
import Container from '@/components/UI/atoms/Container';
import useFetchNextPage from '@/hooks/useFetchNextPage';
import PokemonsPage from '@/components/pages/PokemonsPage';
import { useFetchPokemonByCategoryWithInfinityScroll } from '@/hooks/usePokemon';
import { useRouter } from 'next/router';

const IndexPage: FC = (): JSX.Element => {

  const router = useRouter();

  const categoryName = router?.query?.name;

  const { data, isSuccess, hasNextPage, fetchNextPage, isInitialLoading } =
  useFetchPokemonByCategoryWithInfinityScroll(categoryName as string);
  useFetchNextPage(hasNextPage, fetchNextPage);

  if (isInitialLoading) {
    return (
      <Container page="spinner">
        <MyBeatLoader loading={isInitialLoading} />
      </Container>
    );
  }

  if (isSuccess) {
    return <PokemonsPage pokemonList={data} />;
  }

  return <></>;
};

export default IndexPage;