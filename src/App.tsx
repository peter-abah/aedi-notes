import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProviders from './contexts';

import { Home, Note } from './routes';

function App() {
  return (
    <AllProviders>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes/:id' element={<Note />} />
      </Routes>
    </AllProviders>
  )
}

export default App;
