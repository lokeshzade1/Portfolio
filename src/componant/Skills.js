import { FaNodeJs } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiMongoose } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { TfiHtml5 } from 'react-icons/tfi';
import { SiExpress } from 'react-icons/si';

const Skill = () => {
  return (
    <>
      <div className=' w-full flex justify-center items-center text-4xl text-bold bg-stone-900 flex-col gap-3 pt-8'>
        <div>
          <h1 className='text-6xl font-bold text-orange-500'>Project</h1>
        </div>
        <div className='bg-stone-600 p-4 text-4xl text-yellow-300 font-semibold rounded flex  gap-4 flex-col w-full flex-wrap'>
          <div className='bg-black h-64  p-4 rounded flex  justify-center items-center border-[0.5px] border-orange-500 hover:bg-white hover:text-amber-800 hover:scale-105 gap-4 flex-col'>
            {' '}
            <div className='text-orange-600'>
              {' '}
              <h1>Laundary Service App </h1>
            </div>
            <div className=' md:flex  items-center'>
              <h1 className='text-xl'>Technologies used :</h1>
              <div className='flex gap-2 flex-wrap mt-2 md:mt-0'>
                <FaNodeJs className='text-green-700' />
                <BiLogoJavascript className='text-yellow-400' />
                <SiTailwindcss className='text-blue-700' />
                <FaGithub className='text-black bg-white' />
                <SiMongodb className='text-green-700' />
                <SiMongoose className='text-red-700' />
                <TbBrandReactNative className='text-blue-400' />
                <TfiHtml5 />
                <SiExpress />
              </div>
            </div>
          </div>

          <div className='bg-black h-64  p-4 rounded flex  justify-center items-center border-[0.5px] border-orange-500 hover:bg-white hover:text-amber-800 hover:scale-105 gap-4 flex-col'>
            {' '}
            <div className='text-orange-600'>
              {' '}
              <h1>Hotel booking website of swagstay </h1>
            </div>
            <div className=' md:flex  items-center'>
              <h1 className='text-xl'>Technologies used :</h1>
              <div className='flex gap-2 flex-wrap mt-2 md:mt-0'>
                <FaNodeJs className='text-green-700' />
                <BiLogoJavascript className='text-yellow-400' />
                <SiTailwindcss className='text-blue-700' />
                <FaGithub className='text-black bg-white' />
                <SiMongodb className='text-green-700' />
                <SiMongoose className='text-red-700' />
                <TbBrandReactNative className='text-blue-400' />
                <TfiHtml5 />
                <SiExpress />
              </div>
            </div>
          </div>
          <div className='bg-black h-64  p-4 rounded flex  justify-center items-center border-[0.5px] border-orange-500 hover:bg-white hover:text-amber-800 hover:scale-105 gap-4 flex-col'>
            {' '}
            <div className='text-orange-600'>
              {' '}
              <h1>React native app of User login </h1>
            </div>
            <div className=' md:flex  items-center'>
              <h1 className='text-xl'>Technologies used :</h1>
              <div className='flex gap-2 flex-wrap mt-2 md:mt-0'>
                <FaNodeJs className='text-green-700' />
                <BiLogoJavascript className='text-yellow-400' />
                <SiTailwindcss className='text-blue-700' />
                <FaGithub className='text-black bg-white' />
                <SiMongodb className='text-green-700' />
                <SiMongoose className='text-red-700' />
                <TbBrandReactNative className='text-blue-400' />
                <TfiHtml5 />
                <SiExpress />
              </div>
            </div>
          </div>
          <div className='bg-black h-64  p-4 rounded flex  justify-center items-center border-[0.5px] border-orange-500 hover:bg-white hover:text-amber-800 hover:scale-105 gap-4 flex-col'>
            {' '}
            <div className='text-orange-600'>
              {' '}
              <h1>Instaclone App </h1>
            </div>
            <div className=' md:flex  items-center'>
              <h1 className='text-xl'>Technologies used :</h1>
              <div className='flex gap-2 flex-wrap mt-2 md:mt-0'>
                <FaNodeJs className='text-green-700' />
                <BiLogoJavascript className='text-yellow-400' />
                <SiTailwindcss className='text-blue-700' />
                <FaGithub className='text-black bg-white' />
                <SiMongodb className='text-green-700' />
                <SiMongoose className='text-red-700' />
                <TbBrandReactNative className='text-blue-400' />
                <TfiHtml5 />
                <SiExpress />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
