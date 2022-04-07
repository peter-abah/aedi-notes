import { MdMenu, MdSort, MdSearch } from 'react-icons/md';

const Header = () => {
  return (
    <header className="mb-4 flex justify-between">
      <button><MdMenu className='text-xl' /></button>
      <h1 className="text-xl">Home</h1>

      <div className='flex'>
        <button><MdSearch className='mr-3 text-xl' /></button>
        <button><MdSort className='text-xl' /></button>
      </div>
    </header> 
  );
};

export default Header;