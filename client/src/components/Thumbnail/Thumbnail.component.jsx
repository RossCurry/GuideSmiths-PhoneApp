import React from 'react';
import PropTypes from 'prop-types';
import './Thumbnail.style.css';

const Thumbnail = ({ data }) => {
  const currency = 'Eur'
  return ( 
    <div className="Thumbnail__container">
      <img src={data.imageFileName} alt={data.description} />
      <div className="Thumbnail__product-info">
        <span className="Thumbnail__product-name">{data.name}</span>
        <span className="Thumbnail__product-price">{currency} {data.price}</span>
        <span className="Thumbnail__product-color">{data.color}</span>
      </div>
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