import React from 'react';
import './BurgerMenu.style.css';

const BurgerMenu = () => {
  return ( 
    <button type="button" className="BurgerMenu__button" onClick={()=> console.log('burgermenu')}>
      <div className="BurgerMenu__line"></div>
    </button>
   );
}
 
export default BurgerMenu;