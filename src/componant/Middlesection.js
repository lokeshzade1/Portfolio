import { BsInstagram } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';

import { GrReactjs } from 'react-icons/gr';
import { FaTwitterSquare } from 'react-icons/fa';
const MiddleSection = () => {
  return (
    <>
      <div className=' w-full md:h-screen  flex  items-center bg-stone-900 md:justify-between flex-wrap mt-8 md:mt-0 md:pt-14 h-[820px]'>
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
          <h2 className='text-4xl font-bold'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('I am Lokesh')
                  .pauseFor(2500)
                  .start()
                  .start();
              }}
            />
          </h2>
          {/* <p className='flex gap-1'>
            <div className='flex justify-center items-center'>
              <GrReactjs className='text-blue-400 rotate-45 duration-5000' />
            </div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Full stack developer and React Native  Developer`
                  )
                  .pauseFor(2500)
                  .start()
                  .start();
              }}
            />
          </p> */}
          <p className='flex gap-1'>
            <div className='flex justify-center items-center animate-spin-slow text-4xl md:text-xl'>
              <GrReactjs className='text-blue-400' />
            </div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`Full stack developer and React Native Developer`)
                  .pauseFor(2500)
                  .start()
                  .start();
              }}
            />
          </p>

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
          </div>
          <div className='md:py-2 flex gap-2 md:justify-end justify-center text-3xl pt-6 md:text-xl'>
            <BsInstagram />
            <ImFacebook />
            <FaGithub />
            <FaTwitterSquare />
          </div>
        </div>
      </div>
    </>
  );
};
export default MiddleSection;
