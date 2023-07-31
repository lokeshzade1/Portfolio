import { useState } from 'react';
import PhoneBlock from './Phoneblock';

function Navbar(props) {
  const [shoNo, setShowNo] = useState(false);
  return (
    <>
      <nav className='w-full p-2  flex justify-between bg-stone-900 fixed top-0 text-white text-[10px] border-b-orange-400 border-b-[1px] shadow shadow-orange-400'>
        <div className='text-sm font-bold text-[10px] '>
          <h1>zadelokesh1@gmail.com</h1>
        </div>
        <div className='- from-neutral-950 flex justify-center items-center mr-14'>
          <ul className='flex gap-6'>
            <li
              onClick={() => {
                props.show();
              }}
            >
              Skills
            </li>
            <li>Project </li>
            <li
              className='relative cursor-pointer'
              onClick={() => {
                setShowNo(!shoNo);
              }}
            >
              Phone
              {shoNo ? <PhoneBlock /> : null}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
