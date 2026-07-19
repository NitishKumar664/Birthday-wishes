import { useState } from "react";
import Particles from "./components/Particles";

import Gift from "./screens/Gift";
import Pin from "./screens/Pin";
import Message from "./screens/Message";
import Stats from "./screens/Stats";
import Memories from "./screens/Memories";
import Balloons from "./screens/Balloons";
import Puzzle from "./screens/Puzzle";
import Final from "./screens/Final";
import Letter from "./screens/Letter";

export default function App() {
  const [step, setStep] = useState(0);

  const screens = [
    <Gift next={() => setStep(1)} />,
    <Pin next={() => setStep(2)} />,
    <Message next={() => setStep(3)} />,
    <Stats next={() => setStep(4)} />,
    <Memories next={() => setStep(5)} />,
    <Balloons next={() => setStep(6)} />,
    <Puzzle next={() => setStep(7)} />,
    <Final next={() => setStep(8)} />,
    <Letter />
  ];

  return (
    <div className="h-screen flex items-center justify-center text-center px-4">
      <Particles />
      {screens[step]}
    </div>
  );
}
