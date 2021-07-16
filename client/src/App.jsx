/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.components';
import './App.css';
import { fetchAllPhoneData } from './apiService';
import Thumbnail from './components/Thumbnail/Thumbnail.component';
import Spinner from './components/Spinner/Spinner.component';

const App = () => {
  const [phoneData, setPhoneData] = useState([]);
  const phoneDataThumbNails = phoneData.map((data) => {
    return ( 
      <>
        <Thumbnail key={data.id} data={data} />
      </>
    )
  })
  useEffect(async () => {
    // call api & set data
    const phoneData = await fetchAllPhoneData();
    setTimeout(() => {
      setPhoneData(phoneData);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <Header />
      {phoneData.length === 0 ? <Spinner /> : null}
      <ul className="App__thumbnail-list">
        {phoneData.length > 0 ? phoneDataThumbNails : null}
      </ul>
    </div>
  );
}

export default App;
