import { ReactNode } from 'react';
import { useBoolean } from 'usehooks-ts';
import SideBar from '../SideBar';

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
  const { 
    value: isNavOpen,
    setValue: setNavOpen,
    toggle: toggleNav,
  } = useBoolean(false);
  const header = renderHeader({ isNavOpen, setNavOpen, toggleNav });

  return (
    <main className='p-4'>
      {header}

      <div className='flex'>
        <SideBar isOpen={isNavOpen} toggle={toggleNav} setIsOpen={setNavOpen} />
        {children}
      </div>
    </main>
  );
};

export default Layout;