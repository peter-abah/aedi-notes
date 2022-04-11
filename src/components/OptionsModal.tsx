import { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface Props {
  items: [string, () => void][];
  close: () => void;
};

const OptionsMenu = ({items, close}: Props) => {
  const ref = useRef(null);
  useOnClickOutside(ref, close);

  return (
    <div className="grid place-items-center fixed top-0 left-0 w-screen h-screen bg-secondary/50">
      <div ref={ref} className='w-72 max-w-80 bg-secondary'>
        {items.map(([name, handleClick]) => (
          <button
            className='block py-2 px-4 border-b last:border-none'
            key={name}
            onClick={handleClick}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionsMenu;