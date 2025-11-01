import React, { useState } from "react";
import Deck from "./components/Deck";
import Card from "./components/Card";
import { motion } from "framer-motion";
import OperationButton from "./components/OperationButton";

const suits = ["❤️", "♦️", "♣️", "♠️"];
const values = [
  { label: "A", num: 1 },
  { label: "2", num: 2 },
  { label: "3", num: 3 },
  { label: "4", num: 4 },
  { label: "5", num: 5 },
  { label: "6", num: 6 },
  { label: "7", num: 7 },
  { label: "8", num: 8 },
  { label: "9", num: 9 },
  { label: "10", num: 10 },
  { label: "J", num: 11 },
  { label: "Q", num: 12 },
  { label: "K", num: 13 },
];

const getRandomCard = () => {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.floor(Math.random() * values.length))];
  return { suit, ...value };
};

const App = () => {
  const [leftCard, setLeftCard] = useState(null);
  const [rightCard, setRightCard] = useState(null);
  const [resultCard, setResultCard] = useState(null);

  const drawLeft = () => {
    setLeftCard(getRandomCard());
    setResultCard(null);
  };
  const drawRight = () => {
    setRightCard(getRandomCard());
    setResultCard(null);
  };

  const operate = (op) => {
    if (!leftCard || !rightCard) return;
    let result = 0;
    if (op === "add") result = leftCard.num + rightCard.num;
    if (op === "sub") result = leftCard.num - rightCard.num;
    if (op === "mul") result = leftCard.num * rightCard.num;

    if (result < 1) result = 1;
    if (result > 13) result = ((result - 1) % 13) + 1;

    const value = values.find((v) => v.num === result);
    setResultCard({ suit: "⭐", ...value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-3xl font-bold mb-6"> Card Math Game</h1>
      <div className="flex  gap-10 mb-8 ">
        <Deck card={leftCard} onDraw={drawLeft} suit={suits} />
        <Deck card={rightCard} onDraw={drawRight} />
        {resultCard && (
          <motion.div
            key={resultCard.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <Card card={resultCard} isDeck={false} />
          </motion.div>
        )}
      </div>

      <OperationButton onOperate={operate} />
    </div>
  );
};

export default App;
