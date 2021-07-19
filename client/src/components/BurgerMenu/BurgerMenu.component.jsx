import React from 'react';
import './BurgerMenu.style.css';
import { PropTypes } from 'prop-types';

const BurgerMenu = ({ handleBurgerMenu, isMenu }) => {
  const topRotate = isMenu ? {transform: "rotate(45deg)", top: "0"} : {transform: "rotate(0)"};
  const bottomRotate = isMenu ? {transform: "rotate(-45deg)", top: "0" } : {transform: "rotate(0)"};
  const bgColor = isMenu ? {backgroundColor: "transparent"} : {backgroundColor: "rgb(151, 151, 151)"};
  return (
    <button type="button" className="BurgerMenu__button" onClick={handleBurgerMenu}>
      <div className="BurgerMenu__line BurgerMenu__center" style={bgColor}>
        <div className="BurgerMenu__line BurgerMenu__top" style={topRotate}></div>
        <div className="BurgerMenu__line BurgerMenu__bottom" style={bottomRotate}></div>
      </div>
    </button>
  );
}

BurgerMenu.propTypes = {
  handleBurgerMenu: PropTypes.func,
  isMenu: PropTypes.bool
}

export default BurgerMenu;