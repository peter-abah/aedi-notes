import { Link } from 'react-router-dom';
import { Note } from '../../contexts/NotesContext';
import { useCollections } from '../../contexts/CollectionsContext';
import formatDate from './formatDate';

const Info = ({ note }: { note: Note }) => {
   const { getCollection } = useCollections();
   const collection = note.collection_id ? getCollection(note.collection_id) : null

  return (
    <div className='flex wrap gap-4 text-sm'>
      {collection && 
        <span>
          In: <Link to={`/collections/${collection.id}`}>{collection.name}</Link>
        </span>
      }
      <span>Format: <span>{note.format}</span></span>
      <span>Edited <span>{formatDate(note.updated_at)}</span></span>
    </div>
  );
};

export default Info;