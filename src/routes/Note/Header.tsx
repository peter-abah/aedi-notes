import { Link, useNavigate } from 'react-router-dom';
import { Note } from '../../contexts/NotesContext';
import { MdArrowBack, MdEdit, MdMoreVert } from 'react-icons/md'

const Header = ({ note }: { note: Note  }) => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between mb-4">
      <button onClick={() => navigate(-1)}>
        <MdArrowBack className='text-xl' />
      </button>
  
      {note &&
        <div className='flex'>
          <Link to={`/notes/edit/${note.id}`}>
            <MdEdit className='text-xl' />
          </Link>
    
          <button>
            <MdMoreVert className='ml-4 text-xl' />
          </button>
        </div>
      }
    </header>
  )
};

export default Header;