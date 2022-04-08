import { useBoolean } from 'usehooks-ts'
import { useCollections } from '../../contexts/CollectionsContext';
import { Link } from 'react-router-dom';

const Collections = () => {
  const { value: isOpen, toggle } = useBoolean(true);
  const { collections } = useCollections();
  
  return (
    <section>
      <h2 className='font-bold'>
        <button onClick={toggle}>Collections</button>
      </h2>

      {isOpen && 
        <div>
          {collections.map(({ name, id }) => (
            <Link to={`/collections/${id}`} key={id}>{name}</Link>
          ))}
          <Link to='/collections/new'>Add collection</Link>
        </div>
      }
    </section>
  );
};

export default Collections;