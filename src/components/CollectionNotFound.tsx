import { Link } from 'react-router-dom';

const CollectionNotFound = () => {
  return (
    <div className="p-4">
      <h1 className="mb-3 text-2xl font-bold">Collection not found.</h1>
      <p>
        Please check your url. You can try to go back home
        <Link className='underline' to="/"> Back home</Link>
      </p>
    </div>
  )
};

export default CollectionNotFound;