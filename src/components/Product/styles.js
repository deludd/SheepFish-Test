import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const AddProductButton = styled.button`
  font-size: 20px;
  color: #f0f0f0;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #63baba;
  border-radius: 20px;
  background-color: #63baba;
  background-size: auto;
  padding: 10px;
  margin-top: 20px;
  &:hover {
    background-color: var(--primary);
    border: 1px solid var(--primary);
  }
`;

export const TdButtons = styled.td`
  display: flex;
  border: 1px solid var(--primary);
  padding: 10px;
  text-align: center;
`;

export const Img = styled.img`
  height: 40px;
`;


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background-color: var(--primary);
  color: white;
  padding: 10px;
  cursor: pointer;
  min-width: 80px;
`;

export const Td = styled.td`
  border: 1px solid var(--primary);
  padding: 10px;
  text-align: center;
`;

export const TdPhoto = styled.td`
  border: 1px solid var(--primary);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid var(--grey-100);
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  margin-top: 20px;
  width: 100%;

  &:hover {
    border-color: var(--primary);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;