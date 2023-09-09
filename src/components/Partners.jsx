import simplex from '../Flux/simplex.png'
import Hustle from '../Flux/hustle fund.png'
import y from '../Flux/y combinator.png'
import swap from '../Flux/swap monkey.png'

function Partners() {
  return (
    <div className='max-w-[1523px] m-auto items-center flex flex-col  justify-center md:mt-[90px] mb-[60px] sm:mt-[70px] p-20'>

      <div className=' xl:w-[90%] md:w-full lg:w-full sm:w-full md:h-[90px] sm:h-[80px] border-[2px] border-black rounded-3xl py-[30px] px-6 flex md:justify-around sm:justify-between items-center overflow-x-auto overflow-y-hidden relative'>

        <img src={simplex}  className='md:pr-10 w-[200px] sm:w-[150px] sm:pr-10 ' />

        <img src={Hustle}  className='md:pr-10 w-[200px] sm:w-[150px] sm:pr-10 ' />

        <img src={y} className='md:pr-10 w-[200px] sm:w-[150px] sm:pr-10' />

        <img src={swap}  className=' w-[200px] sm:w-[150px]' />

      </div>

      <p className='h-[10px] rounded-b-2xl md:w-[35%] sm:w-[40%] items-center bg-[#FC619080] border-[2px] border-black mt-[0px] '></p>

      <img src='https://iflux.app/assets/static/eyes.dc0cdc5.a406830a278faf6a1e4dbf4f9895ff0f.png' className='sm:hidden md:flex md:translate-x-[280px] xl:flex lg:flex xl:w-[80px] md:w-[65px] 2xl:translate-x-[550px] xl:translate-x-[450px] lg:translate-x-[400px] -translate-y-4' />

    </div>
  )
}

export default Partners