import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import logo from './logo.svg';
import './App.css';
import productsData from './data/products.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;