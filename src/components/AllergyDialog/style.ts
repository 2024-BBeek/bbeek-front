import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div<{
  type: 'warning' | 'notice';
}>`
  padding: 1.25rem 2.5rem;
  background-color: #feebee;
  display: flex;
  height: ${({ type }) => (type === 'warning' ? '6.875rem' : '10rem')};
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  color: ${({ type }) => (type === 'warning' ? '#c62828' : '#E65100')};
  background-color: ${({ type }) =>
    type === 'warning' ? '#FEEBEE' : '#FFFDE7'};

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.00938rem;

  h1 {
    color: ${({ type }) => (type === 'warning' ? '#c62828' : '#E65100')};
  }
`;

export const NoticeButton = styled(Link)`
  color: #e65100;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.00938rem;
`;

export const AllergyHeader = styled.div`
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.75rem;
  letter-spacing: 0rem;
`;
