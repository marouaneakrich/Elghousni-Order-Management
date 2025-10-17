import React from 'react';

export default function ProductSelector({ products, quantities, onQty }) {

  console.log('ds')
  return (
    <div className="product-selector">
      <h4>Products</h4>
      {products.map((p) => {
        const qty = quantities[p.id] || 0;
        return (
          <div className="product-row" key={p.id}>
            <div>
              <div className="prod-name">
                {p.name}{" "}
                <span className="prod-stock">({p.stock} in stock)</span>
              </div>
              <div className="prod-price">{p.price} MAD</div>
            </div>

            <input
              type="number"
              min="0"
              max={p.stock}
              className="qty-input"
              value={qty}
              onChange={(e) =>
                onQty(p.id, Math.max(0, Number(e.target.value) || 0))
              }
            />
          </div>
        );
      })}
    </div>
  );
}
