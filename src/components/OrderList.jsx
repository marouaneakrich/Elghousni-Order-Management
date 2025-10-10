import React from "react";
import OrderCard from "./OrderCard";

export default function OrderList({ orders, onChangeStatus, onDelete }) {
  if (orders.length === 0) {
    return <div className="card-panel">No orders yet.</div>;
  }

  return (
    <div className="order-list">
      {orders.map((o) => (
        <OrderCard key={o.id} order={o} onChangeStatus={onChangeStatus} onDelete={onDelete} />
      ))}
    </div>
  );
}
