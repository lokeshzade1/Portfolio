function Footer() {
  const date = new Date();
  console.log(date.getFullYear());
  return (
    <>
      <footer className='flex  gap-[0.5px] w-full h-6 '>
        <div className='flex-1 bg-stone-900 flex justify-center items-center'>
          <h1 className=' text-[10px] font-bold text-yellow-400 '>
            {date.getFullYear()} Made with
          </h1>
        </div>

        {/* <div className='flex-1 bg-slate-800'></div>
        <div className='flex-1 bg-slate-800'></div>  */}
      </footer>
    </>
  );
}

export default Footer;
