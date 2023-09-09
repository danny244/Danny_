import logo from '../Flux/download.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { Link, NavLink } from "react-router-dom"
import ContactUs from './ContactUs'
import '../App.css'
import { useState, useEffect, useRef } from 'react'

function Navbar() {

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSideNav(false);
        setIsClicked(false)
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });


  // The menubar function
  const [sideNav, setSideNav] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  //for the contactus
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

    // The General div for the navbar
    <div className="max-w-[1523px] fixed h-28 m-auto flex justify-between items-center md:px-20 sm:px-12 py-4  left-0 right-0 top-0 z-[1000]" ref={menuRef}>

      <span className='before:absolute before:-inset-1 before:bg-black relative before:rounded-full before:w-[94px] before:h-[38px] before:mt-[14px] before:ml-[13px] before:border-black  before:border-2 '>
        
        <Link to="/" className='flex rounded-full w-[100px] h-[45px] p-[8px]  justify-center border-2 border-[#222222] cursor-pointer relative bg-white focus:outline-none focus:border-dashed '>
          <img className='pr-1 relative' src={logo} width='30' height='30' />
          <p className='cursor-pointer text-3xl font-bold text-[#222222] text-center pb-5 relative'> flux</p>
        </Link>

      </span>


      {/* The yellow Color below this content */}
      <span className='before:absolute before:-inset-1 before:bg-yellow-500 relative before:rounded-full before:w-[255px] before:h-[41px] before:mt-[7px] before:ml-[1px] before:border-black before:border-2 before:hidden before:md:flex'>
        
        <div className='hidden md:flex xl:w-[390] justify-center rounded-full w-[250px] h-[40px] p-[10px] text-[#222222] items-center border-2 border-black relative bg-white'>
          <NavLink to="card" className='cursor-pointer text-[14px] 2xl:text-[15px] font-bold mr-16 ' >Flux Cards</NavLink>
          <button onClick={() => { toggleOverlay(); openOverlay(); }} className='cursor-pointer text-[14px] 2xl:text-[15px] font-bold '>Contact Us</button>
        </div>

      </span>

      {showOverlay && <div className={` bg-[#FFFFFFE6] backdrop-blur-xl  fixed w-full h-screen top-0 left-0 right-0 cursor-pointer z-[1000]   ${showOverlay && 'slide-down '}`} onClick={() => { toggleOverlay(); closeOverlay(); }} ></div>}
      <div className={showOverlay ? 'fixed z-[1000] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-[0.6s]' : ' top-[-300%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  fixed z-[1000] duration-[0.6s] '}>
        <ContactUs onClick={() => { toggleOverlay(); closeOverlay(); }} />
      </div>

      <span className='before:absolute before:-inset-1 before:bg-white relative before:rounded-full before:w-[127px] before:h-[34px] before:border-2 before:mt-[12px] before:ml-[10px] before:border-[#222222] before:hidden before:md:flex'>
        <div className='hidden md:flex justify-center items-center rounded-full w-[130px] h-[37px] py-[1px] bg-[#855aaf] border-2 border-[#222222] relative'>
          <button className='cursor-pointer text-[13px] font-bold 2xl:text-[15px] text-white focus:outline-none focus:border-dashed'>Download Now</button>
        </div>
      </span>


      <div className='md:hidden'>

        <button className='cursor-pointer text-3xl rounded-full bg-[#f9f6fb] flex justify-center items-center w-[35px] h-[35px] text-gray-300' onClick={() => { setSideNav(!sideNav); handleClick(); }}> {isClicked ? (<AiOutlineClose size={20} className='m-[3px] text-purple-400 items-center' />) : (<AiOutlineMenu size={20} className='m-[3px] text-purple-400' />)} </button>
       
        <div className={`absolute duration-1000 right-[2em] top-[77px] w-[150px]  max-h-[400px] z-10 shadow-2xl rounded-[8px] border-none text-[13px] sm:text-[20px] font-bold text-black  bg-[#FFFFFF] ${sideNav ? 'active' : 'inactive'} `} >
          <p id='back'></p>

          <div className='h-auto w-auto pl-8 py-6 grid place-content-start gap-y-10 grid-rows-4 '>
            <button className='text-left text-[13px] cursor-pointer'>About Us</button>
            <NavLink to="card" className='active:text-purple-500 focus:text-purple-500 text-left text-[13px] cursor-pointer '>Flux Debit Cards</NavLink>
            <button onClick={() => { toggleOverlay(); openOverlay(); }} to='contactus' className=' text-left text-[13px] cursor-pointer'>Contact Us</button>
            <NavLink to='privacy' className=' text-left text-[13px] cursor-pointer '>Privacy Policy</NavLink>
          </div>

          <button className=' text-purple-600 bg-[#f9f6fb] w-[150px] text-center cursor-pointer items-center rounded-b-[8px] text-[13px] py-[16px] px-[20px] pb-8 flex justify-between '><h1>Go to web</h1> <BsArrowRight size={25} className='pl-[10px]' /> </button>
        
        </div>

      </div>

    </div>
  )

}

export default Navbar
