import React from 'react';
import NotesProvider from './NotesContext';
import CollectionsProvider from './CollectionsContext';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotesProvider>
      <CollectionsProvider>
        {children}
      </CollectionsProvider>
    </NotesProvider>
  )
};

export default AllProviders;