import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const LogoImage = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  margin-top: 15rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  bottom: 6.25rem;
`;

export const LoginButton = styled(Button)`
  width: 31.25rem;
  height: 3.5rem;
`;

export const SignInButton = styled(LoginButton)``;
