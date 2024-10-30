import * as S from './style';

const movementUrl = '/ment';

const AllergyDialog = ({
  type,
  allergy,
}: {
  type: 'warning' | 'notice';
  allergy: string;
}) => {
  return (
    <S.Container type={type}>
      <S.AllergyHeader>
        ❗{allergy.includes('답변:') ? allergy.split(':')[1] : allergy}
      </S.AllergyHeader>
      이 제품은 {allergy.includes('답변:') ? allergy.split(':')[1] : allergy}
      알레르기 성분을 포함하고 있습니다.
      {type === 'notice' && (
        <S.NoticeButton to={movementUrl}>도움 받기 &gt;</S.NoticeButton>
      )}
    </S.Container>
  );
};

export default AllergyDialog;
