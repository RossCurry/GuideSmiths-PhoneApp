import React from 'react';
import './MenuModal.style.css';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, route }) => {
  return (
    <Link to={route} className="Menu-item__container">
      <li className="Menu-item">
        <span className="Menu-item__title">{title}</span>
        <span className="Menu-item__icon">icon</span>
      </li>
    </Link>
  );
}


const MenuModal = ({ menuAnimation }) => {
  return (
    <menu className="MenuModal__container" style={{animation: menuAnimation}}>
      <MenuItem title="Add New Model" route="/AddNewModel" />
      <MenuItem title="Edit Model" route="/EditModel" />
      <MenuItem title="Favourites" route="/Favourites" />
    </menu>
  );
}

MenuItem.propTypes = {
  title: PropType.string,
  route: PropType.string
}

MenuModal.propTypes = {
  menuAnimation: PropType.string
}

export default MenuModal;