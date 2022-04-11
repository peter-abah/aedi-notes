import { useParams, useNavigate } from 'react-router-dom';
import { useTitle } from '../../hooks'
import { useNotes } from '../../contexts/NotesContext';

import Header from './Header';
import Note from '../../components/Note';
import NoteNotFound from '../../components/NoteNotFound';

const NotePage = () => {
  const navigate = useNavigate();
  const { getNote, deleteNote } = useNotes();
  const { id } = useParams() as { id: string };
  const note = getNote(id);
  
  const handleDelete = () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this note');
    if (!shouldDelete) return;

    deleteNote(id);
    navigate(-1);
  }
  
  const title = note ? note.title : 'Note not Found';
  useTitle(`Aedi | ${title}`);
  
  return (
    <main className="p-6">
      <Header note={note} handleDelete={handleDelete} />
      {note ?
        <Note note={note} /> :
        <NoteNotFound />
      }
    </main>
  )
};

export default NotePage;