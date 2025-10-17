import { useState, useMemo } from "react"
import useStore from "../store/useStore"
import OrderForm from "../components/OrderForm"
import OrderList from "../components/OrderList"
import FilterBar from "../components/Filterbar"

export default function Orders() {
  const orders = useStore((state) => state.orders)
  const changeOrderStatus = useStore((state) => state.changeOrderStatus)
  const deleteOrder = useStore((state) => state.deleteOrder)
  const addOrder = useStore((state) => state.addOrder)

  const [filter, setFilter] = useState("All")

  const visibleOrders = useMemo(() => {
    if (filter === "All") return orders
    return orders.filter((o) => o.status === filter)
  }, [orders, filter])

  return (
    <div className="orders-page">
      <h2>Orders Management</h2>

      <div className="content-row">
        <div className="left-col">
          <OrderForm addOrder={addOrder} />
        </div>

        <div className="right-col">
          <FilterBar filter={filter} setFilter={setFilter} />
          <OrderList orders={visibleOrders} onChangeStatus={changeOrderStatus} onDelete={deleteOrder} />
        </div>
      </div>
    </div>
  )
}
