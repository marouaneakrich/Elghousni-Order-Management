import { create } from "zustand"
import productsData from "../data/products.json"
import { persist, createJSONStorage } from 'zustand/middleware'


const useStore = create(
  persist(
    (set) => ({
      orders: [],
      products: productsData,

      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),

      changeOrderStatus: (id) =>
        set((state) => ({
          orders: state.orders.map((order) => (order.id === id ? { ...order, status: nextStatus(order.status) } : order)),
        })),

      deleteOrder: (id) =>
        set((state) => ({
          orders: state.orders.filter((order) => order.id !== id),
        })),

      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, { ...product, id: Date.now() }],
        })),

      updateProduct: (id, updatedProduct) =>
        set((state) => ({
          products: state.products.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product)),
        })),

      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
    }),
    
    {
      name: 'EOM-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
)


const nextStatus = (status) => {
  if (status === "Pending") return "Prepared"
  if (status === "Prepared") return "Delivered"
  return "Delivered"
}

export default useStore