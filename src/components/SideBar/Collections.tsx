import { useBoolean } from 'usehooks-ts'
import { useCollections } from '../../contexts/CollectionsContext';
import { Link } from 'react-router-dom';

import { MdFolder, MdCreateNewFolder } from 'react-icons/md';

const Collections = () => {
  const { value: isOpen, toggle } = useBoolean(true);
  const { collections } = useCollections();
  
  return (
    <section className='mb-6'>
      <h2 className='mb-2'>
        <button className='font-bold' onClick={toggle}>Collections</button>
      </h2>

      {isOpen && 
        <div className='flex flex-col gap-2 text-sm'>
          {collections.map(({ name, id }) => (
            <Link className='flex items-center gap-2' to={`/collections/${id}`} key={id}>
              <MdFolder /> {name}
            </Link>
          ))}

          <Link className='flex items-center gap-2' to='/collections/new'>
            <MdCreateNewFolder /> Add collection
          </Link>
        </div>
      }
    </section>
  );
};

export default Collections;