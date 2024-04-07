import { FC, useRef, useState } from 'react';
import { styled, theme } from '@/stitches.config';
import { PokemonData } from '@/lib/types';
// import Chart from 'react-apexcharts'
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

interface Props {
  pokemon: PokemonData;
}


const RadarChart: FC<Props> = ({
  pokemon
}): JSX.Element => {
  const data = pokemon.stats.map(stat=>({base_stat: stat.base_stat, category:stat.stat.name}))
  const state = {
    options: {
      chart: {
        background: '#fff',
        toolbar: {
          show: false,
        }
      },
      xaxis: {
        categories: data.map(d=>d.category),
        labels: {
          show: true,
          style: {
            colors: [`${theme.colors.infoDark}`,`${theme.colors.infoDark}`,`${theme.colors.infoDark}`,`${theme.colors.infoDark}`,`${theme.colors.infoDark}`,`${theme.colors.infoDark}`],
            fontSize: "11px",
            fontFamily:  theme.fonts.quicksand,
          }
        },
        
      },
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          borderRadius:12,
          foreColor:`${theme.colors.infoDark}` ,
        },
        style: {
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: [`${theme.colors.mango}`]
      },
      },
      plotOptions: {
        radar: {
          size: 125,
          polygons: {
            strokeColor: '#e8e8e8',
            fill: {
                colors: ['#f8f8f8', '#fff']
            }
          }
        }
      },
      stroke: {
        width: 1,
        dashArray: 3, 
        colors: [`${theme.colors.infoDark}`],
      },
      subtitle: {
        text: "Stats",
        style: {
          fontSize:  '18px',
          fontWeight:  '600',
          fontFamily:  theme.fonts.quicksand,
          color:  `${theme.colors.infoDark}`
        },
      },
      fill:{
        opacity:0.2,
        colors:['#41769d']
      }
    },
    series: [{
      name: 'Stats',
      data: data.map(d=>d.base_stat)
    }],
  
    
  }

  return(
    <ApexCharts options={state.options} series={state.series} type="radar" height={"100%"} width={400} />
    )
  
};

export default RadarChart;
