import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const AllergyAlert = styled.div`
  padding: 1.25rem 2.5rem;
  background-color: #e0f2f1;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: black;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.00938rem;
`;

export const FoodInfoBox = styled.div`
  border-radius: 0.3125rem;
  border: 1px solid rgba(33, 150, 243, 0.5);
  margin-top: 4.5rem;
  width: 31.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.87rem;
  padding: 1.8rem;
  margin-bottom: 1rem;
`;

export const AllergyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
