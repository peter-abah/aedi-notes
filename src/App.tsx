import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProviders from './contexts';

function App() {
  const foo = (
    <div className="m-4">
      <h1 className="text-green-700">Aedi Notes!</h1>
    </div>
  );
  
  return (
    <AllProviders>
      <Routes>
        <Route path='/' element={foo} />
      </Routes>
    </AllProviders>
  )
}

export default App;
