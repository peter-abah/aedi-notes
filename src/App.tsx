import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProviders from './contexts';

import { Home } from './routes';

function App() {
  return (
    <AllProviders>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AllProviders>
  )
}

export default App;
