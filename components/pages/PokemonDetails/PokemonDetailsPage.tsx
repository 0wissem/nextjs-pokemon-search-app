import React, { FC } from 'react';
import { PokemonData } from '@/lib/types';
import PokemonCardDetails from '@/components/UI/organisms/PokemonCardDetails';
import DetailsTemplate from '@/components/templates/DetailsTemplate';
import PokemonDetailContainer from '@/components/UI/atoms/PokemonDetailContainer';
import PokemonCardStats from '@/components/UI/organisms/PokemonCardStats';

interface Props {
  pokemon: PokemonData;
}

const PokemonDetailsPage: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DetailsTemplate
      backPath="/"
      backPathText="&lt; Back"
      title="NextJS Pokemon Search App"
    >
      <PokemonDetailContainer>
        <PokemonCardDetails pokemon={pokemon} />
        <PokemonCardStats pokemon={pokemon} />
      </PokemonDetailContainer>


    </DetailsTemplate>
  );
};

export default PokemonDetailsPage;
