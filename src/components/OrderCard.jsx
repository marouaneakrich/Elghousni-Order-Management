import React from "react";
import StatusBadge from "./StatusBadge";

export default function OrderCard({ order, onChangeStatus, onDelete }) {
  return (
    <div className="order-card card-panel">
      <div className="card-head">
        <div>
          <div className="cust-name">{order.customer.name}</div>
          <div className="cust-phone">{order.customer.phone}</div>
        </div>
        <StatusBadge status={order.status} />
      </div>

      <ul className="items-list">
        {order.items.map((it) => (
          <li key={it.id}>
            {it.name} × {it.qty} — {it.subtotal} MAD
          </li>
        ))}
      </ul>

      <div className="card-foot">
        <div className="total">Total: <strong>{order.total} MAD</strong></div>
        <div className="actions">
          <button className="btn" onClick={() => onChangeStatus(order.id)}>Next Status</button>
          <button className="btn danger" onClick={() => onDelete(order.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}
