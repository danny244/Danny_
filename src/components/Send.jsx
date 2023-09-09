import world from '../Flux/world.png'
import star from '../Flux/yello star.png'
import waves from '../Flux/wave2.svg'
import blue from '../Flux/blue star.png'
import purple from '../Flux/purple.png'


function Send() {

  return (

    <div className='flex justify-center items-center '>

    <div className='max-w-[1523px] m-auto xl:mt-[100px] lg:mt-[100px] md:mt-[100px]  sm:mt-[0px] p-20 font-sans grid place-items-center gap-16  xl:grid-cols-2 xl:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols- md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 '>

      <div className='before:block before:absolute before:-inset-1 before:rounded-[15px] before:bg-black relative before:left-[10px] before:top-[10px] before:w-[100%] before:xl:h-[420px] before:lg:h-[400px] before:sm:h-[430px] before:md:h-[320px] before:md:-translate-y-64 before:lg:-translate-y-0 before:xl:-translate-y-0 before:sm:-translate-y-24'>

        <div className='w-[100%] xl:h-[420px] lg:h-[400px] sm:h-[430px] sm:-translate-y-24 md:h-[320px] md:-translate-y-64 lg:-translate-y-0 xl:-translate-y-0 border-4 grid content-center relative border-black bg-white rounded-[15px] 2xl:p-[60px] xl:p-[50px] lg:p-[40px] sm:p-[31px] md:p-[50px]  md:mr-0 sm:mr-0 z-[100]'>

          <img src={purple} className='absolute w-[50px] top-[-2px] right-[-2px] translate-y-48 -translate-x-16' />

          <h1 className='xl:text-3xl sm:text-2xl text-[#ffc400] relative'>SEND <img src={star} className='w-[50px] absolute -translate-y-16 translate-x-20' /></h1>

          <h1 className='xl:text-6xl md:text-5xl sm:text-4xl font-bold xl:mb-[50px] md:mb-[40px] sm:mb-[20px] text-left'>Send cash to anyone <span className='text-[#ffc400]'>Instance.</span></h1>

          <h1 className='xl:text-2xl md:text-2xl sm:text-2xl'>Seamlessly send and receive money using mobile money, Flux wallet, or direct bank account from the US, UK, China, Japan and up to 40+ countries globally within 5 to 10 minutes.</h1>

          <img src={blue} className='w-[60px] absolute translate-y-[55%] right-[-20px] bottom-1 translate-x-4' />


        </div>

        <img src={waves} className='absolute z-0 right-[-15px] top-[21px] translate-x-12 translate-y-14 ' />

      </div>

      <img src={world} className='xl:w-[95%] sm:w-[100%] md:w-[100%] sm:order-first md:order-first lg:-order-none ' />

    </div>

  </div>

  )
}

export default Send
//Add These when done {  animate-spin-slow motion-reduce:animate-spin  }


/*  */