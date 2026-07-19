import confetti from "canvas-confetti";

export default function Final({ next }) {
  return (
    <div>
      <h1>One Last Surprise ✨</h1>
      <button onClick={() => {
        confetti();
        next();
      }}>
        Read My Letter 💌
      </button>
    </div>
  );
}
