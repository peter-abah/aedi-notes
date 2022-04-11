import { useParams, useNavigate } from 'react-router-dom';
import { useCollections } from '../../contexts/CollectionsContext';

import Layout, { renderHeaderArgs } from '../../components/Layout';
import Notes from '../../components/Notes';
import CollectionNotFound from '../../components/CollectionNotFound';
import Header from './Header'
import NewNoteBtn from '../../components/NewNoteBtn'

const Collection = () => {
  const navigate = useNavigate();
  const { id } = useParams() as { id: string }
  const { 
    getCollectionNotes,
    getCollection,
    deleteCollection
  } = useCollections();
  const collection = id ? getCollection(id) : null;
  const notes = collection ? getCollectionNotes(id) : [];
  
  const handleDelete = () => {
    const confirmText = 'Are you sure you want to delete this collection? All notes in this collection will also be deleted'
    const shouldDelete = window.confirm(confirmText);
    if (!shouldDelete) return;

    deleteCollection(id);
    navigate(-1);
  };
 
  const renderHeader = (extraProps: renderHeaderArgs) => {
    return (
      <Header
        {...extraProps}
        collection={collection}
        handleDelete={handleDelete}
      />
    )
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