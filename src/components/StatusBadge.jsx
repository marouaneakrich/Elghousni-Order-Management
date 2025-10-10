import React from "react";

export default function StatusBadge({ status }) {
  const color = status === "Pending" ? "#f0ad4e" : status === "Prepared" ? "#5bc0de" : "#5cb85c";
  return (
    <span className="status-badge" style={{ backgroundColor: color }}>
      {status}
    </span>
  );
}
