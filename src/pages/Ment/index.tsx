import { Header } from '@/components';
import * as S from './style';

const MentPage = () => {
  return (
    <S.Container>
      <Header />
      <S.Title>{'제품 이름'}</S.Title>
      <S.ProductImg src='' />
      <S.FoodInfoBox>
        <S.AllergyBox>
          {['hihi', 'fdasfd'].map((_allergy) => (
            <S.AllergyAlert key={_allergy}>
              저는 {'새우'} 알러지가 있습니다.
              <br /> 혹시 이 음식에 {'새우'}가 들어있다면 말씀해주세요. <br />
              감사합니다.
            </S.AllergyAlert>
          ))}
        </S.AllergyBox>
      </S.FoodInfoBox>
    </S.Container>
  );
};

export default MentPage;
