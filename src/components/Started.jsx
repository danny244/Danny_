import globe from '../Flux/globe.png'
import apple from '../Flux/apple.png'
import google from '../Flux/google.png'
import waves from '../Flux/startWaves.png'
import heart from '../Flux/heart.png'
import stand from '../Flux/stand.png'

function Started() {
  return (
    <div className='before:block before:absolute before:-inset-1 before:bg-white z-20 relative xl:before:h-[500px] lg:before:h-[500px] before:w-full py-[50px] 2xl:-translate-y-0 xl:-translate-y-2  lg:-translate-y-0 md:-translate-y-[60px]  '>

      <div className='flex justify-center items-center bg-[url("https://iflux.app/assets/img/background.5ff06ebf.jpg")] bg-cover bg-center relative '>

        <div className='max-w-[1523px] m-auto w-[100%]  p-20 xl:h-[400px] lg:h-[400px] md:h-[1000px] sm:h-[750px] text-[#FFFFFF] grid xl:gap-[20%] place-items-center  xl:grid-cols-2 xl:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-1 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-2  relative'>

          <img src={waves} className='sm:hidden md:flex absolute w-[75px] left-[100px] top-0 -translate-y-20' />

          <div className='xl:w-[400px] lg:w-[75%] md:w-[55%] sm:w-[100%] '>

            <h1 className="mb-[10px] font-bold">GET STARTED</h1>

            <h1 className='xl:text-6xl md:text-5xl sm:text-4xl font-bold mb-[20px] '>Download the Flux App today!</h1>

            <h1 className='xl:text-2xl lg:text-[16px] sm:text-[16px] '>Find out what Financial Freedom looks like</h1>

            <div className='flex xl:justify-around sm:justify-start w-[300px] mt-[30px]'>

              <a href='https://apps.apple.com/ng/app/flux-pay/id1534426282' target="_blank" rel="noreferrer" ><img src={apple} className='xl:w-[130px] lg:h-[45px] sm:h-[32px] lg:w-[130px] md:w-[100px] sm:w-[95px] border border-[#ffc400] rounded-[8px] cursor-pointer sm:mr-[10px]' /></a>

              <a href='https://play.google.com/store/apps/details?id=com.fluxpayment&hl=en' target="_blank" rel="noreferrer" ><img src={google} className='xl:w-[130px] lg:h-[45px] sm:h-[32px] lg:w-[130px] md:w-[100px] sm:w-[95px] border border-[#855aaf] rounded-[8px] cursor-pointer' /></a>

            </div>

          </div>

          <img src={heart} className='sm:hidden md:flex w-[85px] absolute xl:right-[250px] md:right-[1px] top-[0] -translate-y-14 -translate-x-60' />

          <img src={globe} className='xl:w-[70%] lg:w-[60%] md:w-[55%] sm:w-[90%] relative sm:order-first md:order-first lg:-order-none' />

        </div>

      </div>

      <div className='flex justify-center items-center sm:hidden md:flex'>

        <img src={stand} className='xl:w-[135px] lg:w-[120px] md:w-[115px]  relative ' />

      </div>

    </div>

  )
}

export default Started