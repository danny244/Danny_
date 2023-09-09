import background from '../images/background2.png'
import { BsCheck } from 'react-icons/bs'

function Feature() {
  return (
    <div className='flex justify-center items-center'>

      <div className='max-w-[1523px] m-auto md:p-16 sm:p-10 mt-[100px] w-[100%] flex-col font-sans '>

        <div className='flex justify-center items-center'>

          <img src={background} className="xl:w-[87%] md:w-[100%] sm:w-[100%] relative" />

        </div>

        <div className='sm:mt-[30px] lg:absolute md:absolute xl:-translate-y-[370px] lg:-translate-y-[330px] md:-translate-y-[270px] lg:h-[250px] lg:w-[620px] xl:mx-[170px] md:mx-[70px] md:text-[#fff]  sm:text-[#222222]'>

          <p className='xl:text-2xl lg:text-[14px] sm:text-[12px] font-bold '>WHAT WORKS FOR YOU</p>
          <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl md:font-extrabold sm:font-bold xl:mt-[16px] sm:mt-[13px] '>Don&apos;t want physical card? <br />Get a virtual one in minutes</h1>

          <div className='mt-[20px]  grid gap-4 lg:grid-cols-2 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:gap-x-1 md:gap-x-8 sm:grid-cols-1 sm:grid-rows-4  '>

            <span className='flex justify-start items-center gap-x-[13px]'>
              <p className='w-[18px] h-[18px] rounded-full bg-purple-600 flex justify-center border-[2px] border-black items-center '><BsCheck size={16} className='font-bold text-black' /></p>
              <p className='xl:text-2xl lg:text-[14px] sm:text-[12px] font-semibold'>Instant Top-Up</p>
            </span>

            <span className='flex justify-start items-center gap-x-[13px]'>
              <p className='w-[18px] h-[18px] rounded-full bg-[#FC6190] flex justify-center border-[2px] border-black items-center '><BsCheck size={16} className='font-bold text-black' /></p>
              <p className='xl:text-2xl lg:text-[14px] sm:text-[12px] font-semibold'>Contactless.</p>
            </span>

             <span className='flex justify-start items-center gap-x-[13px]'>
              <p className='w-[18px] h-[18px] rounded-full bg-[#ffc400] flex justify-center border-[2px] border-black items-center '><BsCheck size={16} className='font-bold text-black' /></p>
              <p className='xl:text-2xl lg:text-[14px] sm:text-[12px] font-semibold'>Create, Use, And Terminate.</p>
            </span>

            <span className='flex justify-start items-center gap-x-[13px]'>
              <p className='w-[18px] h-[18px] rounded-full bg-[#00a7ff] flex justify-center border-[2px] border-black items-center '><BsCheck size={16} className='font-bold text-black' /></p>
              <p className='xl:text-2xl lg:text-[14px] sm:text-[12px] font-semibold'>Insant Top-Up</p>
            </span>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Feature