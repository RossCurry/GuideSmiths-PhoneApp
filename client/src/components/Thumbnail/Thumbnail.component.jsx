import React from 'react';
import PropTypes from 'prop-types';
import './Thumbnail.style.css';

const Thumbnail = ({ data }) => {
  console.log('dataProps', data);
  return ( 
    <div className="Thumbnail__container">
      <img src={data.imageFileName} alt={data.description} />
      <h2>{data.name}</h2>
    </div>
   );
}

Thumbnail.propTypes = {
  data: PropTypes.shape({
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
  })
}
 
export default Thumbnail;