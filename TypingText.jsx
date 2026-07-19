import { useEffect, useState } from "react";

export default function TypingText({ text }) {
  const [out, setOut] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setOut(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, [text]);

  return <p>{out}</p>;
}
