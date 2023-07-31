const MiddleSection = () => {
  return (
    <>
      <div className=' w-full h-screen flex  items-center bg-stone-900 md:justify-between flex-wrap gap-0 mt-8 md:mt-0 pt-8'>
        <div className='h-60 w-60 border-[0.5px] border-red-200  shadow-md rounded-full md:ml-8 overflow-hidden  md:block m-auto min-h-36 min-w-36 hidden ring-2 ring-offset-1 ring-yellow-300'>
          <img
            src={require('./images/Snapchat-1630096252.jpg')}
            className='h-60 w-60'
          ></img>
        </div>
        <div className='text-white flex-1 mx-8'>
          <h1 className='text-6xl font-bold'>
            Hi<span className='text-2xl'>,</span>
          </h1>
          <h2 className='text-4xl font-bold'>I am lokesh</h2>
          <p>Full stack developer and React Native Developer</p>
          <div className='md:text-[9px] text-sm border-[0.5px] border-white p-2 rounded-md border-l-lime-500 border-r-emerald-400 border-t-emerald-100 border-b-gray-700 shadow shadow-gray-700 mt-2'>
            <p>
              Well organized, detail-oriented, ability to multi-task, dedicated
              hard working leader with experience and excellent knowledge of
              up-to-date web development technologies. I am willing to utilize
              my experience for your organization to achieve its goals.
            </p>
          </div>
          <div className='flex justify-center items-center md:flex md:justify-start'>
            <button className='rounded py-2 bg-orange-500 font-bold md:text-[8px] mt-2 px-2 hover:bg-green-500'>
              More About me
            </button>
            <span className='flex items-end ml-2 first-letter:bg-red-500'>
              ...
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default MiddleSection;
