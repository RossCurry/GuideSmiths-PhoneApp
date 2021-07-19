import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu.component';
import './Header.style.css';
import { PropTypes } from 'prop-types';

const Header = ({ handleBurgerMenu, isMenu }) => {
  const handleClick = () => {
    if (isMenu) handleBurgerMenu();
  }
  return (
    <header>
      <nav>
        <BurgerMenu handleBurgerMenu={handleBurgerMenu} isMenu={isMenu} />
        <a 
          href="/" 
          onClick={handleClick}
          >
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--aTWP4Fd_--/c_fill,f_auto,fl_progressive,h_220,q_auto,w_220/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/3332/fdd86177-6953-4a43-832d-ff2a8561f9e8.png" 
          alt="guidesmith logo" 
          style={{width: '50px'}} />
          <h1>GuideSmiths</h1>
        </a>
      </nav>
    </header>
  );
}

Header.propTypes = {
  handleBurgerMenu: PropTypes.func,
  isMenu: PropTypes.bool
}

export default Header;