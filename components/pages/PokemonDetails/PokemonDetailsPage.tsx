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


interface Props {
  pokemon: PokemonData;
  chain:any;
}

const PokemonDetailsPage: FC<Props> = ({ pokemon , chain}): JSX.Element => {
console.log("chain:",chain)
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

      <GridContainer>
        
      { (chain as GenericItem[]).map((item)=><Card
            key={item?.name}
            size={'large'}
            title={item.name}
            imgSrc={item[IMG_URL_KEY]}
            imgAlt={item[IMG_ALT_KEY]}
            linkPath={item[LINK_PATH_KEY]}
          />)}
      </GridContainer>

    </DetailsTemplate>
  );
};

export default PokemonDetailsPage;
