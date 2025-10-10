import React, { useState, useMemo } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import FilterBar from "./components/Filterbar.jsx";
import "./App.css";
import products from "./data/products.json";


export default function App() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");

  const addOrder = (order) => {
    setOrders((prev) => [order, ...prev]);
  };

  const changeStatus = (id) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id
          ? { ...o, status: nextStatus(o.status) }
          : o
      )
    );
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const nextStatus = (status) =>
    status === "Pending" ? "Prepared" : status === "Prepared" ? "Delivered" : "Delivered";
   const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  const visibleOrders = useMemo(() => {
    if (filter === "All") return orders;
    return orders.filter((o) => o.status === filter);
  }, [orders, filter]);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">Elghousni</div>
      </aside>

      <main className="main">
        <header className="top-row">
          <div className="card">Total Orders<span>{orders.length}</span></div>
          <div className="card">Total Products<span>{products.length}</span></div>
          <div className="card">Delivered<span>{orders.filter(o => o.status === "Delivered").length}</span></div>
        </header>

        <section className="content-row">
          <div className="left-col">
            <OrderForm addOrder={addOrder} />
          </div>

          <div className="right-col">
            <FilterBar filter={filter} setFilter={setFilter} />
            <OrderList
              orders={visibleOrders}
              onChangeStatus={changeStatus}
              onDelete={deleteOrder}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
