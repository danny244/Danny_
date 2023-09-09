import star from '../Flux/dark purple.png'
import virtual from '../Flux/virtual cards.png'
import play from '../Flux/play.png'
import yellow from '../Flux/yello star.png'

function Spend() {
  return (
    <div className='flex justify-center items-center'>

      <div className='max-w-[1523px] m-auto xl:mt-[100px] md:mt-[50px] lg:mt-[100px] sm:mt-[50px] p-20 font-sans grid place-items-center gap-16 xl:grid-cols-2 xl:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 '>

      <img src={virtual} className='xl:w-[95%] sm:w-[100%] md:w-[100%] xl:pt-[0] md:pt-[0] sm:pt-[40px] ' />


      <div className='before:block before:absolute before:-inset-1 before:rounded-[15px] before:bg-black relative before:right-[10px]  before:top-[10px] before:w-[100%] before:xl:h-[420px] before:lg:h-[400px] before:sm:h-[430px] before:md:h-[320px] before:md:-translate-y-56 before:lg:-translate-y-0 before:xl:-translate-y-0 before:sm:-translate-y-24'>

          <div className='w-[100%] xl:h-[420px] lg:h-[400px] sm:h-[430px] sm:-translate-y-24  md:h-[320px] md:-translate-y-56 lg:-translate-y-0 xl:-translate-y-0 border-4 grid content-center relative border-black bg-white rounded-[15px] 2xl:p-[60px] xl:p-[50px] lg:p-[40px] sm:p-[31px] md:p-[50px] md:mr-0 sm:mr-0 translate-x-2 z-[100]'>

          <img src={play} className='sm:hidden 2xl:flex xl:flex lg:flex absolute md:flex  w-[130px] top-[-5px] left-[-25px] -translate-y-14 -translate-x-8' />

            <h1 className='xl:text-2xl sm:text-2xl text-yellow-500 relative'>SPEND <img src={star} className='w-[50px] absolute -translate-y-16 translate-x-20' /></h1>

            <h1 className='xl:text-6xl md:text-5xl sm:text-4xl font-bold xl:mb-[50px] md:mb-[40px] sm:mb-[20px] text-left'>Virtual Dollar cards to spend <span className='text-[#855aaf]'>anywhere.</span></h1>

            <h1 className='xl:text-2xl md:text-2xl sm:text-2xl'>Easily create, freeze, unfreeze, terminate Virtual Dollar Cards that can be used on your favourite websites to shop, and pay for subscriptions. Enjoy secure online payments.</h1>

            <img src={yellow} className=' hidden sm:flex w-[60px] absolute -translate-y-4 -translate-x-6 right-[-20px] bottom-1 ' />
            
          </div>

        </div>

      </div>

    </div>

  )
}


export default Spend