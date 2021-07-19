import React, { useState } from 'react';
import './CreateProduct.style.css';
import { createPhoneInstance } from '../../apiService';
import { useHistory } from 'react-router-dom';

const initialValue = {
  name: '',
  manufacturer: '',
  description: '', 
  color: '', 
  price: 0, 
  imageFileName: '', 
  screen: '', 
  processor: '', 
  ram: 0, 
}

const CreateProduct = () => {
  const [value, setValue] = useState(initialValue);
  const history = useHistory();
  const handleChange = (e) => {
    const targetName = e.target.name;
    const newValue = e.target.value;
    setValue({...value, [targetName]: newValue});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let el in value) {
      if (value[el] == 0 || value[el] === '') {
        return;
      }
    }
    const { id } = await createPhoneInstance(value);
    console.log('return id is ', id);
    if (id) {
      setValue(initialValue);
      history.push('/');
    }
  }
  return ( 
    <div className="CreateProduct__container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name
          <input 
          type="text" 
          name="name" 
          id="name" 
          onChange={handleChange} 
          value={value.name} 
          className={value.name ? '' : 'borderWarning'} />
        </label>
        <label htmlFor="manufacturer">manufacturer
          <input 
          type="text" 
          name="manufacturer" 
          id="manufacturer" 
          onChange={handleChange} 
          value={value.manufacturer} 
          className={value.manufacturer ? '' : 'borderWarning'}  />
        </label>
        <label htmlFor="description">description
          <input 
          type="text" 
          name="description" 
          id="description" 
          onChange={handleChange} 
          value={value.description} 
          className={value.description ? '' : 'borderWarning'}  />
        </label>
        <label htmlFor="color">color
          <input 
          type="text" 
          name="color" 
          id="color" 
          onChange={handleChange} 
          value={value.color}  
          className={value.color ? '' : 'borderWarning'}  />
        </label>
        <label htmlFor="price">price
          <input 
          type="number" 
          name="price" 
          id="price" 
          onChange={handleChange} 
          value={value.price} 
          className={value.price ? '' : 'borderWarning'}  />
        </label>
        <label htmlFor="imageFileName">http image address
          <input 
          type="text" 
          name="imageFileName" 
          id="imageFileName" 
          onChange={handleChange} 
          value={value.imageFileName} 
          className={value.imageFileName ? '' : 'borderWarning'}  />
        </label>
        <label htmlFor="screen">screen size
          <input 
          type="text" 
          name="screen" 
          id="screen" 
          onChange={handleChange}  
          value={value.screen} 
          className={value.screen ? '' : 'borderWarning'} />
        </label>
        <label htmlFor="processor">processor
          <input 
          type="text" 
          name="processor" 
          id="processor" 
          onChange={handleChange} 
          value={value.processor} 
          className={value.processor ? '' : 'borderWarning'}  />
        </label>
        <label htmlFor="ram">ram
          <input 
          type="number" 
          name="ram" 
          id="ram" 
          onChange={handleChange} 
          value={value.ram} 
          className={value.ram ? '' : 'borderWarning'}  />
        </label>
        <button 
        type="submit">submit</button>
        
      </form>
    </div>
    );
}
 
export default CreateProduct;