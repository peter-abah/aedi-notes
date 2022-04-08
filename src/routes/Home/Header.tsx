import { MdMenu, MdClose, MdSort, MdSearch } from 'react-icons/md';

interface Props {
  isNavOpen: boolean;
  toggleNav: () => void;
  setNavOpen: (value: boolean) => void;
};

const Header = ({ isNavOpen, toggleNav }: Props) => {
  return (
    <header className="mb-4 flex justify-between">
      <button onClick={toggleNav}>
        {isNavOpen ?
          <MdMenu className='text-xl' /> :
          <MdClose className='text-xl' />
        }
      </button>
      <h1 className="text-xl">Home</h1>

      <div className='flex'>
        <button><MdSearch className='mr-4 text-xl' /></button>
        <button><MdSort className='text-xl' /></button>
      </div>
    </header> 
  );
};

export default Header;