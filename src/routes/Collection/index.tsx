import { useParams } from 'react-router-dom';
import { useCollections } from '../../contexts/CollectionsContext'

import Layout, { renderHeaderArgs } from '../../components/Layout';
import Notes from '../../components/Notes';
import CollectionNotFound from '../../components/CollectionNotFound';
import Header from './Header'

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
        <Notes notes={notes} /> :
        <CollectionNotFound />
      }
    </Layout>
  );
};

export default Collection;