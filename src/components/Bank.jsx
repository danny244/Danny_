import star from '../Flux/bluestar.png'
import bank from '../Flux/bank.png'
import bubble from '../Flux/bubbles.png'
import x from '../Flux/x.png'

function Bank() {
  return (
    <div className='flex justify-center items-center'>

      <div className='max-w-[1523px] m-auto xl:mt-[170px] md:mt-[50px] lg:mt-[150px] p-20 font-sans grid place-items-center gap-16  xl:grid-cols-2 xl:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 '>

        <div className='before:block before:absolute before:-inset-1 before:rounded-[15px] before:bg-black relative before:right-[10px]  before:top-[10px] before:w-[100%] before:xl:h-[420px] before:lg:h-[400px] before:sm:h-[430px] before:md:h-[320px] before:sm:-translate-y-24 before:md:-translate-y-0 '>

          <img src={x} className='hidden md:flex absolute top-[0] xl:w-[120px] md:w-[100px] right-[15px] -translate-y-[80%] -translate-x-14' />

          <div className='w-[100%] xl:h-[420px] lg:h-[400px] sm:h-[430px] sm:-translate-y-24 md:-translate-y-0 md:h-[320px] border-4 grid content-center relative border-black bg-white rounded-[15px] 2xl:p-[60px] xl:p-[50px] lg:p-[40px] sm:p-[31px] md:p-[50px] md:mr-0 sm:mr-0 translate-x-2 z-[1]'>

            <h1 className='xl:text-2xl sm:text-2xl relative'>BANK <img src={star} className='w-[50px] absolute -translate-y-16 translate-x-20' /></h1>

            <h1 className='xl:text-6xl md:text-5xl sm:text-4xl font-bold xl:mb-[50px] md:mb-[40px] sm:mb-[20px] text-left'>Local & international <span className='text-[#00a7ff]'>money transfers.</span></h1>

            <h1 className='xl:text-2xl md:text-2xl sm:text-2xl'>Enjoy unlimited free transfers to all local banks with no account maintenance charges or hidden fees, just send money to anyone for free using Flux!.</h1>

          </div>

          <img src={bubble} className='hidden md:flex 2xl:w-[140px] xl:w-[105px] lg:w-[100px] md:w-[150px] absolute right-[21px] -translate-x-40 -translate-y-14 z-[10] ' />

        </div>

        <img src={bank} className='xl:w-[95%] sm:w-[100%] md:w-[100%] xl:pt-[0] md:pt-[0] sm:pt-[40px] sm:order-first md:order-first lg:-order-none ' />

      </div>

    </div>

  )
}


export default Bank