import React from "react";

export default function Lister({ data, children }) {
  const list = data.toString();

  return (
    <div className={children}>
      <p>
        <em>{children !== "tags" ? children : "this programme is"}:</em>
        {list}
      </p>
    </div>
  );
}
