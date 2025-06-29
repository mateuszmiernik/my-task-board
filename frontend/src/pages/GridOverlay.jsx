import React from "react";

const columns = 12;
const gap = 32; // px
const margin = 72; // px
const containerWidth = 1280; // px

export default function GridOverlay() {
  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: `${containerWidth}px`,
        height: "100vh",
        zIndex: 9999,
        mixBlendMode: "multiply",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: margin,
          right: margin,
          height: "100%",
          display: "flex",
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: columns }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "rgba(255,0,0,0.08)",
              borderLeft: "1px solid rgba(255,0,0,0.15)",
              borderRight: "1px solid rgba(255,0,0,0.15)",
            }}
          />
        ))}
      </div>
    </div>
  );
}