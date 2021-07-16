import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.style.css';
import { Link, useHistory } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  const history = useHistory();
  return ( 
    <main>
      <aside><Link onClick={() => history.goBack()}>Browse</Link> {">"} {product.name}</aside>
      <img src={product.imageFileName} alt={product.description} />
    </main>
   );
}

ProductDetail.propTypes = {
  product: PropTypes.shape({
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

export default ProductDetail;