import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductDetail.style.css';
import { Link, useHistory } from 'react-router-dom';
import { deletePhoneInstance } from '../../apiService';

const ProductDetail = ({ product }) => {
  const [isVisible, setIsVisible] = useState('none');
  const history = useHistory();
  const currency = 'EUR';
  const handleDelete = async () => {
    const deletedPhone = await deletePhoneInstance(product.id);
    console.log('deletedPhone', deletedPhone);
    history.push('/');

  }
  useEffect(() => {
    if (!product.name) history.push('/') 
  }, [product])
  return (
    <main className="ProductDetail__container">
      <aside><Link to='/'>Browse</Link> {">"} {product.name}</aside>
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
        <button type="button" className="info-button" onClick={() => setIsVisible('grid')}>+ info</button>
        <button type="button" className="buy-button"> buy</button>
      </div>
      <div className="ProductDetail__modal" style={{display: isVisible}}>
        <div className="ProductDetail__modal-info">
          <button type="button" className="modal-button" onClick={() => setIsVisible('none')}>
            <div className="modal-button__line"></div>
          </button>
          <span className="modal-info">manufacturer: {' '} {product.manufacturer}</span>
          <span className="modal-info">name: {' '} {product.name}</span>
          <span className="modal-info">description: {' '} {product.description}</span>
          <span className="modal-info">screen: {' '} {product.screen}</span>
          <span className="modal-info">processor: {' '} {product.processor}</span>
          <span className="modal-info">ram: {' '} {product.ram}</span>
          <button type="button" id="delete-product" onClick={handleDelete}>Delete Product</button>
        </div>
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