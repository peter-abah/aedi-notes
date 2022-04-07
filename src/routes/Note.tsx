import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks'
import { useNotes } from '../contexts/NotesContext';

import { MdArrowBack, MdEdit, MdMoreVert } from 'react-icons/md'
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
    <main className="p-4">
      <header className="flex justify-between mb-4">
        <button onClick={() => navigate(-1)}>
          <MdArrowBack className='text-xl' />
        </button>
        <div className='flex'>
          {note &&
            <Link to={`/notes/edit/${note.id}`}>
               <MdEdit className='text-xl' />
            </Link>
          }
          <button>
            <MdMoreVert className='ml-2 text-xl' />
          </button>
        </div>
      </header>
  
      {note ?
        <Note note={note} /> :
        <NoteNotFound />
      }
    </main>
  )
};

export default NotePage;