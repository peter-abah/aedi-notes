import { useCollections } from '../contexts/CollectionsContext'
import Notes from '../components/Notes';
import { MdMenu, MdSort, MdSearch } from 'react-icons/md'

const Home = () => {
  const { getNotesWithoutCollection } = useCollections();
  const notes = getNotesWithoutCollection();
  
  return (
    <main className="p-4">
      <header className="mb-4 flex justify-between">
        <button><MdMenu className='text-xl' /></button>
        <h1 className="text-xl">Home</h1>

        <div className='flex'>
          <button><MdSearch className='mr-3 text-xl' /></button>
          <button><MdSort className='text-xl' /></button>
        </div>
      </header>

      <Notes notes={notes} />
    </main>
  );
};

export default Home;