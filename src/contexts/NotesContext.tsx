import React, { useContext } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export interface Note {
  id: string;
  title: string;
  body: string;
  collection_id?: string;
  format: string;
  updated_at: string;
}

interface NotesContextInterface {
  notes: Note[];
  getNote: (id: string) => Note;
  newNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  deleteNote: (id: string) => void;
}

const initialNotes = [
  {
    id: 'first',
    title: 'First Note',
    body: 'The you are right I don know what',
    format: 'txt',
    updated_at: new Date().toISOString(),
  },
  {
    id: '647288',
    title: 'Eloquent',
    body: 'The you are right I don know what code is using bcrypt package is in the person shoes 👟 to be careful with the person who he is y to get into an opinion you are trying to persuade him to see 🙈 and make you feel you need and your mom are doing good points and make it genuine and your mom to get a job to do with you about it all night I love to feel important and make it hard to convince me to come over to get the person who has the person who has a conversation with me obviouslyfake@fake.com and I would love to feel important and make it hard to breathe in return for when they are doing well and I know what they want to do with you and he is using it if there is using HD HD HD HDD to get hid it hard hid the 🏡 to hide and your family and appreciated hard h I hudujdud behind hshushd hhh aloud bookbag bduixm to get the person shoes 👟 everything I genuiney',
    format: 'txt',
    updated_at: new Date().toISOString(),
  }
]

const NotesContext = React.createContext<NotesContextInterface | null>(null);

const NotesProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', initialNotes);

  const getNote = (id: string) => notes.filter((note) => note.id === id)[0];

  const newNote = (note: Note) => setNotes([...notes, note]);

  const updateNote = (note: Note) => {
    const filtered = notes.filter(({ id }) => note.id === id);
    setNotes([...filtered, note]);
  };

  const deleteNote = (id: string) => {
    const filtered = notes.filter((note) => note.id === id);
    setNotes(filtered);
  };

  const providerValue = { notes, getNote, newNote, updateNote, deleteNote };

  return (
    <NotesContext.Provider value={providerValue}>{children}</NotesContext.Provider>
  );
};

export const useNotes = () => { 
  return useContext(NotesContext) as NotesContextInterface;
};

export default NotesProvider;
