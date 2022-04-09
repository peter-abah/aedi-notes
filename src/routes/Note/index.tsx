import { useParams } from 'react-router-dom';
import { useTitle } from '../../hooks'
import { useNotes } from '../../contexts/NotesContext';

import Header from './Header';
import Note from '../../components/Note';
import NoteNotFound from '../../components/NoteNotFound';

const NotePage = () => {
  const { getNote } = useNotes();
  const { id } = useParams() as { id: string };
  const note = getNote(id);
  
  const title = note ? note.title : 'Note not Found';
  useTitle(`Aedi | ${title}`);
  
  return (
    <main className="p-6">
      <Header note={note} />
      {note ?
        <Note note={note} /> :
        <NoteNotFound />
      }
    </main>
  )
};

export default NotePage;