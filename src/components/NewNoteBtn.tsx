import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';

const NewNoteBtn = () => {
  return (
    <Link
      className='fixed bottom-8 right-8 p-2 rounded-full border-2'
      to='/notes/new'
    >
      <MdEdit className='text-3xl' />
    </Link>
  )
};

export default NewNoteBtn;