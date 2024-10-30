import Tabbar from '@/components/tabbar';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from 'chart.js';
import * as S from './style';
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const FoodProfilingPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const defaultColors = ['#D2D2D2', '#D2D2D2', '#D2D2D2', '#D2D2D2', '#D2D2D2'];
  const highlightColors = [
    ['#1976D2', '#D2D2D2', '#D2D2D2', '#D2D2D2', '#D2D2D2'],
    ['#D2D2D2', '#1976D2', '#D2D2D2', '#D2D2D2', '#D2D2D2'],
    ['#D2D2D2', '#D2D2D2', '#1976D2', '#D2D2D2', '#D2D2D2'],
    ['#D2D2D2', '#D2D2D2', '#D2D2D2', '#1976D2', '#D2D2D2'],
    ['#D2D2D2', '#D2D2D2', '#D2D2D2', '#D2D2D2', '#1976D2'],
  ];

  const result = [
    { menu: '가나다', percent: 78 },
    { menu: '라마바사', percent: 16 },
    { menu: '아자', percent: 12 },
    { menu: '차카타파', percent: 6 },
    { menu: '하', percent: 6 },
  ];

  const handleClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      const clickedIndex = elements[0].index;
      setSelectedIndex(clickedIndex);
    }
  };

  const Data = {
    labels: result.map((item) => item.menu),
    datasets: [
      {
        data: [40, 10, 10, 20, 20],
        backgroundColor:
          selectedIndex !== null
            ? highlightColors[selectedIndex]
            : defaultColors,
        borderColor: '#FFFFFF',
        borderWidth: 5,
      },
    ],
  };

  const Options = {
    plugins: {
      tooltip: {
        backgroundColor: 'white',
        titleColor: 'black',
        bodyColor: 'black',
        borderWidth: 1,
        displayColors: false,
        titleFont: {
          family: 'Pretendard-Medium',
          size: 12,
        },
        bodyFont: {
          family: 'Pretendard-Medium',
          size: 12,
        },
      },
      legend: {
        display: false,
      },
    },
    cutout: '65%',
    onClick: handleClick,
  };

  return (
    <S.Container>
      <S.GraphWrapper>
        <Doughnut data={Data} options={Options}></Doughnut>
      </S.GraphWrapper>
      <Tabbar />
    </S.Container>
  );
};

export default FoodProfilingPage;
