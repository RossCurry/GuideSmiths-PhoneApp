import React, { useEffect, useState } from 'react';
import './MenuModal.style.css';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, route, handleBurgerMenu }) => {
  return (
    <Link to={route} className="Menu-item__container" onClick={handleBurgerMenu}>
      <li className="Menu-item">
        <span className="Menu-item__title">{title}</span>
        <span className="Menu-item__icon">icon</span>
      </li>
    </Link>
  );
}


const MenuModal = ({ menuAnimation, handleBurgerMenu, isMenu }) => {
  const [menuClass, setMenuClass] = useState('MenuModal__container display-off');
  useEffect(()=> {
    if (isMenu) {
      setMenuClass('MenuModal__container display-grid');
    } else {
      setTimeout(() => {
        setMenuClass('MenuModal__container display-off')
      }, 300);
    }
  }, [isMenu])
  return (
    <span className="MenuModal__hidden">
      <menu className={menuClass} style={{animation: menuAnimation}}>
        <MenuItem title="Add New Model" route="/mobile/new" handleBurgerMenu={handleBurgerMenu} />
        <MenuItem title="Edit Model" route="/mobile/edit" handleBurgerMenu={handleBurgerMenu} />
        <MenuItem title="Favourites" route="/mobile/favorites" handleBurgerMenu={handleBurgerMenu} />
      </menu>
    </span>
  );
}

MenuItem.propTypes = {
  title: PropType.string,
  route: PropType.string,
  handleBurgerMenu: PropType.func
}

MenuModal.propTypes = {
  menuAnimation: PropType.string,
  handleBurgerMenu: PropType.func,
  isMenu: PropType.bool
}

export default MenuModal;