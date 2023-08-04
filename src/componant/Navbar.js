import { useState } from 'react';
import PhoneBlock from './Phoneblock';
import { VscSettings } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
function Navbar(props) {
  const [shoNo, setShowNo] = useState(false);
  return (
    <>
      <nav className='w-full md:p-6 md:flex justify-end md:justify-between bg-stone-900 md:fixed top-0 text-white text-[10px] border-b-orange-400 border-b-[1px] shadow shadow-orange-400 hidden '>
        <div className='text-xl font-bold md:text-xl hidden md:block'>
          <h1>zadelokesh1@gmail.com</h1>
        </div>
        <div className='- from-neutral-950  justify-center items-center mr-14 hidden md:flex text-xl'>
          <ul className='flex gap-6'>
            <Link to='/Skills'>
              {' '}
              <li
                className='cursor-pointer'
                onClick={() => {
                  props.show();
                }}
              >
                Project
              </li>
            </Link>
            <Link to='/Project'>
              <li className='cursor-pointer'>Skills </li>
            </Link>
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
        <div className='flex text-3xl justify-center items-center md:hidden'>
          <VscSettings />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
