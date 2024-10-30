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

export const Title = styled.h1`
  margin-top: 15em;
  color: #000;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
  letter-spacing: 0rem;
  width: 31.25rem;
`;

export const Description = styled.h2`
  color: #000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.00625rem;
  width: 31.25rem;
  margin-top: 0.625rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5.5rem;
  position: relative;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: flex;
  width: 31.25rem;
  height: 3.125rem;
  padding: 0.5rem 1.375rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid #bdbdbd;

  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled(Button)`
  width: 31.25rem;
  height: 3.5rem;
  position: absolute;
  bottom: 6.25rem;
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0;
`;

export const EyeImage = styled.img`
  width: 1.125rem;
  height: 0.75rem;
`;
