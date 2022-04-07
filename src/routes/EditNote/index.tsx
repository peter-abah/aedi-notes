import { useParams, useNavigate } from 'react-router-dom';
import { useNotes, Note } from '../../contexts/NotesContext';
import { useTitle } from '../../hooks';

import Header from './Header';
import NoteNotFound from '../../components/NoteNotFound';
import NoteForm from '../../components/NoteForm';

const EditNote = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string };
  const { getNote, updateNote } = useNotes();
  const note = getNote(id);
  
  const title = note ? 'Edit note' : 'Note not Found';
  useTitle(`Aedi | ${title}`);
  
  const handleSubmit = (values: Note) => {
    updateNote(values);
    navigate(`/notes/${values.id}`);
  };
  
  const goBack = () => {
    const shouldCancel = window.confirm('Are you sure? All changes will be lost.');
    if (!shouldCancel) return;
    navigate(-1);
  };

  return (
    <main className='p-4'>
      <Header note={note} goBack={goBack} />
      {note?
        <NoteForm note={note} handleSubmit={handleSubmit} handleCancel={goBack} /> :
        <NoteNotFound />
      }
    </main>
  )
};

export default EditNote;