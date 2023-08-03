import { GiClover } from 'react-icons/gi';
import { PiHeartStraightFill } from 'react-icons/pi';

function Footer() {
  const date = new Date();
  console.log(date.getFullYear());
  return (
    <>
      <footer className='md:flex md:p-6 gap-[0.5px] w-full h-6 hidden  border-t-stone-600  bg-stone-900 border-[0.5px] border-stone-900 shadow'>
        <div className='flex-1 flex justify-center items-center py-6 md:py-0  text-xl md:text-lg   '>
          <h1 className='md:text-lg font-bold text-yellow-400  '>
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
