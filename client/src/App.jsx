/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.components';
import './App.css';
import { fetchAllPhoneData } from './apiService';
import Thumbnail from './components/Thumbnail/Thumbnail.component';
import Spinner from './components/Spinner/Spinner.component';
import Browser from './components/Browser/Browser.component';
import MenuModal from './components/MenuModal/MenuModal.component';
import CreateProduct from './components/CreateProduct/CreateProduct.component';
import EditProduct from './components/EditProduct/EditProduct.component';
import FavouriteList from './components/FavouriteList/FavouriteList.component';
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
  const [menuModelAnimation, setMenuModalAnimation] = useState('');
  const [isMenu, setIsMenu] = useState(false);
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
  const menuAnimation = {
    slideIn: "menuSlideIn 200ms ease-in forwards",
    slideOut: "menuSlideOut 200ms ease-in forwards"
  }
  const handleBurgerMenu = () => {
    // toggle animation
    setIsMenu(!isMenu);
    if (!menuModelAnimation) {
      setMenuModalAnimation(menuAnimation.slideIn);
    } else if (menuModelAnimation === menuAnimation.slideIn) {
      setMenuModalAnimation(menuAnimation.slideOut);
    } else {
      setMenuModalAnimation(menuAnimation.slideIn);
    }
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
        <Header handleBurgerMenu={handleBurgerMenu} isMenu={isMenu}/>
        <MenuModal menuAnimation={menuModelAnimation} handleBurgerMenu={handleBurgerMenu}/>
        <Switch>
          <Route exact path="/">
            <Browser phoneData={phoneData} phoneDataThumbNails={phoneDataThumbNails} setPhoneData={setPhoneData} />
          </Route>
          <Route exact path="/mobile/:brand/:id">
            <ProductDetail product={selectedProduct} />
          </Route>
          <Route exact path="/mobile/new">
            <CreateProduct />
          </Route>
          <Route exact path="/mobile/edit">
            <EditProduct phoneDataThumbNails={phoneDataThumbNails} />
          </Route>
          <Route exact path="/mobile/favorites">
            <FavouriteList />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
