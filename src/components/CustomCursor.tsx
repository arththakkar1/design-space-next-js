"use client";
import { useEffect, useRef, useState } from "react";

export function CrosshairCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (cursor.current) {
        cursor.current.style.left = `${x}px`;
        cursor.current.style.top = `${y}px`;
      }
      const el = document.elementFromPoint(x, y);
      const isInteractive = el?.closest("a, button, [role='button']");
      setHovered(!!isInteractive);
    };

    const raf = () => {
      cx += (x - cx) * 0.1;
      cy += (y - cy) * 0.1;
      requestAnimationFrame(raf);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(raf);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursor}
      className="fixed z-9999 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{
        transition: "transform 0.3s ease",
        transform: `translate(-50%, -50%) rotate(${hovered ? "45deg" : "0deg"}) scale(${hovered ? 1.4 : 1})`,
      }}
    >
      {/* Horizontal line */}
      <div
        className="absolute top-1/2 -translate-y-1/2 bg-[#c9a96e] transition-all duration-300"
        style={{
          width: hovered ? 28 : 20,
          height: 1,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      {/* Vertical line */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bg-[#c9a96e] transition-all duration-300"
        style={{
          height: hovered ? 28 : 20,
          width: 1,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      {/* Center dot */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e] transition-all duration-300"
        style={{
          width: hovered ? 5 : 3,
          height: hovered ? 5 : 3,
        }}
      />
    </div>
  );
}
