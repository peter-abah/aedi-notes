import React from 'react';
import NotesContextProvider from './NotesContext';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotesContextProvider>
      {children}
    </NotesContextProvider>
  )
};

export default AllProviders;