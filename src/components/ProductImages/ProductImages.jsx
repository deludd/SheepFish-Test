import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import View from '../../assets/images/View.svg';
import Modal from 'components/ModalWindow/ModalWindow';
import { Img, ButtonWrapper, CarouselContainer, ViewButton } from './styles';

const ProductImages = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImageIndex(0);
    setModalOpen(false);
  };

  return (
    <div>
      {images && images.length > 0 && (
        <>
        <ButtonWrapper>
          <ViewButton onClick={() => openModal(0)}>
            <img src={View} alt="View" />
          </ViewButton>
        </ButtonWrapper>
          {modalOpen && (
            <Modal isOpen={modalOpen} onClose={closeModal}>
              <CarouselContainer>
                <Carousel
                  selectedItem={currentImageIndex}
                  showArrows={true}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  infiniteLoop={true}
                  useKeyboardArrows={true}
                  onChange={(index) => setCurrentImageIndex(index)}
                >
                  {images.map((image, index) => (
                    <div key={index}>
                      <Img src={image} alt={`Картинка ${index + 1}`} />
                    </div>
                  ))}
                </Carousel>
              </CarouselContainer>
            </Modal>
          )}
        </>
      )}
      {(!images || images.length === 0) && (
        <div>
          <img src="path/to/empty-image-placeholder.png" alt="Empty Image" />
        </div>
      )}
    </div>
  );
};

export default ProductImages;
