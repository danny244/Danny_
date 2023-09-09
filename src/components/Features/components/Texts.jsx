import google from '../images/google.png'
import apple from '../images/apple.png'
import pinkstar from '../images/pinkStar.png'
import bluestar from '../images/blue star.png'
import phone from '../images/phone.png'

function Texts() {
  return (
    <div className='flex justify-center items-center'>

      <div className='max-w-[1523px] m-auto xl:p-20 md:p-20 sm:p-10 mt-[100px]'>

        <div className='font-sans flex xl:w-[700px] sm:w-[100%] xl:h-[850px] relative flex-col'>

          <img src={pinkstar} className='xl:w-[56px] lg:w-[40px] sm:w-[33px] absolute xl:right-[180px] lg:right-[305px] md:right-[112px] sm:right-[32px] -translate-y-3 sm:translate-y-3 ' />

          <h1 className='lg:text-7xl md:text-6xl sm:text-5xl font-bold text-center align-text-top text-[#222222] mt-[15px] after:content-["."] after:text-[#FC6190] '>The super card for <br /> truly crossborder people</h1>

          <img src={bluestar} className='absolute lg:w-[35px] md:w-[23px] sm:w-[25px] left-[110px] xl:left-[110px] lg:left-[225px] md:left-[241px] lg:top-[110px] md:top-[76px] sm:top-[88px]' />

          <div className='flex justify-center items-center mt-[50px] lg:gap-x-[13px] sm:gap-x-[5px]  '>

            <a href='https://apps.apple.com/ng/app/flux-pay/id1534426282' target="_blank" rel="noreferrer" ><img src={apple} className='lg:w-[134px] lg:h-[45px] sm:h-[32px] sm:w-auto border-[2px] cursor-pointer border-[#ffc400] rounded-xl' /></a>

            <a  href='https://play.google.com/store/apps/details?id=com.fluxpayment&hl=en' target="_blank" rel="noreferrer" ><img src={google} className='lg:w-[134px] lg:h-[45px] sm:w-auto sm:h-[32px] border-[2px] cursor-pointer border-[#855aaf] rounded-xl' /></a>

          </div>

          <div className='flex justify-center items-center lg:mt-[120px] md:mt-[90px] sm:mt-[70px] '>

            <img src={phone} className='sm:w-[100%] flex justify-self-center items-center' />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Texts