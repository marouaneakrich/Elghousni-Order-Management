import React from "react";

function StatusBadge({ status }) {
  const colors = {
    Pending: "#ff9500ff",
    Prepared: "#00c3ffff",
    Delivered: "#00ff00ff",
  };

  return (
    <p
      style={{
        backgroundColor: colors[status],
        color: "white",
        padding: "4px 10px",
        borderRadius: "8px",
      }}
    >
      {status}
    </p>
  );
}

export default StatusBadge;
