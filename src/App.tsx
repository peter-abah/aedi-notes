import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllProviders from './contexts';

import { Home, Note, EditNote, Collection } from './routes';

function App() {
  return (
    <AllProviders>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes/:id' element={<Note />} />
        <Route path='/notes/edit/:id' element={<EditNote />} />
        <Route path='/collections/:id' element={<Collection />} />
      </Routes>
    </AllProviders>
  )
}

export default App;
