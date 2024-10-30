import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem 0;
`;

export const MyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 31.25rem;
  height: 18.75rem;
  border: solid 1px rgba(33, 150, 243, 0.5);
  border-radius: 0.3125rem;
`;

export const Profile = styled.img`
  width: 8.125rem;
  height: 8.125rem;
  border-radius: 5.625rem;
  border: 1px solid black;
`;

export const Greeting = styled.p`
  font-size: 1.875rem;
`;

export const Allergies = styled.div`
  display: flex;
  gap: 0.62rem;
`;

export const Allergy = styled.div`
  width: fit-content;
  height: auto;
  background-color: #42a5f5;
  color: white;
  border-radius: 1rem;
  user-select: none;
  padding: 0.28rem 0.81rem;
  font-size: 0.625rem;
`;

export const Vegan = styled.div`
  width: fit-content;
  height: auto;
  background-color: #01579b;
  color: white;
  border-radius: 1rem;
  user-select: none;
  padding: 0.28rem 0.81rem;
  font-size: 0.625rem;
`;

export const ProgressBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.81rem;
  width: 31.25rem;
  height: 34.375rem;
  border: solid 1px rgba(33, 150, 243, 0.5);
  border-radius: 0.3125rem;
  padding: 1.25rem 1.88rem;
`;

export const GraphWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31.25rem;
  height: 18.75rem;
  border: solid 1px rgba(33, 150, 243, 0.5);
  border-radius: 0.3125rem;
`;

export const RecommendFoodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31.25rem;
  height: 34.375rem;
  border: solid 1px rgba(33, 150, 243, 0.5);
  border-radius: 0.3125rem;
  padding-top: 1.88rem;
`;

export const RecommendFood = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.88rem;
`;

export const RecommendFoodBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;
  width: 27.5rem;
  height: 8.1875rem;
  background-color: #e1f5fe;
  padding: 1.25rem 2.37rem;
`;

export const Title = styled.p`
  color: #0d47a1;
  font-size: 1.375rem;
`;

export const Text = styled.p`
  font-size: 1rem;
`;
