import React, { useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { useNotes, Note } from './NotesContext';

export interface Collection {
  id: string;
  title: string;
}

interface CollectionsContextInterface {
  collections: Collection[];
  getCollection: (id: string) => Collection;
  createCollection: (collection: Collection) => void;
  updateCollection: (collection: Collection) => void;
  deleteCollection: (id: string) => void;
  getCollectionNotes: (id: string) => Note[];
  getNotesWithoutCollection: () => Note[];
}

const initialCollections = [
  {
    id: '234',
    title: 'Books',
  },
  {
    id: '647288',
    title: 'JS',
  }
]

const CollectionsContext = React.createContext<CollectionsContextInterface | null>(null);

const CollectionsProvider = ({ children }: { children: React.ReactNode }) => {
  const { notes } = useNotes();
  const [collections, setCollections] = useLocalStorage<Collection[]>('collection', initialCollections);

  const getCollection = (id: string) => {
    return collections.filter((collection) => collection.id === id)[0];
  };

  const createCollection = (collection: Collection) => {
    setCollections([... collections, collection]);
  }

  const updateCollection = (collection: Collection) => {
    const filtered = collections.filter(({ id }) => collection.id === id);
    setCollections([...collections, collection]);
  };

  const deleteCollection = (id: string) => {
    const filtered = collections.filter((collection) => collection.id === id);
    setCollections(collections);
  };
  
  const getCollectionNotes = (id: string) => {
    return notes.filter((note) => note.collection_id === id)
  };
  
  const getNotesWithoutCollection = () => {
    return notes.filter((note) => !note.collection_id)
  }

  const providerValue = {
    collections,
    getCollection,
    createCollection,
    updateCollection,
    deleteCollection,
    getCollectionNotes,
    getNotesWithoutCollection
  };

  return (
    <CollectionsContext.Provider value={providerValue}>{children}</CollectionsContext.Provider>
  );
};

export const useCollections = () => { 
  return useContext(CollectionsContext) as CollectionsContextInterface;
};

export default CollectionsProvider;
