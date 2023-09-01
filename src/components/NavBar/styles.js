import styled, { keyframes } from 'styled-components';
import bgHeader from '../../assets/images/bg-header-desktop.svg';
import { Link } from 'react-router-dom';

// Определяем анимацию скачка (bounce) с помощью keyframes
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px); /* Выберите высоту, на которую вы хотите, чтобы элемент прыгал */
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const Header = styled.div`
  min-height: 50px;
  background-image: url(${bgHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--primary);

  /* Добавляем flex-контейнер и выравниваем элементы по центру */
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Arrow = styled(Link)`
  padding-left: 10px;
  img {
    width: 30px;
    height: 30px;
    transition: transform 0.2s ease-in-out; /* Плавное изменение transform при ховере */
  }

  /* Применяем анимацию при ховере */
  &:hover img {
    animation: ${bounceAnimation} 1.5s ease infinite; /* Используем анимацию скачка (bounce) при ховере */
  }
`;
