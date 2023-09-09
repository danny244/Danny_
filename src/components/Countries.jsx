import '../App.css'
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { HiArrowSmRight } from 'react-icons/hi'

function Countries() {
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

      <div className='max-w-[1523px] m-auto items-center flex justify-center mt-[8%] before:block before:absolute before:-inset-1 before:duration-500 before:lg:w-[300px] before:lg:h-[45px]  before:md:w-[290px] before:sm:h-[40px] before:sm:w-[250px] before:hover:scale-x-105  before:border-[2px] before:rounded-full before:m-auto before:left-[10px] before:mt-[10px] before:pb-[20px] before:bg-white before:border-[#222222] relative'>

        <button onClick={() => { toggleOverlay(); openOverlay(); }} className="active:bg-violet-700 focus:outline-none focus:border-dashed gap-x-2  duration-500  sm:w-[250px] sm:h-[40px] md:w-[290px] md:h-[40px]  lg:w-[300px] lg:h-[45px] hover:scale-x-105 p-[17px] flex justify-around cursor-pointer border-[2px] border-[#222222] rounded-full items-center relative bg-[#855aaf]">

          <div className='flex justify-center items-center'>

            <img src='https://dtnn.net/globe.png' alt="" className=' xl:w-[45px] lg:w-[43px] sm:w-[40px]' />

            <h1 className="xl:text-[10px] font-medium left-[40px] lg:text-[10px] md:text-[10px] sm:text-[8px] text-white ">Countries we support </h1>

          </div>

          <div className='flex justify-center items-center'>

            <img src="https://iflux.app/assets/static/grouped_country_flags.a58a0fd.27e06a1b8f17f99d91d86e83252acbec.svg" className=' lg:w-[65px] md:w-[55px] hidden md:flex' />

            <img src="https://iflux.app/assets/static/nigeria.a58a0fd.714d59c7ef16cd931d56548ef42243c2.svg" className=' md:hidden sm:flex w-[20px] z-30 border-[2px] rounded-full border-white translate-x-2' />

            <img src="https://iflux.app/assets/static/united_kingdom.a58a0fd.2d46c6a64461fe0b2969538359d417cc.svg" className=' md:hidden sm:flex w-[20px] z-40 border-[2px] rounded-full border-white ' />

            <h1 className='sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[21px] lg:w-[21px] lg:h-[22px] rounded-full border-[2px] border-white bg-[white] z-[50] lg:-translate-x-3 sm:-translate-x-2 text-[8px] text-center items-center text-purple-600 font-bold p-[2px] '>17+</h1>

            <h1 className='text-center  font-medium text-white '><HiArrowSmRight size={25} /></h1>

          </div>

        </button>

      </div>

      {showOverlay && <div className={` bg-black/60 backdrop-blur-xl fixed w-full h-screen top-0 left-0 cursor-pointer z-[1000]  ${showOverlay && 'slide-down '}`} onClick={() => { toggleOverlay(); closeOverlay(); }} ></div>}
{/* {` bg-black/60 backdrop-blur-xl fixed w-full h-screen  top-0 left-0 cursor-pointer z-[1000]  ${showOverlay && 'slide-down '}`} */}
      <div className={showOverlay ? 'fixed m-auto lg:w-[70%] sm:w-[90%] xl:right-[25%] lg:right-[15%] sm:right-[5%] sm:h-[90%] md:h-[90%] lg:h-[90%] xl:w-[50%]  xl:h-[90%] lg:top-[5%] top-[5%] rounded-3xl overflow-auto bg-white z-[1000] duration-[0.4s]' : 'fixed h-[30%] top-[-300%] right-[15%] w-[70%] z-[1000] bg-white duration-[0.4s]'}>

        <div className="bg-white  p-4">

          <div className='flex justify-center items-center fixed left-0 right-0 cursor-pointer'>

            <AiOutlineClose size={20} onClick={() => { toggleOverlay(); closeOverlay(); }} className='cursor-pointer text-purple-700 border border-dashed bg-gray-100 rounded-full m-2 w-8 h-8 p-1' />

          </div>

          <div className='md:p-14 sm:p-10 flex flex-col font-sans'>

            <div className='pt-[15px] flex-col'>
              <div className='w-full pb-[15px]'>
                <h1 className='text-gray-400 text-[14px] '>Austrailia</h1>
              </div>
              <div className='flex pl-[20px]'>
                <img src='https://flagcdn.com/h20/au.png' className='p-2  w-10' />
                <h1 className='text-[12px] text-black'>Austrailia</h1>
              </div>
            </div>


            <div className='pt-[15px] flex-col'>

              <div className='w-full pb-[15px]'>
                <h1 className='text-gray-400 text-[14px] '>Europe</h1>
              </div>

              <div className='pl-[20px] grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  grid-rows-1 '>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/gb.png' className='p-2  w-10' />
                  <h1 className=' text-[12px] text-black'>United Kingdom</h1>
                </div>

                <div className='flex'>
                  <img src='	https://flagcdn.com/h20/eu.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>European Union</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/ua.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>Ukraine</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/tr.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>Turkey</h1>
                </div>

              </div>

            </div>


            <div className='pt-[15px] flex-col'>

              <div className='w-full pb-[15px]'>
                <h1 className='text-gray-400 text-[14px] '>North America</h1>
              </div>

              <div className='pl-[20px] grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  grid-rows-1 '>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/ca.png' className='p-2  w-10' />
                  <h1 className='text-[12px] text-black'>Canada</h1>
                </div>

                <div className='flex'>
                  <img src='	https://flagcdn.com/h20/us.png' className='p-2 w-10' />
                  <h1 className='text-[12px] text-black'>United State Of America</h1>
                </div>

              </div>

            </div>

            <div className='pt-[15px] flex-col'>

              <div className='w-full pb-[15px]'>
                <h1 className='text-gray-400 text-[14px] '>Africa</h1>
              </div>

              <div className='pl-[20px] grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  grid-rows-1 '>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/za.png' className='p-2  w-10' />
                  <h1 className=' text-[12px] text-black'>South Africa</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/eg.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>Egypt</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/ng.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>Nigeria</h1>
                </div>

              </div>

            </div>

            <div className='pt-[15px] flex-col'>
              <div className='w-full pb-[15px]'>
                <h1 className='text-gray-400 text-[14px] '>Europe</h1>
              </div>

              <div className='pl-[20px] grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  grid-rows-1 '>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/vn.png' className='p-2  w-10' />
                  <h1 className=' text-[12px] text-black'>Vietnam</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/cn.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>China</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/hk.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>Hong kong</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/jp.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>Japan</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/mo.png' className='p-2  w-10' />
                  <h1 className=' text-[12px] text-black'>Macao</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/my.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>Maleysia</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/kr.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>South Korea</h1>
                </div>

                <div className='flex'>
                  <img src='https://flagcdn.com/h20/ae.png' className='p-2 w-10' />
                  <h1 className=' text-[12px] text-black'>United Arab Emirates</h1>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Countries;