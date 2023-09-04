import { styled } from 'styled-components';

export const Img = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

export const ViewButton = styled.button`
  cursor: pointer;
  padding: 10px;
  border: none;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  flex-grow: 1;
  .carousel .control-arrow {
    font-size: 24px;
    color: #333;
    background-color: #63baba;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .carousel .control-arrow:hover {
    color: #fff;
    background-color: var(--primary)
  }
`;