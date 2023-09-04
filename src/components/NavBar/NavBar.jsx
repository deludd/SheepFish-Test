import { Header, Arrow } from "./styles";
import { useLocation } from 'react-router-dom';
import leftArrow from '../../assets/images/arrow_back_icon.svg';


const NavBar = () => {
  const location = useLocation();

  return (
    <Header className='header'>
      {location.pathname !== '/' &&
        <Arrow to="/">
          <img src={leftArrow} alt="Back" />
        </Arrow>
      }
    </Header>
  )
}

export default NavBar;