import { Link } from 'react-router-dom';
import Collections from './Collections';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

const SideBar = ({ isOpen, toggle, setIsOpen }: Props) => {
  return ( isOpen ?
    <nav className='fixed top-0 left-0 p-8 h-screen w-full max-w-xs overflow-y-auto bg-secondary'>
      <section className='mb-6 flex flex-col gap-2'>
        <Link to='/'>Notes</Link>
        <Link to='/notes/recent'>Recent</Link>
      </section>
      
      <Collections />
      
      <section className='mb-6 flex flex-col gap-2'>
        <Link to='/trash'>Trash</Link>
        <Link to='/settings'>Settings</Link>
      </section>
    </nav> : null
  );
};

export default SideBar;