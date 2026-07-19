import { useState } from "react";
import TypingText from "../components/TypingText";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open ? (
        <button onClick={() => setOpen(true)}>
          ✉️ Open Letter
        </button>
      ) : (
        <div className="bg-red-900 p-4 rounded-xl max-w-md">
          <TypingText text="My dearest, you are the most special person in my life 💖 Happy Birthday!" />
        </div>
      )}
    </div>
  );
}
