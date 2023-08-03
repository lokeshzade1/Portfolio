import { BsInstagram } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import { GiClover } from 'react-icons/gi';
import { PiHeartStraightFill } from 'react-icons/pi';
import { GrReactjs } from 'react-icons/gr';
import { FaTwitterSquare } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
const MiddleSection = () => {
  const date = new Date();
  console.log(date.getFullYear());
  return (
    <>
      <div className=' w-full h-screen  flex  items-center bg-stone-900 md:justify-between flex-wrap md:mt-0 md:pt-14  flex-col justify-between md:flex-row gap-40'>
        <nav className='w-full p-2  flex justify-end md:justify-between bg-stone-900 md:fixed top-0 text-white text-[10px] border-b-orange-400 border-b-[1px] shadow shadow-orange-400 md:hidden'>
          <div className='flex text-3xl justify-center items-center md:hidden'>
            <VscSettings />
          </div>
        </nav>
        <div className='h-96 w-96 border-[0.5px] border-red-200  shadow-md rounded-full md:ml-8 overflow-hidden  md:block m-auto min-h-36 min-w-36 hidden ring-2 ring-offset-1 ring-yellow-300'>
          <img
            src={require('./images/Snapchat-1630096252.jpg')}
            className='h-full w-full'
          ></img>
        </div>
        <div className='text-white flex-1 mx-8 '>
          <h1 className='text-6xl font-bold md:text-9xl'>
            Hi<span className='text-2xl'>,</span>
          </h1>
          <h2 className='text-4xl font-bold md:text-7xl'>
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
            <div className='flex justify-center items-center animate-spin-slow text-4xl md:text-6xl'>
              <GrReactjs className='text-blue-400' />
            </div>
            <div className='flex justify-center items-center text-xl'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      `Full stack developer and React Native Developer`
                    )
                    .pauseFor(2500)
                    .start()
                    .start();
                }}
              />
            </div>
          </p>

          <div className='md:text-sm text-sm border-[0.5px] border-white p-2 rounded-md border-l-lime-500 border-r-emerald-400 border-t-emerald-100 border-b-gray-700 shadow shadow-gray-700 mt-2'>
            <p>
              Well organized, detail-oriented, ability to multi-task, dedicated
              hard working leader with experience and excellent knowledge of
              up-to-date web development technologies. I am willing to utilize
              my experience for your organization to achieve its goals.
            </p>
          </div>
          <div className='flex justify-center items-center md:flex md:justify-end md:mt-3'>
            <button className='rounded py-2 bg-orange-500  md:text-xl mt-2 px-2 hover:bg-green-500 font-bold'>
              More About me
            </button>
          </div>
          <div className='md:py-2 flex md:gap-3  gap-2 md:justify-end justify-center text-3xl pt-6 md:text-4xl md:mt-4'>
            <BsInstagram />
            <ImFacebook />
            <FaGithub />
            <FaTwitterSquare />
          </div>
        </div>
        <footer className='flex w-full md:hidden'>
          <div className='w-full bg-stone-900 flex justify-center items-center md:py-0  text-xl md:text-[10px]    '>
            <h1 className='md:text-[10px] font-bold text-yellow-400  '>
              @{date.getFullYear()} Made with
            </h1>
            <PiHeartStraightFill className='text-red-500 ml-1 ' />
            <GiClover className='text-red-500 ml-1' />
          </div>
        </footer>
      </div>
    </>
  );
};
export default MiddleSection;
