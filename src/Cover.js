import React from "react";

export function Cover() {
  return (
    <div className="Cover">
      <img
        className="image"
        src={process.env.PUBLIC_URL + "cover.png"}
        alt="cover"
      />
    </div>
  );
}
