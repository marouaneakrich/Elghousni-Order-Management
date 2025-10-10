# 🫒 Elghousni Order Management System

A React-based order management application for the Elghousni Cooperative, a Moroccan agricultural cooperative specializing in olive oil and local products near Tangier.

## 📋 Project Overview

This is an EOM (École d'Orientation et de Métiers) project developed as part of the Web and Mobile Web Developer training program.

**Project Type:** Order Management System  
**Client:** Elghousni Cooperative  
**Technologies:** React.js, JavaScript (ES6+), CSS3  
**Tools:** GitHub Projects, Figma  

## 🎯 Problem Statement

The Elghousni Cooperative manages ~150 orders per month manually on paper, leading to:
- Calculation errors
- Lost or mixed orders
- Difficult status tracking
- No digital sales records

This application solves these problems with a digital order management system.

## ✨ Features

### Core Functionality
- ✅ Create new orders with customer information
- ✅ Product selection with quantity management
- ✅ Automatic total calculation
- ✅ Order status tracking (En attente, Préparé, Livré)
- ✅ View all orders with filters
- ✅ Update order status
- ✅ Delete orders
- ✅ Add new products dynamically

### Product Catalog
- Huile d'olive (750ml, 1L)
- Olives beldi (nature, marinées)
- Tapenade, Miel, Savon, Confiture

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/elghousni-order-management.git
cd elghousni-order-management

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── AddProductForm.jsx    # Add new products
│   ├── Dashboard.jsx         # Statistics dashboard
│   ├── OrderForm.jsx         # Create orders
│   ├── OrdersList.jsx        # Display orders
│   ├── OrderModal.jsx        # Order details
│   ├── ProductsTable.jsx     # Products table
│   └── Sidebar.jsx           # Navigation
├── data/
│   └── products.js           # Product catalog
├── App.jsx                   # Main component
├── App.css                   # Global styles
└── index.js                  # Entry point
```

## 🛠️ Technologies

- **React 19.2.0** - UI Framework
- **React Hooks** - useState for state management
- **Tailwind CSS** - Styling (via CDN)
- **JavaScript ES6+** - Programming language

## 👨‍🎓 About Elghousni Cooperative

- **Location:** Near Tangier, Morocco
- **Specialty:** Olive oil and local products
- **Members:** 45 cooperative members
- **Land:** 120 hectares of olive trees
- **Orders:** ~150 per month

## 🎨 Development Process

This project was developed using:
- **GitHub Projects** - Kanban board for task management (To Do, In Progress, Completed)
- **Figma** - UI/UX design and layout
- **Agile Methodology** - Iterative development approach

## 📝 Component Architecture

The application is organized into reusable React components:

1. **App.jsx** - Main application component
2. **OrderForm.jsx** - Form to create new orders
3. **OrdersList.jsx** - Display all orders
4. **OrderModal.jsx** - View order details
5. **AddProductForm.jsx** - Add new products
6. **ProductsTable.jsx** - View products
7. **Dashboard.jsx** - Statistics and metrics
8. **Sidebar.jsx** - Navigation menu

## 🤝 Contributing

This is an educational project. Feedback and suggestions are welcome!

## 👤 Author

**Marouane Akrich**  
EOM Student - Web and Mobile Web Developer  
Project Created: 05/10/25

## 🙏 Acknowledgments

- EOM (École d'Orientation et de Métiers)
- Elghousni Cooperative
- React.js Community

---

**Project Status:** ✅ Completed  
**Assignment:** Order Management System - Elghousni Cooperative