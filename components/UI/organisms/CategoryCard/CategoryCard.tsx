import React, { FC } from 'react';
import CardBody from '../../molecules/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage';
import { styled, theme } from '@/stitches.config';

interface Props {
  size: 'large';
  title: string;
  linkPath: string;
}

const StyledCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  width: '$w100',
  height: '$cardHeight',
  '& div': {
    height: '$cardImgHeight',
  },
  '& div img': {
    padding: '$4',
  },
});

const CategoryCard: FC<Props> = ({ title, linkPath }): JSX.Element => {
  return (
    <StyledCard>
      <CardBody title={title} linkText="Pokemons →" linkPath={linkPath} />
    </StyledCard>
  );
};

export default CategoryCard;
