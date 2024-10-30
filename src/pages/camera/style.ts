import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const ScannerWrapper = styled.div`
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  margin-top: 3rem;
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 133.4%;
  width: 27.5rem;
  display: flex;
`;

export const ProductImg = styled.img`
  width: 27.5rem;
  height: 12.5rem;
  margin-top: 1.625rem;
`;

export const AllergyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SlideButtonImg = styled.img`
  width: 0.76706rem;
  height: 1.32581rem;
`;

export const CameraButton = styled.button`
  width: 5.3125rem;
  height: 5.3125rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  bottom: 7rem;
`;

export const TypeButton = styled.button`
  height: 5.3125rem;
  width: 5.3125rem;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 7rem;
  left: 3.5rem;
  position: absolute;
  border-radius: 1rem;
`;

export const TypeImg = styled.img`
  width: 3.125rem;
  height: 3rem;
`;

export const FoodInfoBox = styled.div`
  border-radius: 0.3125rem;
  border: 1px solid rgba(33, 150, 243, 0.5);
  margin-top: 4.5rem;
  width: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem;
  margin-bottom: 1rem;
`;
