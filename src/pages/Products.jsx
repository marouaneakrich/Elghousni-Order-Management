import { useState } from "react"
import useStore from "../store/useStore"

export default function Products() {
  const products = useStore((state) => state.products)
  const addProduct = useStore((state) => state.addProduct)
  const updateProduct = useStore((state) => state.updateProduct)
  const deleteProduct = useStore((state) => state.deleteProduct)

  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    description: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.price || !formData.stock) {
      alert("Please fill in all required fields.")
      return
    }

    const productData = {
      name: formData.name.trim(),
      price: Number.parseFloat(formData.price),
      stock: Number.parseInt(formData.stock),
      description: formData.description.trim(),
    }

    if (isEditing) {
      updateProduct(editingId, productData)
      setIsEditing(false)
      setEditingId(null)
    } else {
      addProduct(productData)
    }

    setFormData({ name: "", price: "", stock: "", description: "" })
  }

  const handleEdit = (product) => {
    setIsEditing(true)
    setEditingId(product.id)
    setFormData({
      name: product.name,
      price: product.price.toString(),
      stock: product.stock.toString(),
      description: product.description || "",
    })
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditingId(null)
    setFormData({ name: "", price: "", stock: "", description: "" })
  }

  return (
    <div className="products-page">
      <h2>Products Management</h2>

      <div className="content-row">
        <div className="left-col">
          <div className="card-panel">
            <h3>{isEditing ? "Edit Product" : "Add New Product"}</h3>
            <form onSubmit={handleSubmit}>
              <input
                className="input"
                placeholder="Product name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                className="input"
                type="number"
                step="0.01"
                placeholder="Price (MAD) *"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
              <input
                className="input"
                type="number"
                placeholder="Stock quantity *"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
              />
              <textarea
                className="input"
                placeholder="Description (optional)"
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                style={{ resize: "vertical" }}
              />
              <div style={{ display: "flex", gap: 8 }}>
                <button type="submit" className="btn primary">
                  {isEditing ? "Update Product" : "Add Product"}
                </button>
                {isEditing && (
                  <button type="button" className="btn" onClick={handleCancel}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="right-col">
          <div className="card-panel">
            <h3>Product List ({products.length})</h3>
            {products.length === 0 ? (
              <div className="muted" style={{ marginTop: 12 }}>
                No products available.
              </div>
            ) : (
              <div style={{ marginTop: 12 }}>
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="product-row"
                    style={{ padding: "12px 0", borderBottom: "1px solid #f1f1f1" }}
                  >
                    <div style={{ flex: 1 }}>
                      <div className="prod-name">{product.name}</div>
                      <div className="prod-price">
                        {product.price} MAD • {product.stock} in stock
                      </div>
                      {product.description && (
                        <div style={{ fontSize: 13, color: "#7a7a7a", marginTop: 4 }}>{product.description}</div>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button className="btn" onClick={() => handleEdit(product)}>
                        Edit
                      </button>
                      <button className="btn danger" onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
