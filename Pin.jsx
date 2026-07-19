import { useState } from "react";

export default function Pin({ next }) {
  const [pin, setPin] = useState("");

  const add = (n) => {
    const p = pin + n;
    setPin(p);
    if (p === "1234") setTimeout(next, 500);
  };

  return (
    <div>
      <h1>Enter PIN 💖</h1>
      <div className="mb-4">{pin.replace(/./g, "•")}</div>
      <div className="grid grid-cols-3 gap-2">
        {[1,2,3,4,5,6,7,8,9,0].map(n => (
          <button key={n} onClick={() => add(n)}>{n}</button>
        ))}
      </div>
    </div>
  );
}
