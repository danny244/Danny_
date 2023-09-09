import cnbc from '../Flux/cnbc.png'
import tech from '../Flux/Techcrunch.png'
import point from '../Flux/techPoint.png'
import disrupt from '../Flux/disrupt.png'

function Featured() {
  return (
    <div className='flex justify-center items-center bg-gray-100 mb-[250px]'>

      <div className='max-w-[1523px] w-[100%] h-[350px] m-auto p-20 md:p-20 sm:p-12 items-center flex flex-col relative justify-center'>

        <h1 className='xl:text-5xl lg:text-4xl sm:text-3xl xl:w-[90%] md:w-[100%] sm:w-[100%] text-[#222222] font-sans font-bold text-left xl:pb-[20px] sm:pb-[13px] '>Featured <span className='text-[#FFC400]'>in.</span></h1>

        <div className=' xl:w-[90%] md:w-full lg:w-full sm:w-full md:h-[90px] sm:h-[80px] border-[2px] relative gap-x-14  border-black rounded-3xl py-[20px] pl-8 flex md:justify-around sm:justify-between items-center overflow-x-auto overflow-y-hidden '>

          <img src={cnbc} className='md:pr-3 max-w-[80px] md:max-w-[60px] sm:w-[150px] sm:pr-10' />

          <img src={tech} className='md:pr-3 max-w-[80px] md:max-w-[60px] sm:w-[150px] sm:pr-10 ' />

          <img src={point} className='md:pr-3 w-[200px] md:max-w-[180px] sm:w-[150px] sm:pr-10' />

          <img src={disrupt} className=' max-w-[200px] md:max-w-[140px] sm:max-w-[120px] sm:pr-10' />

        </div>

      <img src='https://iflux.app/assets/static/sun_waves.2eb4759.02a49e5d9a02201477192adc0951593c.png' className='absolute xl:w-[90px] lg:w-[85px] lg:bottom-[48px] md:w-[60px] sm:w-[50px] xl:bottom-[37px] md:bottom-[69px] sm:bottom-[78px] xl:right-[9%] sm:right-[10%] md:right-[8%] lg:right-[6%] ' />
     
     </div>

    </div>
  )
}

export default Featured