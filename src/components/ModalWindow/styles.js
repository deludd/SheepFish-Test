import { styled } from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 0 20px 20px 20px;
  border-radius: 5px;
  position: relative;
  width: 60%;
  max-height: 80%;
  overflow: auto;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseImage = styled.img`
  height: 40px;
  padding-top: 10px;
  padding-bottom: 5px;
`;