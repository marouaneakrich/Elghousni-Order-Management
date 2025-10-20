import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import { Toaster } from "react-hot-toast"
import OrderDetails from "./pages/OrderDetails"
import Products from "./pages/Products"
import "./App.css"

export default function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />

        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
                  <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
      </div>
    </Router>
  )
}
