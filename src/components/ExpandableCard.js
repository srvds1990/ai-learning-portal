import React, { useState } from "react";

function ExpandableCard({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="card">
      <div className="card-header" onClick={() => setExpanded(!expanded)}>
        <h3>{title}</h3>
        <button className="toggle-btn">{expanded ? "−" : "+"}</button>
      </div>
      {expanded && <div className="card-body">{children}</div>}
    </div>
  );
}

export default ExpandableCard;