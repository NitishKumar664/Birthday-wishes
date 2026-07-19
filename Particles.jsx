import { useEffect } from "react";

export default function Particles() {
  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.createElement("div");
      el.className = "particle";
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = 3 + Math.random() * 5 + "s";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 8000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null;
}
