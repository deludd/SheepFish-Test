import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const StyledErrorMessage = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
  margin-top: -20px;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid var(--primary);
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  margin-bottom: 20px;
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
