import React, { useMemo } from "react";
import products from "../data/products.json";

export default function OrderSummary({ products: propProducts, quantities }) {
  const list = propProducts || products;

  const items = useMemo(
    () =>
      list
        .filter((p) => quantities[p.id] > 0)
        .map((p) => ({ ...p, qty: quantities[p.id], subtotal: p.price * (quantities[p.id] || 0) })),
    [list, quantities]
  );

  const total = items.reduce((s, it) => s + it.subtotal, 0);

  return (
    <div className="order-summary">
      <h4>Order Summary</h4>
      {items.length === 0 ? (
        <div className="muted">No items selected</div>
      ) : (
        <ul className="summary-list">
          {items.map((it) => (
            <li key={it.id}>
              {it.name} × {it.qty} = {it.subtotal} MAD
            </li>
          ))}
        </ul>
      )}
      <div className="total">Total: <strong>{total} MAD</strong></div>
    </div>
  );
}
