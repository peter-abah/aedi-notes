import { Link, useNavigate } from 'react-router-dom';
import { Note } from '../../contexts/NotesContext';
import { MdArrowBack, MdEdit } from 'react-icons/md';
import OptionsMenu from '../../components/OptionsMenu'

interface Props {
  note: Note;
  handleDelete: () => void;
}
const Header = ({ note, handleDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between mb-4">
      <button onClick={() => navigate(-1)}>
        <MdArrowBack className='text-xl' />
      </button>
  
      {note &&
        <div className='flex'>
          <Link className='mr-4' to={`/notes/edit/${note.id}`}>
            <MdEdit className='text-xl' />
          </Link>
    
          <OptionsMenu items={[['Delete', handleDelete]]} />
        </div>
      }
    </header>
  )
};

export default Header;