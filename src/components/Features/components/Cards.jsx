import { BsArrowRight } from 'react-icons/bs'

function Cards() {
  return (
    <div className='flex justify-center items-center pb-[230px]'>

      <div className='max-w-[1523px] md:m-auto sm:mt-[60px] md:p-20'>

        <div className='w-[100%] xl:h-[600px] lg:h-[500px] md:h-[400px] md:gap-0 sm:gap-x-8 md:p-0 sm:p-4 flex flex-nowrap md:justify-center sm:justify-start items-center md:overflow-visible  sm:overflow-auto'>

        <img src='https://iflux.app/assets/img/1_mobile.0fbb0477.png' className='xl:w-[200px] lg:w-[150px] md:w-[120px] sm:w-[160px] xl:hover:-translate-y-[40px] lg:hover:-translate-y-[30px] md:hover:-translate-y-[25px] duration-500 hover:duration-300 md:-rotate-[30deg] md:translate-x-12 xl:mt-[250px] lg:mt-[195px] md:mt-[148px] md:z-[1] md:hover:z-[3] ' />
        <img src='https://iflux.app/assets/img/2_mobile.4aa57e5b.png' className='xl:w-[200px] lg:w-[150px] md:w-[120px] sm:w-[160px] xl:hover:-translate-y-[40px] lg:hover:-translate-y-[30px] md:hover:-translate-y-[25px] duration-500 hover:duration-300 md:-rotate-[16deg] md:translate-x-4  xl:mt-[90px] lg:mt-[69px] md:mt-[55px] md:z-[2] md:hover:z-[4] ' />
        <img src='https://iflux.app/assets/img/3_mobile.de75d797.png' className='xl:w-[200px] lg:w-[150px] md:w-[120px] sm:w-[160px] xl:hover:-translate-y-[30px] lg:hover:-translate-y-[20px] md:hover:-translate-y-[20px] duration-500 hover:duration-300 md:rotate-0 md:z-[3] md:hover:z-[5] ' />
        <img src='https://iflux.app/assets/img/4_mobile.e67beab2.png' className='xl:w-[200px] lg:w-[150px] md:w-[120px] sm:w-[160px] xl:hover:-translate-y-[40px] lg:hover:-translate-y-[30px] md:hover:-translate-y-[25px] duration-500 hover:duration-300 md:rotate-[16deg] md:-translate-x-4 xl:mt-[90px] lg:mt-[69px] md:mt-[55px] md:z-[4] md:hover:z-[6] ' />
        <img src='https://iflux.app/assets/img/5_mobile.378c0cf3.png' className='xl:w-[200px] lg:w-[150px] md:w-[120px] sm:w-[160px] xl:hover:-translate-y-[40px] lg:hover:-translate-y-[30px] md:hover:-translate-y-[25px] duration-500 hover:duration-300 md:rotate-[30deg] md:-translate-x-12 xl:mt-[250px] lg:mt-[195px] md:mt-[148px] md:z-[5] ' />

        </div>

        <h1 className='md:hidden sm:flex justify-center text-center items-center mt-[15px] text-2xl font-medium font-sans text-[#0C103A99]'>SCROLL TO SEE CARDS <BsArrowRight size={25} className='pl-[7px]' /> </h1>

      </div>

    </div>
  )
}

export default Cards