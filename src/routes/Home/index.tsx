import { useNotes } from '../../contexts/NotesContext'

import Layout, { renderHeaderArgs } from '../../components/Layout';
import Notes from '../../components/Notes';
import Header from './Header'

const Home = () => {
  const { notes } = useNotes();
  
  const renderHeader = (extraProps: renderHeaderArgs) => {
    return <Header {...extraProps} />
  };
  return (
    <Layout renderHeader={renderHeader}>
      <Notes notes={notes} />
    </Layout>
  );
};

export default Home;