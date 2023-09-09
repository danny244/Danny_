// Menu.js
import '../App.css'
import { HiArrowSmRight } from 'react-icons/hi'
import { useState } from 'react';

function Menu() {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const openOverlay = () => {
    setShowOverlay(true);
    document.body.classList.add('no-scroll'); // Add no-scroll class to body
  };
  
  const closeOverlay = () => {
    setShowOverlay(false);
    document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
  };

  return (
    <div className="relative">
      <div className='max-w-[1523px] m-auto items-center flex justify-center mt-[8%] before:block before:absolute before:-inset-1 2xl:before:w-[33%] before:2xl:hover:w-[35%] before:duration-500 2xl:before:h-[81px] before:lg:w-[43%] before:lg:hover:w-[45%] before:md:w-[55%] before:md:hover:w-[57%] sm:before:h-[66px] sm:before:w-[81%] before:sm:hover:w-[83%] before:border before:rounded-full before:m-auto before:left-[18px] before:mt-[10px] before:pb-[20px] before:bg-white before:border-black relative'>

        <button onClick={() => {toggleOverlay(); openOverlay();}} className=" 2xl:w-[33%] 2xl:hover:w-[35%] duration-500 2xl:h-[75px] sm:w-[80%] sm:hover:w-[83%] sm:h-[65px] md:w-[55%] md:hover:w-[57%] lg:w-[43%] lg:hover:w-[45%] p-[20px] flex justify-between cursor-pointer border border-black rounded-full items-center relative bg-purple-600">

        <img src='https://dtnn.net/globe.png' width={70} alt="" />

        <h1 className="xl:text-[18px] font-bold left-[40px] lg:text-[14px] text-white  sm:mr-[10px] flex ">Countries we support </h1>

        <img src="https://iflux.app/assets/static/grouped_country_flags.a58a0fd.27e06a1b8f17f99d91d86e83252acbec.svg" width={100} className='hidden md:flex' />

        <h1 className='xl:w-[50px] xl:h-[50px] sm:w-[50px] sm:h-[50px] flex items-center rounded-full bg-white text-center ml-[10px] font-bold text-[17px] text-gray-600 '>17+ <HiArrowSmRight size={27} className='ml' /> </h1>
        
      </button>
    </div>

    {/* { showOverlay && <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={() => {toggleOverlay(); closeOverlay();}} ></div> }

   <div className={ showOverlay ? 'fixed m-auto w-[70%] h-[80%] right-[15%] top-[10%] bg-white z-10 duration-300' : 'fixed   bg-white z-10 duration-300' }>

   </div> */}
 
      {showOverlay && (
        <div onClick={() => {toggleOverlay(); closeOverlay();}} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[90%] h-[90%] p-4 rounded-lg overflow-scroll">
            <button
              onClick={() => {toggleOverlay(); closeOverlay();}} 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close Overlay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;


/*
    <div className='before:block before:absolute before:-inset-1  before:bg-black before:border-2 relative before:md:w-[310px] before:md:h-[470px] before:sm:w-[100%] before:sm:h-[330px] before:ml-[7px] pr-[10px] before:rounded-[15px] before:mt-[5px]'>

          <div className="border-4 border-black md:w-[300px] md:h-[460px] sm:w-[100%] sm:h-[320px] px-12 rounded-[15px] md:py-16 sm:py-12 bg-white flex flex-col items-left relative sm:mb-[60px] lg:mb-0  ">

            <img src={star} className='absolute w-[60px] top-[-5px] left-[-25px] -translate-y-9' />

            <div className='md:pb-[70px] sm:pb-[40px] ' id="divAngle">
              <div className="w-[170px] h-[60px] border-black border-8 rounded-xl relative bg-[#00a7ff]" id='angle'></div>
            </div>

            <h1 className="after:content-['.'] after:text-[#00a7ff] text-5xl font-bold md:pb-[30px] sm:pb-[15px]">Spend</h1>
            <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-left pb-[60px]">Create flexible virtual dollar cards to spend on your favourite websites.</h1>

          </div>

        </div>


        <div className='before:block before:absolute before:-inset-1  before:bg-black before:border-2 relative before:md:w-[310px] before:md:h-[470px] before:sm:w-[100%] before:sm:h-[330px] before:ml-[7px] pr-[10px] before:rounded-[15px] before:mt-[5px]'>

          <div className="border-4 border-black md:w-[300px] md:h-[460px] sm:w-[100%] sm:h-[320px] px-12 rounded-[15px] md:py-16 sm:py-12 bg-white flex flex-col items-left relative sm:mb-[60px] lg:mb-0  ">

            <div className='md:pb-[70px] sm:pb-[40px] ' id="divAngle">
              <div className="w-[170px] h-[60px] border-black border-8 rounded-xl relative bg-[#ffc400]" id='angle'></div>
            </div>

            <h1 className="after:content-['.'] after:text-[#ffc400] text-5xl font-bold md:pb-[30px] sm:pb-[15px]">Bank</h1>
            <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-left pb-[60px]">Enjoy unlimited transfers to local bank and other Flux users.</h1>

            <img src={purple} className='w-[60px] absolute translate-y-[55%] right-[-20px] bottom-1' />
          </div>

        </div>


        <div className='before:block before:absolute before:-inset-1  before:bg-black before:border-2 relative before:md:w-[310px] before:md:h-[470px] before:sm:w-[100%] before:sm:h-[350px] before:ml-[7px] pr-[10px] before:rounded-[15px] before:mt-[5px]'>

          <img src={card2} className='absolute w-[100px] z-[10] -translate-y-28' />

          <div className="border-4 border-black md:w-[300px] md:h-[460px] sm:w-[100%] sm:h-[340px] px-12 rounded-[15px] md:py-16 sm:py-12 bg-white flex flex-col items-left relative sm:mb-[60px] lg:mb-0 z-[100] ">

            <div className='md:pb-[70px] sm:pb-[40px] ' id="divAngle">
              <div className="w-[170px] h-[60px] border-black border-8 rounded-xl relative bg-[#855aaf]" id='angle'></div>
            </div>

            <h1 className="after:content-['.'] after:text-[#855aaf] text-5xl font-bold md:pb-[30px] sm:pb-[15px]">Invest</h1>
            <h1 className="xl:text-4xl lg:text-3xl sm:text-2xl text-left pb-[60px]">Buy 90+ cryptos, store cash in dollars or euros for a fixed duration until maturity.</h1>
            <img src={star} className='w-[60px] absolute translate-y-[55%] right-[-20px] bottom-1' />


          </div>

        </div>
*/