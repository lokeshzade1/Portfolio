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
      <div className='w-full md:h-screen  flex justify-center items-center bg-stone-900 flex-col p-6'>
        <h1 className='text-orange-400 text-4xl font-bold'>Skills</h1>
        <div className=' w-full rounded flex  justify-center items-center mt-5'>
          <div className='flex flex-wrap gap-4 justify-evenly'>
            <div className='flex justify-center items-center flex-col gap-2'>
              <FaNodeJs className='text-green-700 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
              <h1 className=' text-orange-400 font-bold'>Node</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-24 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <BiLogoJavascript className='text-yellow-400 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded  hover:bg-white ' />
              <h1 className=' text-orange-400 font-bold'>JavaScript</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-26 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <SiTailwindcss className='text-blue-700 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded  hover:bg-white' />
              <h1 className=' text-orange-400 font-bold'>Tailwindcss</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-28 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <FaGithub className='text-black bg-white h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
              <h1 className=' text-orange-400 font-bold'>GitHub</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-24 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <SiMongodb className='text-green-700 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
              <h1 className=' text-orange-400 font-bold'>Mongodb</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-24 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <SiMongoose className='text-red-700 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
              <h1 className=' text-orange-400 font-bold'>Mongoose</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-24 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <TbBrandReactNative className='text-blue-400  h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
              <h1 className=' text-orange-400 font-bold'>React</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-24 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <TfiHtml5 className='h-40 w-40 text-yellow-400  border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
              <h1 className=' text-orange-400 font-bold'>HTML</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-24 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2'>
              <SiExpress className='h-40 w-40 text-yellow-400  border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
              <h1 className=' text-orange-400 font-bold'>Express</h1>
              <div className='flex justify-center items-center text-white font-bold gap-2'>
                <h1>0</h1>
                <div className='w-28 h-2 bg-orange-200  rounded  '>
                  <div className='w-24 h-2 bg-orange-500  rounded hover:bg-green-600 '></div>
                </div>
                <h1>100</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <BiLogoJavascript className='text-yellow-400' />
            <SiTailwindcss className='text-blue-700' />
            <FaGithub className='text-black bg-white' />
            <SiMongodb className='text-green-700' />
            <SiMongoose className='text-red-700' />
            <TbBrandReactNative className='text-blue-400' />
            <TfiHtml5 />
            <SiExpress /> */
}

export default Skill;
