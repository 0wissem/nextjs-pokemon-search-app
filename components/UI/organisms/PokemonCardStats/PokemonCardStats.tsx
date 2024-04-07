import { FC } from 'react';
import { styled, theme } from '@/stitches.config';
import { PokemonData } from '@/lib/types';
import ResponsiveImage from '../../atoms/ResponsiveImage';
import Text from '../../atoms/Text';
import RadarChart from '../../molecules/RadarChart';

interface Props {
  pokemon: PokemonData;
}

const DetailsCard = styled('div', {
  height: '600px',
  width: '400px',
  margin: '0 auto',
  background: '$grey200',
  borderRadius: '$1 $1 $1 $1',
  overflow:"hidden",
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
});

const PokemonCardStats: FC<Props> = ({ pokemon }): JSX.Element => {
  return (
    <DetailsCard>
      <RadarChart pokemon={pokemon}/>
    </DetailsCard>
  );
};

export default PokemonCardStats;
