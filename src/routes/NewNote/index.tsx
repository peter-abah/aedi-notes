import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotes, Note } from '../../contexts/NotesContext';
import { useTitle } from '../../hooks';

import Header from './Header';
import NoteForm from '../../components/NoteForm';

const NewNote = () => {
  const navigate = useNavigate();
  const { createNote, emptyNote } = useNotes();
  
  // To prevent calling the function on every render since it returns a note with
  // different id and date every time it is called
  const note = useMemo(() => emptyNote(), [])

  useTitle(`Aedi | New Note`);
  
  const handleSubmit = (values: Note) => {
    createNote(values);
    navigate(`/notes/${values.id}`, { replace: true });
  };
  
  const goBack = () => {
    const shouldCancel = window.confirm('Are you sure? All changes will be lost.');
    if (!shouldCancel) return;
    navigate(-1);
  };

  return (
    <main className='min-h-screen flex flex-col p-6'>
      <Header note={note} goBack={goBack} />
      <NoteForm note={note} handleSubmit={handleSubmit} handleCancel={goBack} />
    </main>
  )
};

export default NewNote;