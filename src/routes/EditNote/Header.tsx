import { Note } from '../../contexts/NotesContext';
import { MdArrowBack, MdRemoveRedEye as MdEye, MdMoreVert } from 'react-icons/md'

interface Props {
  note: Note;
  goBack: () => void;
}
const Header = ({ note, goBack }: Props) => {
  return (
    <header className="flex justify-between mb-4">
      <button onClick={goBack}>
        <MdArrowBack className='text-xl' />
      </button>
      <h1 className="text-lg">Edit Note</h1>

      {note && (
        <div className='flex'>
          {note.format === 'md' && 
            <button><MdEye className='text-xl' /></button>
          }
    
          <button>
            <MdMoreVert className='ml-4 text-xl' />
          </button>
        </div>
       )}
    </header>
  )
};

export default Header;