import { useState } from "react";

export default function Balloons({ next }) {
  const [count, setCount] = useState(0);

  const pop = () => {
    const c = count + 1;
    setCount(c);
    if (c === 5) next();
  };

  return (
    <div>
      <h1>Pop the Wishes 🎈</h1>
      {[...Array(5)].map((_, i) => (
        <button key={i} onClick={pop}>🎈</button>
      ))}
      <p>{count}/5</p>
    </div>
  );
}
