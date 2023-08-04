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
            <FaNodeJs className='text-green-700 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
            <BiLogoJavascript className='text-yellow-400 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded  hover:bg-white ' />
            <SiTailwindcss className='text-blue-700 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded  hover:bg-white' />
            <FaGithub className='text-black bg-white h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
            <SiMongodb className='text-green-700 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
            <SiMongoose className='text-red-700 h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
            <TbBrandReactNative className='text-blue-400  h-40 w-40 border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
            <TfiHtml5 className='h-40 w-40 text-yellow-400  border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
            <SiExpress className='h-40 w-40 text-yellow-400  border-[0.5px] border-orange-400 p-2 rounded hover:bg-white' />
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
