export default function Gift({ next }) {
  return (
    <div>
      <h1 className="text-3xl mb-4">A surprise awaits you ✨</h1>
      <button onClick={next} className="bg-pink-500 px-6 py-3 rounded-xl">
        🎁 Open Gift
      </button>
    </div>
  );
}
