import logo from '../Flux/download.png'
import linkedin from '../Flux/linkedin.png'
import twitter from '../Flux/twitter.png'
import instagram from '../Flux/instagram.png'
import { BsArrowRightShort } from 'react-icons/bs'
import { useState } from "react"
import '../App.css'
import ContactUs from './ContactUs'
import { Link } from "react-router-dom"

function Footer() {

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const openOverlay = () => {
    setShowOverlay(true);
    document.body.classList.add('no-scroll'); // Add no-scroll class to body
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    document.body.classList.remove('no-scroll'); // Remove no-scroll class from body
  };

  return (

    <div className=' flex justify-center items-center bg-[url("https://iflux.app/assets/img/background.5ff06ebf.jpg")] bg-cover bg-center relative '>

      <div className='max-w-[1523px] m-auto w-[100%] md:px-20 sm:px-12 py-10 md:h-[300px] sm:h-[480px] font-sans '>

        <div className='md:flex md:justify-between w-[100%] md:h-[170px] sm:h-[360px] '>

          <div className='flex-col xl:w-[350px] lg:w-[270px] md:w-[220px] md:h-[170px]'>

            <Link to="/" className='flex rounded-full w-[75px] h-[45px] py-[8px] text-[#fff] justify-center cursor-pointer relative '>
              <img className='image pr-1 relative' src={logo} width='30' height='30' />
              <p className='cursor-pointer text-3xl font-bold text-center pb-5 relative'> flux</p>
            </Link>

            <p className='text-[#fff] pl-1px] xl:text-[13px] lg:text-[11px] md:text-[10px] sm:text-[9px] font-semibold'>We provide you with the options you deserve. We are unmatched, we make you Champion of your money.</p>
            <h1 className='text-[#fff] pl-[0px] xl:text-[16px] lg:text-[14px] md:text-[13px] sm:text-[11px] font-bold pt-[15px]'>Cash Beyond Borders</h1>

          </div>


          <div className='flex-col md:h-[170px] lg:w-[160px] md:w-[120px] md:pt-4 sm:pt-[25px] '>

            <button className='flex gap-x-[15px] items-center w-[125px] mb-[15px] About'>
              <p className='xl:w-[25px] xl:h-[25px] lg:h-[22px] lg:w-[22px] md:w-[20px] md:h-[20px] sm:w-[17px] sm:h-[17px] bg-[#fff] rounded-full lg:border-[2px] md:border-[1px] sm:border-[1px] border-black flex justify-center items-center  '><BsArrowRightShort size={20} className='icon' /></p>
              <h2 className='xl:text-2xl lg:text-[16px] md:text-[14px] sm:text-[12px] text-[#fff] font-bold  '>About Us</h2>
            </button>

            <Link to='card' className='flex gap-x-[15px] items-center w-[130px] mb-[15px] About'>
              <p className='xl:w-[25px] xl:h-[25px] lg:h-[22px] lg:w-[22px] md:w-[20px] sm:w-[17px] sm:h-[17px] md:h-[20px] bg-[#fff] rounded-full lg:border-[2px] md:border-[1px] sm:border-[1px] border-black flex justify-center items-center '><BsArrowRightShort size={20} className='icon' /></p>
              <h2 className='xl:text-2xl lg:text-[16px] md:text-[14px] text-[#fff] sm:text-[12px] font-bold '>Flux Cards</h2>
            </Link>

            <button onClick={() => { toggleOverlay(); openOverlay(); }} className='flex gap-x-[15px] items-center w-[150px] mb-[15px] About'>
              <p className='xl:w-[25px] xl:h-[25px] lg:h-[22px] lg:w-[22px] md:w-[20px] sm:w-[17px] sm:h-[17px] md:h-[20px] bg-[#fff] rounded-full lg:border-[2px] md:border-[1px] sm:border-[1px] border-black flex justify-center items-center '><BsArrowRightShort size={20} className='icon' /></p>
              <h2 className='xl:text-2xl lg:text-[16px] md:text-[14px] text-[#fff] sm:text-[12px] font-bold  '>Contact Us</h2>
            </button>

          </div>

          {showOverlay && <div className={` bg-[#FFFFFFE6] backdrop-blur-xl  fixed w-full h-screen top-0 left-0 right-0 cursor-pointer z-[1000]  ${showOverlay && 'slide-down '}`} onClick={() => { toggleOverlay(); closeOverlay(); }} ></div>}
          <div className={showOverlay ? 'fixed z-[1000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-[0.4s]' : ' top-[-200%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  fixed z-[1000] duration-[0.4s] '}>
            <ContactUs onClick={() => { toggleOverlay(); closeOverlay(); }} />
          </div>

          <div className='md:h-[170px] xl:w-[260px] lg:w-[220px] md:w-[180px] md:pt-4 sm:pt-[13px]'>
            <p className='text-[#fff] xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[14px] font-bold'>Locations</p>
            <span className='flex pt-[12px] gap-x-[13px] items-center'>
              <img src='https://flagcdn.com/h40/us.png' className='xl:w-[25px] xl:h-[25px] lg:w-[23px] lg:h-[23px] md:w-[20px] md:h-[20px] sm:w-[20px] sm:h-[20px] rounded-full border-[1px] border-purple-600' />
              <p className='text-[#fff] xl:text-[13px] lg:text-[11px] md:text-[10px] sm:text-[9px] font-semibold'>30 North Gould Street Sheridan.</p>
            </span>
          </div>

          <div className='md:flex-col md:h-[170px] md:w-[30px] md:pt-4 flex sm:w-[100%] sm:pt-[20px] sm:gap-x-[30px] '>

            <a href='https://www.linkedin.com/company/iflux-pay/' target="_blank" rel="noreferrer" className='xl:w-[38px] xl:h-[38px] lg:h-[34px] lg:w-[34px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px]  transition ease-in-out delay-150 duration-300 hover:bg-yellow-500 hover:scale-110 mb-[15px] bg-[#fff] rounded-full border-[2px] border-black cursor-pointer flex justify-center items-center '>
              <img src={linkedin} className='xl:w-[20px] lg:w-[18px] md:w-[16px] sm:w-[14px] cursor-pointer' />
            </a>

            <a href='https://twitter.com/ifluxdotapp?lang=en' target="_blank" rel="noreferrer" className='xl:w-[38px] xl:h-[38px] lg:h-[34px] lg:w-[34px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px] transition ease-in-out delay-150 duration-300 hover:bg-[#DF00FF] hover:scale-110 mb-[15px] bg-[#fff] rounded-full border-[2px] border-black cursor-pointer flex justify-center items-center '>
              <img src={twitter} className='xl:w-[20px] lg:w-[18px] md:w-[16px] sm:w-[14px] cursor-pointer' />
            </a>

            <a href='https://www.instagram.com/ifluxdotapp/' target="_blank" rel="noreferrer" className='xl:w-[38px] xl:h-[38px] lg:h-[34px] lg:w-[34px] md:w-[30px] md:h-[30px] sm:w-[28px] sm:h-[28px] transition ease-in-out delay-150 duration-300 hover:bg-blue-500 hover:scale-110 bg-[#fff] rounded-full border-[2px] border-black cursor-pointer flex justify-center items-center '>
              <img src={instagram} className='xl:w-[18px] lg:w-[17px] md:w-[15px] sm:w-[13px] cursor-pointer' />
            </a>

          </div>

        </div>

        <div className='md:flex md:flex-row w-[100%] sm:h-[40px] md:mt-[50px] md:justify-between sm:flex sm:flex-col sm:gap-y-[30px]'>
          <p className='text-[#909090] xl:text-[13px] lg:text-[11px] md:text-[10px] sm:text-[9px] font-bold'>© 2020 Flux</p>
          <span className='text-[#909090] sm:order-first md:order-last xl:text-[13px] lg:text-[11px] md:text-[10px] sm:text-[9px] font-bold flex xl:w-[18%] lg:w-[20%] md:w-[25%] sm:w-[47%] sm:justify-between md:justify-between'>
            <Link to='privacy' className='cursor-pointer'>Privacy</Link>
            <Link to='terms' className='cursor-pointer'>Terms and conditions</Link>
          </span>
        </div>

      </div>

    </div>
  )
}

export default Footer