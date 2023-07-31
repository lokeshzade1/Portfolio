import { useEffect } from 'react';

function Model(props) {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  });
  return (
    <>
      <div className='fixed bg-black w-full h-screen top-0  flex justify-center items-center opacity-50'></div>
      <div className=' border-[0.5px] border-red-200  rounded-md fixed top-0 w-full h-screen flex justify-center items-center'>
        <div className='h-40 w-40 border-[0.5px] border-red-200   rounded-md bg-white flex justify-center items-center'>
          {' '}
          <button
            className='px-4 rounded bg-blue-700 z-20 text-white'
            onClick={() => {
              props.show();
            }}
          >
            close
          </button>
        </div>
      </div>
    </>
  );
}

export default Model;
