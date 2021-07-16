/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.components';
import './App.css';
import { fetchAllPhoneData } from './apiService';
import Thumbnail from './components/Thumbnail/Thumbnail.component';
import Spinner from './components/Spinner/Spinner.component';
import Browser from './components/Browser/Browser.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from "history";
import ProductDetail from './components/ProductDetail/ProductDetail.component';

const App = () => {
  const [phoneData, setPhoneData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const history = createBrowserHistory();
  const phoneDataThumbNails = phoneData.map((data) => {
    const handleClick = () => {
      setSelectedProduct(data);
    }
    return (
      <Link key={data.id} onClick={handleClick} to={`/mobile/${data.manufacturer}/${data.id}`}>
        <Thumbnail data={data} />
      </Link>
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
    <main className="App">
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Browser phoneData={phoneData} phoneDataThumbNails={phoneDataThumbNails} />
          </Route>
          <Route exact path="/mobile/:brand/:id">
            <ProductDetail product={selectedProduct}/>
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
