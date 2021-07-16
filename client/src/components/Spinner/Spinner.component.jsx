import React from 'react';
import './Spinner.style.css';

const Spinner = () => {
  return ( <div className="Spinner-container">
    <span className="hidden">
      <div className="Spinner__loading">
        
      </div>
      <div className="Spinner__loading" style={{width: "50px", height: "50px"}}></div>
      {/* <div className="Spinner__loading" style={{width: "200px", height: "200px"}}></div> */}
    </span>
  </div> );
}
 
export default Spinner;