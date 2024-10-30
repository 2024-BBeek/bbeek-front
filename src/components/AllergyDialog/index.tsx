import * as S from './style';

const movementUrl = '/ment';

const AllergyDialog = ({ type }: { type: 'warning' | 'notice' }) => {
  return (
    <S.Container type={type}>
      <S.AllergyHeader>❗{'알레르기 주의'}</S.AllergyHeader>이 제품은
      {' 알러지 종류'} 알레르기 성분을 포함하고 있습니다.
      {type === 'notice' && (
        <S.NoticeButton to={movementUrl}>도움 받기 &gt;</S.NoticeButton>
      )}
    </S.Container>
  );
};

export default AllergyDialog;
