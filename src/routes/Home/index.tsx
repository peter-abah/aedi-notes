import { useCollections } from '../../contexts/CollectionsContext'
import Notes from '../../components/Notes';
import Header from './Header'

const Home = () => {
  const { getNotesWithoutCollection } = useCollections();
  const notes = getNotesWithoutCollection();
  
  return (
    <main className="p-4">
      <Header />
      <Notes notes={notes} />
    </main>
  );
};

export default Home;