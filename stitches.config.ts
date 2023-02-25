import { Quicksand } from '@next/font/google';
import { createStitches } from '@stitches/react';

const quicksand = Quicksand({
  weight: ['400', '500', '600', '700'],
  style: 'normal',
});

export const { styled, getCssText, css, globalCss, theme } = createStitches({
  theme: {
    colors: {
      grey0: '#ffffff',
      grey100BackgroundColour: '#f7f7f7',
      grey200: '#eaeaea',
      grey300: '#dedede',
      grey400: '#bebebe',
      grey500MutedColour: '#a9a9a9',
      grey600: '#7d7d7d',
      grey700: '#686868',
      grey800: '#434343',
      grey900TextColour: '#1f1f1f',
      grey1000: '#000000',
      oceanPrimary: '#004368',
      oceanDark: '#004368',
      oceanMid: '#408ab6',
      oceanSoft: '#90c6e6',
      oceanPale: '#cde9f9',
      seafoamSecondary: '#3fddc0',
      seafoamDark: '#04c5a2',
      seafoamMid: '#5fe2c9',
      seafoamPale: '#c6f5ed',
      seafoamGhost: '#f7fdfc',
      coral: '#f07159',
      coralDark: '#ee6147',
      coralSoft: '#ffb4a7',
      coralPale: '#feedea',
      coralGhost: '#fffdfe',
      mango: '#fdc666',
      mangoDark: '#fdc055',
      mangoSoft: '#ffdfa6',
      mangoPale: '#fff8eb',
      mangoGhost: '#fffefd',
      w100: '#ffffff',
      w98: '#f9f9f9',
      w96: '#f4f4f4',
      w94: '#efefef',
      w90: '#e6e6e6',
      g70: '#b3b3b3',
      g40: '#666666',
      g20: '#333333',
      sky: '#bee8ff',
      skyDark: '#7cb4d3',
      skyMid: '#95d2f3',
      skySoft: '#d8effc',
      skyGhost: '#ebf7fe',
      b20: '#143b51',
      b35: '#425f6f',
      b60: '#899da8',
      b70: '#a7b5bd',
      danger: '#e86971',
      dangerDark: '#bb3941',
      dangerPale: '#feefef',
      success: '#89dfb5',
      successDark: '#296f59',
      successPale: '#e0f4e9',
      warning: '#f2b65d',
      warningPale: '#f9edc6',
      warningDark: '#ce7f08',
      info: '#b7d4e8',
      infoPale: '#e1eff9',
      infoDark: '#41769d',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '48px',
      8: '56px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '24px',
      6: '28px',
      7: '32px',
      8: '40px',
    },
    fonts: {
      quicksand: quicksand.style.fontFamily,
    },
    fontWeights: {
      1: '400',
      2: '500',
      3: '600',
      4: '700',
    },
    lineHeights: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      5: '16px',
      6: '18px',
    },
    letterSpacings: {
      1: '-0.02em',
    },
    sizes: {
      1024: '1024px',
      vw100: '100vw',
      vh100: '100vh',
      detailsCardHeight: '450px',
      detailsCardWidth: '300px',
      cardWidth: '320px',
      cardHeight: '360px',
      cardImgHeight: '167px',
      cardImgWidthBp1: 300,
      cardImgWidthBp2: 400,
      w100: '100%',
      header: '92px',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
    },
    borderStyles: {},
    radii: {
      1: '8px',
      2: '16px',
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
