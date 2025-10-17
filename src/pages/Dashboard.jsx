import { Link } from "react-router-dom"
import useStore from "../store/useStore"

export default function Dashboard() {
  const orders = useStore((state) => state.orders)
  const products = useStore((state) => state.products)

  const pendingCount = orders.filter((o) => o.status === "Pending").length
  const preparedCount = orders.filter((o) => o.status === "Prepared").length
  const deliveredCount = orders.filter((o) => o.status === "Delivered").length

  const totalRevenue = orders.filter((o) => o.status === "Delivered").reduce((sum, o) => sum + o.total, 0)

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>

      <div className="top-row">
        <div className="card">
          Total Orders
          <span>{orders.length}</span>
        </div>
        <div className="card">
          Total Products
          <span>{products.length}</span>
        </div>
        <div className="card">
          Delivered
          <span>{deliveredCount}</span>
        </div>
        <div className="card">
          Revenue
          <span>{totalRevenue.toFixed(2)} MAD</span>
        </div>
      </div>

      <div className="content-row">
        <div className="card-panel" style={{ flex: 1 }}>
          <h3>Order Status Breakdown</h3>
          <div style={{ marginTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
              <span>Pending:</span>
              <strong>{pendingCount}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
              <span>Prepared:</span>
              <strong>{preparedCount}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0" }}>
              <span>Delivered:</span>
              <strong>{deliveredCount}</strong>
            </div>
          </div>
        </div>

        <div className="card-panel" style={{ flex: 1 }}>
          <h3>Quick Actions</h3>
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <Link to="/orders" className="btn primary" style={{ textDecoration: "none", textAlign: "center" }}>
              View All Orders
            </Link>
            <Link to="/products" className="btn" style={{ textDecoration: "none", textAlign: "center" }}>
              Manage Products
            </Link>
          </div>
        </div>
      </div>

      {orders.length > 0 && (
        <div className="card-panel" style={{ marginTop: 20 }}>
          <h3>Recent Orders</h3>
          <div style={{ marginTop: 12 }}>
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} style={{ padding: "10px 0", borderBottom: "1px solid #f1f1f1" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <strong>{order.customer.name}</strong>
                    <span style={{ marginLeft: 8, fontSize: 13, color: "#7a7a7a" }}>{order.items.length} items</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ fontWeight: 700 }}>{order.total} MAD</span>
                    <Link to={`/orders/${order.id}`} className="btn" style={{ textDecoration: "none" }}>
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
