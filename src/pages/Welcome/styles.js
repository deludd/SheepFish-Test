import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  color: #666;
  text-align: center;
`;

export const Button = styled(Link)`
  font-size: 24px;
  color: #f0f0f0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #63baba;
  border-radius: 20px;
  background-color: #63baba;
  background-size: auto;
  padding: 10px;
  &:hover {
    background-color: var(--primary);
    border: 1px solid var(--primary);
  }
`;