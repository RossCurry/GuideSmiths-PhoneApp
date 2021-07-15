import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ data }) => {
  console.log('dataProps', data);
  return ( 
    // <img src={data.imageFileName} alt="" srcset="" />
    <div>
      <h2>thumbnail view{data.name}</h2>
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