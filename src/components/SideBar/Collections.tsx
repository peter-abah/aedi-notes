import { useBoolean } from 'usehooks-ts'
import { Link } from 'react-router-dom';
import { MdFolder, MdCreateNewFolder } from 'react-icons/md';
import { useCollections } from '../../contexts/CollectionsContext';

interface Props {
  handleClick: () => void;
  openCollectionForm: () => void;
}
const Collections = ({ handleClick, openCollectionForm }: Props) => {
  const { value: isOpen, toggle } = useBoolean(true)
  const { collections }= useCollections();

  return (
    <section className='mb-6'>
      <h2 className='mb-2'>
        <button className='font-bold' onClick={toggle}>Collections</button>
      </h2>

      {isOpen && 
        <div className='flex flex-col gap-2 text-sm'>
          {collections.map(({ name, id }) => (
            <Link
              className='flex items-center gap-2'
              onClick={handleClick}
              to={`/collections/${id}`}
              key={id}
            >
              <MdFolder /> {name}
            </Link>
          ))}

          <button onClick={openCollectionForm} className='flex items-center gap-2'>
            <MdCreateNewFolder /> Add collection
          </button>
        </div>
      }
    </section>
  );
};

export default Collections;