import React from 'react';
import Spinner from '../Spinner/Spinner.component';
import PropTypes from 'prop-types';

const Browser = ({ phoneData, phoneDataThumbNails }) => {
  return ( 
    <div className="Browser__container">
      {phoneData.length === 0 ? <Spinner /> : null}
      <ul className="App__thumbnail-list">
          {phoneData.length > 0 ? phoneDataThumbNails : null}
      </ul>
    </div>
   );
}

Browser.propTypes = {
  phoneData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired, 
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageFileName: PropTypes.string.isRequired,
    screen: PropTypes.string.isRequired,
    processor: PropTypes.string.isRequired,
    ram: PropTypes.number.isRequired
  })),
  phoneDataThumbNails: PropTypes.arrayOf(PropTypes.element)
}
 
export default Browser;