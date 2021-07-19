/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.components';
import './App.css';
import { fetchAllPhoneData } from './apiService';
import Thumbnail from './components/Thumbnail/Thumbnail.component';
import Spinner from './components/Spinner/Spinner.component';
import Browser from './components/Browser/Browser.component';
import MenuModal from './components/MenuModal/MenuModal.component';
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
  const [menuModel, setMenuModal] = useState('');
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
  const menuModalAnimation = {
    slideIn: "menuSlideIn 300ms ease-in forward",
    slideOut: "menuSlideOut 300ms ease-in forward"
  }
  const handleBurgerMenu = () => {
    console.log('burgermenu in APP');
  }
  useEffect(async () => {
    // call api & set data
    const phoneData = await fetchAllPhoneData();
    setTimeout(() => {
      setPhoneData(phoneData);
    }, 1000);
  }, []);
  return (
    <Router history={history}>
      <main className="App">
        <Header handleBurgerMenu={handleBurgerMenu}/>
        <Switch>
          <Route exact path="/">
            <Browser phoneData={phoneData} phoneDataThumbNails={phoneDataThumbNails} />
            <MenuModal menuAnimation={menuModel} />
          </Route>
          <Route exact path="/mobile/:brand/:id">
            <ProductDetail product={selectedProduct} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
