import { useEffect } from 'react';
import { PiHeartStraightFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';
function Drawer(props) {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  });
  return (
    <>
      <div className='fixed bg-black w-full h-screen top-0  opacity-50 md:hidden'></div>
      <div className=' absolute border-red-200  rounded-md  top-0 w-[70%] h-screen  bg-stone-900 md:hidden py-28 '>
        <div
          className='text-3xl text-white font-bold absolute top-8 right-6 cursor-pointer  '
          onClick={() => props.openDrawer()}
        >
          X
        </div>
        <div className='h-40 w-40 border-[0.5px] border-red-200  shadow-md rounded-full md:ml-8 overflow-hidden   m-auto min-h-36 min-w-36  ring-2 ring-offset-1 ring-yellow-300'>
          <img
            src={require('./images/Snapchat-1630096252.jpg')}
            className='h-full w-full'
          ></img>
        </div>
        <div className='flex justify-center items-center text-white font-bold text-2xl mt-2'>
          <h1>lokesh zade</h1>
        </div>
        <div className='text-2xl font-bold text-white w-full p-8 border-[0.5px] border-t-teal-400 border-stone-900 mt-4'>
          <ul className='flex flex-col items-center justify-center gap-6'>
            <Link to='/Skills'>
              {' '}
              <li className='animate-pulse'>Skills</li>
            </Link>
            <Link to='/Project'>
              {' '}
              <li className='animate-pulse'>Project</li>
            </Link>
            <Link to='/'>
              <li className='animate-pulse'>About</li>
            </Link>
          </ul>
        </div>
        <div className='absolute bottom-0 w-full  bg-stone-900 border-stone-900 border-t-orange-500 border-[1px] py-2'>
          <PiHeartStraightFill className='text-red-600 h-10 w-10 m-auto animate-bounce' />
        </div>
      </div>
    </>
  );
}

export default Drawer;
