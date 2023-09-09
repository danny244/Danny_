import '../App.css'
import { useEffect, useRef } from "react";

function Banner() {
  const containerRef = useRef(null);

  function scrollToEnd() {
    containerRef.current.scrollLeft = containerRef.current.scrollWidth;
  }

  function scrollToStart() {
    containerRef.current.scrollLeft = 0;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollToEnd();
      setTimeout(scrollToStart, 1000); // Adjust the delay as needed
    }, 2000); // Adjust the interval duration as needed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='flex justify-center items-center flex-col'>

      <img src='https://iflux.app/assets/static/clover.bd68627.c5b23a6325684a55da0e467263a61aaf.png' className='sm:hidden md:flex w-[90px] bottom-0 2xl:-translate-x-[450px] xl:-translate-x-[350px] md:-translate-x-[300px] translate-y-[14px] z-[1] ' />

      <div className=' flex items-center w-full h-[130px] bg-purple-700 sm:mt-[110px] md:mt-[0px]  border-[1px] border-[#222222] font-sans font-bold z-[2] overflow-hidden'>

        <div className='flex items-center text-8xl p-8 whitespace-nowrap content' ref={containerRef}>

          <div className='w-[90%] flex justify-evenly items-center gap-6 '>
            <span className='bg-[#ffc400] w-[20px] h-[20px] rounded-full ml-8'></span>
            <h1>Cash Beyond Borders</h1>
          </div>

          <div className='w-[90%] flex justify-evenly items-center gap-6'>
            <span className='bg-[#fc6190] w-[20px] h-[20px] rounded-full ml-8'></span>
            <h1>Cash Beyond Borders</h1>
            <span className='bg-gray-300 w-[20px] h-[20px] rounded-full ml-8'></span>
          </div>

        </div>

      </div>

      <img src='https://iflux.app/assets/static/eyes.dc0cdc5.a406830a278faf6a1e4dbf4f9895ff0f.png' className='sm:hidden md:flex w-[90px] md:translate-x-[270px] xl:translate-x-[330px] 2xl:translate-x-[400px] ' />

    </div>

  )
}

export default Banner