import { Link } from 'react-router-dom';
import Collections from './Collections';

const SideBar = () => {
  return (
    <nav className='p-4'>
      <section className='mb-4 flex flex-col gap-2'>
        <Link to='/'>Notes</Link>
        <Link to='/notes/recent'>Recent</Link>
      </section>
      
      <Collections />
      
      <section className='mb-4 flex flex-col gap-2'>
        <Link to='/trash'>Trash</Link>
        <Link to='/settings'>Settings</Link>
      </section>
    </nav>
  )
};

export default SideBar;