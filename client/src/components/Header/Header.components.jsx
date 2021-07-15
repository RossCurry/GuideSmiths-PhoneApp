import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu.component';
// import './Header.style.css';

const Header = () => {
  return (
    <header>
      <nav>
        <BurgerMenu />
        <h1>GuideSmiths</h1>
        <div>search</div>
      </nav>
    </header>
  );
}

export default Header;