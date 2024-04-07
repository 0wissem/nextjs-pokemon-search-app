import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { styled, theme, css } from '@/stitches.config';


const PokemonDetailContainer: FC<any> = ({children}) => {
  
  const Container = styled('div', {
    display:"flex",
    flexWrap:"wrap",
    gap:50,
  });

  return (
    <Container>
      {children}
    </Container>
  );
};

export default PokemonDetailContainer;
