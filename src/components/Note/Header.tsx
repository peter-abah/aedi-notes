import { Note } from '../../contexts/NotesContext';
import Info from './Info';

const Header = ({ note }: { note: Note }) => {
  return (
    <header className='mb-3'>
      <h2 className="mb-1 text-xl font-bold">{note.title}</h2>
      <Info note={note} />
    </header>
  )
};

export default Header;