import React from "react";

export default function FilterBar({ filter, setFilter }) {
  const options = ["All", "Pending", "Prepared", "Delivered"];
  return (
    <div className="filterbar card-panel">
      {options.map((opt) => (
        <button
          key={opt}
          className={`btn ${filter === opt ? "active" : ""}`}
          onClick={() => setFilter(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
