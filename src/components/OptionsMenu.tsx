import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";

import { MdMoreVert } from 'react-icons/md'

interface Props {
  items: [string, () => void][];
};

const OptionsMenu = ({items}: Props) => {
  const menuBtn = (
    <button><MdMoreVert className='text-xl' /></button>
  )
  return (
    <Menu className='bg-secondary text-primary' menuButton={menuBtn}>
      {items.map(([name, handleClick]) => (
        <MenuItem className='text-sm bg-secondary text-primary' key={name} onClick={handleClick}>
          {name}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default OptionsMenu;