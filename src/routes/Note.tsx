import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks'
import { useNotes } from '../contexts/NotesContext';

import Note from '../components/Note';
import NoteNotFound from '../components/NoteNotFound';

const NotePage = () => {
  const { getNote } = useNotes();
  const { id } = useParams() as { id: string };
  const note = getNote(id);
  
  const navigate = useNavigate();
  
  const title = note ? note.title : 'Note not Found';
  useTitle(`Aedi | ${title}`);
  
  return (
    <main className="p-2">
      <header className="flex justify-between mb-2">
       <button onClick={() => navigate(-1)}>Back</button>
       {note && <Link to={`/notes/edit/${note.id}`}>Edit</Link>}
      </header>
  
      {note ?
        <Note note={note} /> :
        <NoteNotFound />
      }
    </main>
  )
};

export default NotePage;