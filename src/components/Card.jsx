import React from 'react'
import { motion } from 'framer-motion'

const Card = ({card, onClick, isDeck, suit}) => {
    const isRed = card && (card.suit === "❤️" || card.suit === "♦️");
    const isWhite = card && (card.suit === "♠️" || card. suit === "♣️")
  return (
    <motion.div
      whileTap={isDeck ? { scale: 0.9 } : {}}
      onClick={onClick}
      className={`w-32 h-48 ${
        isDeck
          ? "bg-gray-800 cursor-pointer border border-gray-600"
          : "bg-gradient-to-br from-yellow-400 t0-yellow-600 text-black border border-yellow-700"
      } rounded-2xl flex items-center justify-center shadow-lg`}
    >
      {card ? (
        <motion.div
          key={card.label + card.suit}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full h-full p-3 flex flex-col justify-between ${
            isRed ? "text-red-600" : "text-black"
          }  `}
        >
          <div className="text-sm font-bold">
            {card.label}
            <div>{card.suit}</div>
          </div>

          <div className="text-4xl text-center font-semibold opacity-80">
            {card.suit}
          </div>

          <div className="text-sm font-bold text-left rotate-180">
            <div>{card.label}</div>
            <div>{card.suit}</div>
          </div>
        </motion.div>
      ) : (
        isDeck && (
          <span className="text-gray-400 select-none text-lg">Draw</span>
        )
      )}
    </motion.div>
  );
}

export default Card
