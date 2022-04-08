import { Collection } from '../../contexts/CollectionsContext'
import { MdMenu, MdClose, MdMoreVert, MdSearch } from 'react-icons/md';

interface Props {
  isNavOpen: boolean;
  toggleNav: () => void;
  setNavOpen: (value: boolean) => void;
  collection: Collection | null;
};

const Header = ({ isNavOpen, toggleNav, collection }: Props) => {
  return (
    <header className="mb-4 flex justify-between">
      <button onClick={toggleNav}>
        {isNavOpen ?
          <MdClose className='text-xl' /> :
          <MdMenu className='text-xl' />
        }
      </button>
      {collection ?
        <>
          <h1 className="text-lg">{collection.name}</h1>
    
          <div className='flex'>
            <button><MdSearch className='mr-4 text-xl' /></button>
            <button><MdMoreVert className='text-xl' /></button>
          </div>
        </>: null
      }
    </header> 
  );
};

export default Header;