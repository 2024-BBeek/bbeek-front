import { useState } from 'react';
import * as S from './style';

import { closeEye, openEye } from '@/assets/images';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '@/apis';

const LoginPage = () => {
  const [idValue, setIdValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [isShow, setIsShow] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLoginButtonClick = async () => {
    try {
      await axiosInstance.post('/login', {
        userId: idValue,
        password: passwordValue,
      });
      navigate('/');
    } catch (error) {}
  };

  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.Description>로그인하고 삐빅을 사용해보세요</S.Description>
      <S.InputBox>
        <S.Input
          value={idValue}
          onChange={(e) => setIdValue(e.target.value)}
          placeholder='아이디를 입력해주세요.'
        />
        <S.PasswordWrapper>
          <S.Input
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder='비밀번호를 입력해주세요.'
            type={isShow ? 'text' : 'password'}
          />
          <S.EyeButton onClick={() => setIsShow((prev) => !prev)}>
            <S.EyeImage src={isShow ? openEye : closeEye} />
          </S.EyeButton>
        </S.PasswordWrapper>
      </S.InputBox>
      <S.LoginButton variant='contained' onClick={handleLoginButtonClick}>
        로그인
      </S.LoginButton>
    </S.Container>
  );
};

export default LoginPage;
