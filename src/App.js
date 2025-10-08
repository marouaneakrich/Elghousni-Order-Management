import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import logo from './logo.svg';
import './App.css';
import productsData from './data/products.json';



function App() {
const [orders, setOrders] = useState([]);

const handleAddOrder = (newOrder) => {
setOrders((prev) => [...prev, newOrder]);
};
};


export default App;