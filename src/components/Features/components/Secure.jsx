import secure from '../images/secure.png'
import star from '../images/securestar.png'
import x from '../images/securex.png'

function Secure() {
  return (
    <div className='flex justify-center items-center'>

      <div className='max-w-[1523px] sm:mt-[70px] m-auto md:p-20 sm:p-10 w-[100%] grid place-items-center  md:gap-20 md:grid-cols-2 md:grid-rows-1 sm:gap-y-4 sm:grid-rows-2 sm:grid-cols-1'>

        <img src={x} className='w-[80px] absolute xl:-translate-y-[200px] xl:-translate-x-[190px] lg:-translate-y-[170px] md:-translate-x-[120px] md:-translate-y-[150px] sm:translate-x-[90px] sm:translate-y-[40px]  ' />

        <div className='before:block before:z-[-200] before:absolute before:-inset-1 xl:before:w-[450px] xl:before:h-[350px] lg:before:h-[300px] lg:before:w-[100%] md:before:w-[95%] md:before:h-[270px] sm:before:w-[100%] sm:before:h-[230px] before:bg-[#222222] before:top-[10px] before:left-[10px] before:rounded-[15px] relative'>

          <div className='xl:w-[450px] xl:h-[350px] lg:h-[300px] lg:w-[100%] md:w-[95%] md:h-[270px] sm:w-[100%] sm:h-[230px] xl:p-12 sm:p-10 border-[2px] border-[#222222] relative rounded-[15px] z-[100] bg-[#fff] grid content-center font-sans text-[#222222] '>

            <p className='xl:text-[16px] lg:text-[15px] sm:text-[13px]  font-medium'>SAFE AND SECURE <img src={star} className='xl:w-[45px] lg:w-[40px] sm:w-[30px] absolute xl:-translate-y-[60px] lg:-translate-y-20 lg:translate-x-[140px] sm:translate-x-[120px] sm:-translate-y-12 ' /> </p>

            <h1 className="xl:text-6xl lg:text-5xl sm:text-4xl font-bold after:content-['.'] after:text-yellow-400">Make online payments the secure way</h1>

            <p className='lg:text-[16px] sm:text-[14px] font-normal mt-[12px] '>Enjoy safer payments when shopping and making subscriptions online.</p>

          </div>

        </div>

        <img src={secure} className='w-[100%] sm:order-first md:order-none ' />

      </div>

    </div>
  )
}
//sm:before:mx-[32px] md:before:mx-0
export default Secure