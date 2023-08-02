import { GiClover } from 'react-icons/gi';
import { PiHeartStraightFill } from 'react-icons/pi';

function Footer() {
  const date = new Date();
  console.log(date.getFullYear());
  return (
    <>
      <footer className='flex  gap-[0.5px] w-full h-6'>
        <div className='flex-1 bg-stone-900 flex justify-center items-center py-6 md:py-0  text-xl md:text-[10px]    '>
          <h1 className='md:text-[10px] font-bold text-yellow-400  '>
            @{date.getFullYear()} Made with
          </h1>
          <PiHeartStraightFill className='text-red-500 ml-1 ' />
          <GiClover className='text-red-500 ml-1' />
        </div>
      </footer>
    </>
  );
}

export default Footer;
