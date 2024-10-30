import * as S from './style';
import { GrayCamera, GrayHome, GrayList } from '@/assets/images';

const Tabbar = () => {
  const Icons = [
    { icon: GrayCamera, title: '카메라' },
    { icon: GrayHome, title: '홈' },
    { icon: GrayList, title: '음식 성향 분석' },
  ];

  return (
    <S.Container>
      {Icons.map((element, index) => (
        <S.IconWrapper key={index}>
          <S.Icon src={element.icon} alt={element.title} />
          <S.Title>{element.title}</S.Title>
        </S.IconWrapper>
      ))}
    </S.Container>
  );
};

export default Tabbar;
