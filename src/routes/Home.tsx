import { useCollections } from '../contexts/CollectionsContext'
import Notes from '../components/Notes';

const Home = () => {
  const { getNotesWithoutCollection } = useCollections();
  const notes = getNotesWithoutCollection();
  
  return (
    <main className="p-4">
      <header className="mb-4 flex justify-center">
        <h1 className="text-xl">Home</h1>
      </header>
      <Notes notes={notes} />
    </main>
  );
};

export default Home;