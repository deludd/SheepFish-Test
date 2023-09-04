import React from 'react';
import Close from '../../assets/images/Close.svg';
import { ModalWrapper, ModalContent, Header, CloseButton, CloseImage } from './styles';

const Modal = ({ onClose, children }) => {
  const closeModal = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalWrapper onClick={handleOverlayClick}>
      <ModalContent>
        <Header>
          <CloseButton onClick={closeModal}>
            <CloseImage src={Close} alt="Close" />
          </CloseButton>
        </Header>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
