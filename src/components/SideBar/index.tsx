import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import Collections from './Collections';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  setIsOpen: (isOpen: boolean) => void;
};

const SideBar = ({ isOpen, toggle, setIsOpen }: Props) => {
  const closeNav = () => setIsOpen(false);

  const ref = useRef(null);
  useOnClickOutside(ref, closeNav)

  return ( isOpen ?
    <div className='fixed top-0 left-0 h-screen w-screen bg-secondary/30'>
      <nav ref={ref} className='h-full w-full max-w-xs p-6 overflow-y-auto bg-secondary'>
        <div className='pb-4 flex flex-end'>
          <button onClick={closeNav}>
            <MdClose className='text-lg' />
          </button>
        </div>

        <section className='mb-6 flex flex-col gap-2'>
          <Link to='/'>Notes</Link>
          <Link to='/notes/recent'>Recent</Link>
        </section>
        
        <Collections />
        
        <section className='mb-6 flex flex-col gap-2'>
          <Link to='/trash'>Trash</Link>
          <Link to='/settings'>Settings</Link>
        </section>
      </nav>
    </div> : null
  );
};

export default SideBar;