import monitor from '../images/monitor.png'
import star from '../images/monitorpurplestar.png'
import waves from '../images/monitorWaves.svg'

function Monitor() {
  return (
    <div className='flex justify-center items-center'>

      <div className='max-w-[1523px] m-auto md:p-20 sm:p-10 w-[100%] grid place-items-center  md:gap-20 md:grid-cols-2 md:grid-rows-1 sm:gap-y-4 sm:grid-rows-2 sm:grid-cols-1'>

        <img src={monitor} className='w-[100%] ' />

        <div className='before:block before:z-[-200] before:absolute before:-inset-1 xl:before:w-[450px] xl:before:h-[350px] lg:before:h-[300px] lg:before:w-[95%] md:before:w-[95%] md:before:h-[270px] sm:before:w-[100%] sm:before:h-[230px] before:bg-[#222222] before:top-[10px] before:left-[10px] before:rounded-[15px] relative'>

          <img src={waves} className='lg:w-[50px] sm:w-[40px] absolute right-[1px] translate-y-[130px] xl:translate-x-14 md:translate-x-6 sm:translate-x-10 z-[-100]' />

          <div className='xl:w-[450px] xl:h-[350px] lg:h-[300px] lg:w-[95%] md:w-[95%] md:h-[270px] sm:w-[100%] sm:h-[230px] xl:p-20 sm:p-10 border-[2px] border-[#222222] relative rounded-[15px] z-[100] bg-[#fff] grid content-center font-sans text-[#222222] '>

            <p className='xl:text-2xl lg:text-[15px] sm:text-[14px]  font-medium'>TRACK <img src={star} className='xl:w-[45px] lg:w-[40px] sm:w-[30px] absolute xl:-translate-y-[46px] lg:-translate-y-16 lg:translate-x-20 sm:translate-x-14 sm:-translate-y-12 ' /> </p>

            <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl font-bold after:content-['.'] after:text-purple-800">Monitor your cash flow with just a tap</h1>

            <p className='lg:text-[16px] sm:text-[14px] font-normal mt-[12px] '>Know exactly where and when your cash moves.</p>

          </div>

        </div>

      </div>

    </div>
  )
}
//sm:before:mx-[32px] md:before:mx-0
export default Monitor