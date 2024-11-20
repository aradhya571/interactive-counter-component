import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Counter App
        </h1>
        <Counter />
      </div>
    </div>
  );
};

export default App;