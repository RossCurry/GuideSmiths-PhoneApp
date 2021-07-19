import React, { useEffect } from 'react';
import './Browser.style.css';
import Spinner from '../Spinner/Spinner.component';
import PropTypes from 'prop-types';
import { fetchAllPhoneData } from '../../apiService';

const Browser = ({ phoneData, phoneDataThumbNails, setPhoneData }) => {
  useEffect(async () => {
    // call api & set data
    const fetchedData = await fetchAllPhoneData();
    setTimeout(() => {
      setPhoneData(fetchedData);
    }, 1000);
  }, []);
  return ( 
    <div className="Browser__container">
      {phoneData.length === 0 ? <Spinner /> : null}
      <ul className="Browser__thumbnail-list">
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
  phoneDataThumbNails: PropTypes.arrayOf(PropTypes.element),
  setPhoneData: PropTypes.func
}
 
export default Browser;