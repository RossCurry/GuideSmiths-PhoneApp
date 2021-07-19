import React from 'react';
import './BurgerMenu.style.css';
import { PropTypes } from 'prop-types';

const BurgerMenu = ({ handleBurgerMenu }) => {
  return ( 
    <button type="button" className="BurgerMenu__button" onClick={handleBurgerMenu}>
      <div className="BurgerMenu__line"></div>
    </button>
   );
}

BurgerMenu.propTypes = {
  handleBurgerMenu: PropTypes.func
}
 
export default BurgerMenu;