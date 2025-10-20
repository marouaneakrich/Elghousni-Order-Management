import { useState } from "react"
import toast from "react-hot-toast"
import ProductSelector from "./ProductSelector"
import OrderSummary from "./OrderSummary"
import useStore from "../store/useStore"

export default function OrderForm({ addOrder }) {
  const products = useStore((state) => state.products)

  const [customerName, setCustomerName] = useState("")
  const [phone, setPhone] = useState("")
  const [quantities, setQuantities] = useState({})

  const handleQty = (id, qty) => {
    setQuantities((prev) => {
      const next = { ...prev }
      if (qty <= 0) delete next[id]
      else next[id] = qty
      return next
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const items = products
      .filter((p) => quantities[p.id] && quantities[p.id] > 0)
      .map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        qty: quantities[p.id],
        subtotal: p.price * quantities[p.id],
      }))

    if (!customerName.trim()) {
     toast('Please enter customer name.', {
  icon: '❗',
});
      return
    }
    if (items.length === 0) {
     toast('Please add at least one product.', {
  icon: '❗',
});
      return
    }

    const total = items.reduce((s, it) => s + it.subtotal, 0)
    const order = {
      id: Date.now(),
      customer: { name: customerName.trim(), phone: phone.trim() },
      items,
      total,
      status: "Pending",
      createdAt: new Date().toISOString(),
    }

    addOrder(order)
    setCustomerName("")
    setPhone("")
    setQuantities({})
  }

  return (
    <div className="order-form card-panel">
      <h3>New Order</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          className="input"
          placeholder="Phone (optional)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <ProductSelector products={products} quantities={quantities} onQty={handleQty} />

        <OrderSummary products={products} quantities={quantities} />

        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" className="btn primary">
            Add Order
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setCustomerName("")
              setPhone("")
              setQuantities({})
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
