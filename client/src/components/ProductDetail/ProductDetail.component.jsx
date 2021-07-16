import React from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.style.css';
import { Link, useHistory } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  const history = useHistory();
  const currency = 'EUR';
  return ( 
    <main className="ProductDetail__container">
      <aside><Link onClick={() => history.goBack()}>Browse</Link> {">"} {product.name}</aside>
      <img src={product.imageFileName} alt={product.description} />
      <span className="ProductDetail__color-info">
        <span className="ProductDetail__color">{product.color}</span>
        <div className="ProductDetail__color-tab" style={{backgroundColor: `${product.color}`}}></div>
      </span>
      <span className="ProductDetail__info">
        <span className="ProductDetail__info-name">{product.name} </span>
        <span className="ProductDetail__info-price">{currency} {product.price}</span>
      </span>
      <div className="ProductDetail__callToAction">
        <button type="button" className="info-button">+ info</button>
        <button type="button" className="buy-button"> buy</button>
      </div>
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