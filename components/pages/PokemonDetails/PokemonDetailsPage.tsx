import React, { FC } from 'react';
import { GenericItem, PokemonData } from '@/lib/types';
import PokemonCardDetails from '@/components/UI/organisms/PokemonCardDetails';
import DetailsTemplate from '@/components/templates/DetailsTemplate';
import PokemonDetailContainer from '@/components/UI/atoms/PokemonDetailContainer';
import PokemonCardStats from '@/components/UI/organisms/PokemonCardStats';
import { IMG_ALT_KEY, IMG_URL_KEY, LINK_PATH_KEY } from '@/utils/mapPokemonPaginatedResults';
import ItemList from '@/components/UI/organisms/ItemList';
import { GridContainer } from '@/components/UI/organisms/ItemList/ItemList';
import Card from '@/components/UI/organisms/Card';
import ItemHorizontalList from '@/components/UI/organisms/ItemHorizontalList';
import Text from '@/components/UI/atoms/Text';


interface Props {
  pokemon: PokemonData;
  chain:any;
}

const PokemonDetailsPage: FC<Props> = ({ pokemon , chain}): JSX.Element => {

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
      <Text
            textStyle={'textParagraph'}
            css={{
              color: '$seafoamDark',
              marginTop: 50,
              marginBottom: 50,

            }}
          >
            <strong>Pokemon Evolution</strong>
          </Text>
      <ItemHorizontalList
        list={chain}
        titleKey="name"
        imgSrcKey={IMG_URL_KEY}
        imgAltKey={IMG_ALT_KEY}
        linkPathKey={LINK_PATH_KEY}
      />

    </DetailsTemplate>
  );
};

export default PokemonDetailsPage;
