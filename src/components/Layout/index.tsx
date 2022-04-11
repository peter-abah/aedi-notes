import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBoolean } from 'usehooks-ts';
import { useCollections, Collection } from '../../contexts/CollectionsContext';
import SideBar from '../SideBar';
import CollectionForm from '../CollectionForm';

export interface renderHeaderArgs {
  isNavOpen: boolean;
  setNavOpen: (isOpen: boolean) => void;
  toggleNav: () => void;
};

interface Props {
  renderHeader: (args: renderHeaderArgs) => ReactNode;
  children: ReactNode;
};

const Layout = ({ renderHeader, children }: Props) => {
  const navigate = useNavigate();
  const { 
    value: isNavOpen,
    setValue: setNavOpen,
    toggle: toggleNav,
  } = useBoolean(false);
  
  const { 
    value: showCollectionForm,
    toggle: toggleCollectionForm
 } = useBoolean(false);

  const { collections, emptyCollection, createCollection } = useCollections();
  const onSaveCollection = (values: Collection) => {
    createCollection(values);
    navigate(`/collections/${values.id}`)
    toggleCollectionForm();
  };
  
  const openCollectionForm = () => {
    toggleNav();
    toggleCollectionForm();
  }

  const closeCollectionForm = () => {
    const shouldClose = window.confirm('Are you sure? All changes will be lost.');
    if (!shouldClose) return;
    toggleCollectionForm();
  };

  const header = renderHeader({ isNavOpen, setNavOpen, toggleNav });

  return (
    <main className='p-6'>
      {header}

      <div className='flex'>
        <SideBar
          isOpen={isNavOpen}
          toggle={toggleNav}
          setIsOpen={setNavOpen}
          openCollectionForm={openCollectionForm}
        />
        {children}
      </div>
      
      {showCollectionForm &&
        <CollectionForm
          collection={emptyCollection()}
          handleSubmit={onSaveCollection}
          handleCancel={closeCollectionForm}
        />
      }
    </main>
  );
};

export default Layout;