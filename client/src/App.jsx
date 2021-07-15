/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.components';
import './App.css';
import { fetchAllPhoneData } from './apiService';
import Thumbnail from './components/Thumbnail/Thumbnail.component';

const App = () => {
  const [phoneData, setPhoneData] = useState([]);
  const phoneDataThumbNails = phoneData.map((data) => {
    return ( 
      <>
        <Thumbnail data={data} />
      </>
    )
  })
  useEffect(async () => {
    // call api & set data
    const phoneData = await fetchAllPhoneData();
    setPhoneData(phoneData);
  }, []);
  return (
    <div className="App">
      <Header />
      <ul className="App__thumbnail-list">
        {phoneDataThumbNails}
      </ul>
    </div>
  );
}

export default App;
