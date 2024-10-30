import * as S from './style';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from 'chart.js';
import { useState } from 'react';
import { bonobono } from '@/assets';
import { Header } from '@/components';

ChartJS.register(ArcElement, Tooltip, Legend);

const MainPage = () => {
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

  const handleClick = (_: ChartEvent, elements: ActiveElement[]) => {
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
      <Header />
      <S.MyBox>
        <S.Profile src={bonobono} />
        <S.Greeting>원은지님, 안녕하세요!</S.Greeting>
        <S.Allergies>
          <S.Allergy>우유</S.Allergy>
          <S.Allergy>갑각류</S.Allergy>
          <S.Allergy>우유우유</S.Allergy>
          <S.Vegan>overdose</S.Vegan>
        </S.Allergies>
      </S.MyBox>
      <S.GraphWrapper>
        <Doughnut data={Data} options={Options}></Doughnut>
      </S.GraphWrapper>
      <S.RecommendFoodWrapper>
        <S.RecommendFood>
          <S.RecommendFoodBox>
            <S.Title>📌 비빔밥</S.Title>
            <S.Text>
              밥에 각종 나물을 넣고, 장을 넣어서 비벼먹는 전통 한국 요리.
            </S.Text>
          </S.RecommendFoodBox>
          <S.RecommendFoodBox>
            <S.Title>📌 비빔밥</S.Title>
            <S.Text>
              밥에 각종 나물을 넣고, 장을 넣어서 비벼먹는 전통 한국 요리.
            </S.Text>
          </S.RecommendFoodBox>
          <S.RecommendFoodBox>
            <S.Title>📌 비빔밥</S.Title>
            <S.Text>
              밥에 각종 나물을 넣고, 장을 넣어서 비벼먹는 전통 한국 요리.
            </S.Text>
          </S.RecommendFoodBox>
        </S.RecommendFood>
      </S.RecommendFoodWrapper>
    </S.Container>
  );
};

export default MainPage;
