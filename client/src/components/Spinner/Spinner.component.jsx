import React from 'react';
import './Spinner.style.css';

const Spinner = () => {
  return ( 
  <div className="Spinner-container">
      <div className="Spinner__loading"></div>
      <span className="Spinner__text">
        <h2>One sec, loading...</h2>
      </span>
  </div> );
}
 
export default Spinner;