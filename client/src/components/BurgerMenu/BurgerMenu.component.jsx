import React, { useState } from 'react';
import './BurgerMenu.style.css';
import { PropTypes } from 'prop-types';

const BurgerMenu = ({ handleBurgerMenu }) => {
  // const [burgerMenuStyle, setBurgerMenuStyle] = useState({});
  // const changeStyle = {
  //   open: {transform: "rotate(90deg)"},
  //   close: {transform: "rotate(90deg)"}
  // }
  const [isMenu, setIsMenu] = useState(false);
  const topRotate = isMenu ? {transform: "rotate(45deg)", top: "0"} : {transform: "rotate(0)"};
  const bottomRotate = isMenu ? {transform: "rotate(-45deg)", top: "0" } : {transform: "rotate(0)"};
  const bgColor = isMenu ? {backgroundColor: "transparent"} : {backgroundColor: "rgb(151, 151, 151)"};
  const handleClick = () => {
    handleBurgerMenu();
    setIsMenu(!isMenu);
    // if (burgerMenuStyle === {}) {
    //   setBurgerMenuStyle(changeStyle.open)
    // } else if (burgerMenuStyle === changeStyle.open) {
    //   setBurgerMenuStyle(changeStyle.close)
    // }
  }
  return (
    <button type="button" className="BurgerMenu__button" onClick={handleClick}>
      <div className="BurgerMenu__line BurgerMenu__center" style={bgColor}>
        <div className="BurgerMenu__line BurgerMenu__top" style={topRotate}></div>
        <div className="BurgerMenu__line BurgerMenu__bottom" style={bottomRotate}></div>
      </div>
    </button>
  );
}

BurgerMenu.propTypes = {
  handleBurgerMenu: PropTypes.func
}

export default BurgerMenu;