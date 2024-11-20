import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-4xl font-bold mb-6">Counter</h2>
      <div className="text-6xl font-bold mb-8" style={{ color: count >= 0 ? '#4CAF50' : '#f44336' }}>
        {count}
      </div>
      <div className="flex justify-center gap-4">
        <Button label="- Decrease" onClick={decrement} />
        <Button label="+ Increase" onClick={increment} />
      </div>
    </div>
  );
};

export default Counter;
