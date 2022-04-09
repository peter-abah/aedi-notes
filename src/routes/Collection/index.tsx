import { useParams } from 'react-router-dom';
import { useCollections } from '../../contexts/CollectionsContext'

import Layout, { renderHeaderArgs } from '../../components/Layout';
import Notes from '../../components/Notes';
import CollectionNotFound from '../../components/CollectionNotFound';
import Header from './Header'
import NewNoteBtn from '../../components/NewNoteBtn'

const Collection = () => {
  const { id } = useParams() as { id: string }
  const { getCollectionNotes, getCollection } = useCollections();
  const collection = id ? getCollection(id) : null;
  const notes = collection ? getCollectionNotes(id) : [];
  
  const renderHeader = (extraProps: renderHeaderArgs) => {
    return <Header {...extraProps} collection={collection} />
  };
  return (
    <Layout renderHeader={renderHeader}>
      {collection ?
        <>
          <Notes notes={notes} />
          <NewNoteBtn />
        </> :
        <CollectionNotFound />
      }
    </Layout>
  );
};

export default Collection;