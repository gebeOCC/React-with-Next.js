'use client';
import React, { useState } from 'react';

export default function Home() {
  const [num, setNum] = useState(0);

  const handlePlusClick = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const handleMinusClick = () => {
    setNum((prevNum) => prevNum - 1);
  };

  return (
    <div className="wrapper">
      <button onClick={handleMinusClick}>-</button>
      <span className="num">{num}</span>
      <button onClick={handlePlusClick}>+</button>
    </div>
  );
}
