import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const foo = (
    <div className="m-4">
      <h1 className="text-green-700">Aedi Notes!</h1>
    </div>
  );
  
  return (
    <Routes>
      <Route path='/' element={foo} />
    </Routes>
  )
}

export default App;
