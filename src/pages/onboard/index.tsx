import { Link } from 'react-router-dom';
import * as S from './style';

import LogoSrc from '@/assets/images/BBeekLogo.png';

const loginUrl = '/login';
const signinUrl = '/signin';

const OnboardPage = () => {
  return (
    <S.Container>
      <S.LogoImage src={LogoSrc} />
      <S.ButtonBox>
        <Link to={loginUrl}>
          <S.LoginButton variant='contained'>로그인</S.LoginButton>
        </Link>
        <Link to={signinUrl}>
          <S.SignInButton variant='outlined'>회원가입</S.SignInButton>
        </Link>
      </S.ButtonBox>
    </S.Container>
  );
};

export default OnboardPage;
