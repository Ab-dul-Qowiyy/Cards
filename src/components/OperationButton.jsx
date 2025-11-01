import React from 'react'

const OperationButton = ({ onOperate}) => {

    const buttons = [
      { label: "Addition", color: "bg-green-500 hover:bg-green-600", op: "add" },
      { label: "Subtraction", color: "bg-green-500 hover:bg-red-600", op: "sub" },
      { label: "Multiplication", color: "bg-green-500 hover:bg-yellow-600", op: "mul" },
    ];
  return (
    <div className="flex gap-6 mt-6">
      {buttons.map(({label, color, op})=>(
        <button 
            key={op}
            onClick={() => onOperate(op)}
            className={`px-5 py-2 ${color} text-lg rounded-lg shadow-lg transition-all`}
        >
            {label}
        </button>
      )
        
    )}
    </div>
  )
}

export default OperationButton
