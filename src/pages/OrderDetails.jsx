import { useParams, useNavigate, Link } from "react-router-dom"
import useStore from "../store/useStore"
import StatusBadge from "../components/StatusBadge"
import toast from "react-hot-toast"
import ConfirmToast from "../components/ConfirmToast"

export default function OrderDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const order = useStore((state) => state.orders.find((o) => o.id === Number(id)))
  const changeOrderStatus = useStore((state) => state.changeOrderStatus)
  const deleteOrder = useStore((state) => state.deleteOrder)

  if (!order) {
    return (
      <div className="order-details-page">
        <div className="card-panel">
          <h3>Order Not Found</h3>
          <p>The order you're looking for doesn't exist.</p>
          <Link to="/orders" className="btn primary">
            Back to Orders
          </Link>
        </div>
      </div>
    )
  }

  const handleDelete = () => {
            toast.custom(
                  (t) => (
                        <ConfirmToast
                              toastId={t.id}
                              message="Are you sure you want to delete this order?"
                              onConfirm={() => deleteOrder(order.id)}
                              onCancel={() => toast.dismiss(t.id)}
                        />
                  ),
                  {
                        duration: Infinity,
                        position: "top-center",
                  }
            );      navigate("/orders")

      }; 
    
  

  const handleStatusChange = () => {
    changeOrderStatus(order.id)
  }

  return (
    <div className="order-details-page">
      <div style={{ marginBottom: 16 }}>
        <Link to="/orders" className="btn">
          ← Back to Orders
        </Link>
      </div>

      <div className="card-panel">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ margin: 0 }}>Order #{order.id}</h2>
          <StatusBadge status={order.status} />
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3>Customer Information</h3>
          <div style={{ marginTop: 12 }}>
            <div style={{ padding: "8px 0" }}>
              <strong>Name:</strong> {order.customer.name}
            </div>
            <div style={{ padding: "8px 0" }}>
              <strong>Phone:</strong> {order.customer.phone || "N/A"}
            </div>
            <div style={{ padding: "8px 0" }}>
              <strong>Order Date:</strong> {new Date(order.createdAt).toLocaleString()}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3>Order Items</h3>
          <table style={{ width: "100%", marginTop: 12, borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e6e6e6", textAlign: "left" }}>
                <th style={{ padding: "10px 0" }}>Product</th>
                <th style={{ padding: "10px 0" }}>Price</th>
                <th style={{ padding: "10px 0" }}>Quantity</th>
                <th style={{ padding: "10px 0", textAlign: "right" }}>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.id} style={{ borderBottom: "1px solid #f1f1f1" }}>
                  <td style={{ padding: "10px 0" }}>{item.name}</td>
                  <td style={{ padding: "10px 0" }}>{item.price} MAD</td>
                  <td style={{ padding: "10px 0" }}>× {item.qty}</td>
                  <td style={{ padding: "10px 0", textAlign: "right", fontWeight: 600 }}>{item.subtotal} MAD</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 16,
            borderTop: "2px solid #e6e6e6",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700 }}>Total: {order.total} MAD</div>
          <div style={{ display: "flex", gap: 8 }}>
            {order.status !== "Delivered" && (
              <button className="btn primary" onClick={handleStatusChange}>
                Change Status
              </button>
            )}
            <button className="btn danger" onClick={handleDelete}>
              Delete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
