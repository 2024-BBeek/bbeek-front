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

export const NextButton = styled(Button)`
  width: 31.25rem;
  height: 3.5rem;
  position: absolute;
  bottom: 6.25rem;
`;

export const SignInButton = styled(NextButton)``;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 3.125rem;
  padding: 0.5rem 1.375rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid #bdbdbd;

  &:focus {
    outline: none;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  width: 31.25rem;
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

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const Select = styled.input`
  width: 100%;
  height: 3.125rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid #bdbdbd;
  padding: 0.5rem 1.375rem;
  cursor: pointer;
  caret-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 3.125rem;
  position: relative;
`;

export const SelectBox = styled.div`
  width: 100%;
  height: 3.125rem;
  position: relative;
`;

export const SelectDropDown = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  gap: 0.625rem;
  border: 0.0625rem solid #bdbdbd;
  padding: 1rem;
  flex-wrap: wrap;
  z-index: 10;
  background-color: white;
`;

export const SelectOption = styled.div<{
  isSeleted: boolean;
}>`
  color: ${({ isSeleted }) => (isSeleted ? '#FFF' : '#111')};
  background-color: ${({ isSeleted }) => (isSeleted ? '#42A5F5' : '#D9D9D9')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.625rem;
  border-radius: 1rem;
  height: 2rem;

  padding: 0.25rem 0.5rem;
  width: fit-content;
  height: auto;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  cursor: pointer;
`;

export const SelectIcon = styled.img`
  position: absolute;
  width: 0.875rem;
  height: 0.4375rem;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const InputSection = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;

export const InputWrapper = styled.div`
  width: 15rem;
`;
