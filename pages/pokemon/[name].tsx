import React, { FC, useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getPokemonChain, searchPokemon, useGetPokemonChain, useSearchPokemon } from '@/hooks/usePokemon';
import PokemonDetailsPage from '@/components/pages/PokemonDetails';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import MyBeatLoader from '@/components/UI/molecules/BeatLoader';
import Title from '@/components/UI/atoms/Title';
import Container from '@/components/UI/atoms/Container';
import Link from 'next/link';
import Text from '@/components/UI/atoms/Text';
import { extractEvolutions } from '@/utils/extractionEvolutions';




const PokemonDetails: FC = (): JSX.Element => {
  const router = useRouter();
  const pokemonName =
    typeof router.query?.name === 'string' ? router.query.name : '';
  const {
    isSuccess: pokemonIsSuccess,
    data: pokemonDetails,
    isInitialLoading,
    isLoading,
    isFetching,
    isRefetching,
    isError: pokemonIsError,
  } = useSearchPokemon(pokemonName);

  const { data:chain, isLoading:isLoadingChain, isError:chainIsError,isSuccess: chainIsSuccess, } = useGetPokemonChain(pokemonName);

  if (isInitialLoading || isLoading || isFetching || isRefetching || isLoadingChain ) {
    return (
      <Container page="spinner">
        <MyBeatLoader loading={pokemonIsSuccess} />
      </Container>
    );
  }

  if (pokemonIsError) {
    return (
      <Container page="spinner">
        <Link href={'/'}>
          <Text
            textStyle={'textParagraph'}
            css={{
              color: '$seafoamDark',
              marginTop: '$4',
              marginBottom: '$8',
            }}
          >
            <strong>&lt; Back</strong>
          </Text>
        </Link>
        <Title>We couldn&apos;t find your pokemon </Title>
        <div
          style={{ textAlign: 'center', margin: '0 auto' }}
          role="img"
          aria-label="sad"
        >
          😢
        </div>
      </Container>
    );
  }

  if (pokemonIsSuccess) {
    return <PokemonDetailsPage pokemon={pokemonDetails} chain={chain} />;
  }

  return <></>;
};

export default PokemonDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const name = context.params?.name as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['searchPokemon', name], () =>
    searchPokemon(name)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
