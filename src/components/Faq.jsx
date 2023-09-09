import { GoArrowRight } from 'react-icons/go'
import { useState } from 'react'
import '../App.css'


function Faq() {

  const [showText, setShowText] = useState(false)

  const text = () => {
    setShowText(!showText);
  }

  const [showText2, setShowText2] = useState(false)

  const text2 = () => {
    setShowText2(!showText2);
  }

  const [showText3, setShowText3] = useState(false)

  const text3 = () => {
    setShowText3(!showText3);
  }

  const [showText4, setShowText4] = useState(false)

  const text4 = () => {
    setShowText4(!showText4);
  }

  const [showText5, setShowText5] = useState(false)

  const text5 = () => {
    setShowText5(!showText5);
  }

  const close = () => {
    setShowText2(false);
    setShowText3(false);
    setShowText4(false);
    setShowText5(false);
  }

  const close2 = () => {
    setShowText(false);
    setShowText3(false);
    setShowText4(false);
    setShowText5(false);
  }

  const close3 = () => {
    setShowText(false);
    setShowText2(false);
    setShowText4(false);
    setShowText5(false);
  }

  const close4 = () => {
    setShowText(false);
    setShowText3(false);
    setShowText2(false);
    setShowText5(false);
  }

  const close5 = () => {
    setShowText(false);
    setShowText3(false);
    setShowText4(false);
    setShowText2(false);
  }

  return (
    <div className='flex justify-center items-center'>

      <div className='max-w-[1523px] m-auto p-20 mt-[70px] mb-[70px] font-sans'>

        <div className='flex justify-center items-center before:block before:absolute before:-inset-1 before:border-[2px] before:border-[#222222] before:rounded-2xl before:translate-x-2 before:translate-y-2 before:h-auto before:bg-[#222222] relative'>

          <div className='xl:w-[600px] xl:h-auto lg:w-[510px] lg:h-auto md:w-[470px] relative md:h-auto sm:w-[100%] sm:h-auto flex-col flex justify-center items-center border-[2px] border-[#222222] bg-[#FFFFFF] rounded-2xl sm:py-10 sm:px-5 md:px-10 md:py-10 lg:py-10 lg:px-10 xl:px-10 xl:py-12'>

            <img src='https://iflux.app/assets/img/question_mark.1bb3c4f7.png' className='xl:w-[130px] sm:w-[90px] md:w-[110px] absolute top-0 xl:-translate-y-[105px] md:-translate-y-[89px] sm:-translate-y-[73px] z-[2]' />

            <div className='2xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl font-bold h-[100px] xl:w-[350px] 2xl:w-[380px] top-[0px] text-center sm:px-5 sm:mt-[10px] md:mt-[10px] 2xl:mt-[10px] xl:mb-[10px] 2xl:mb-[27px]'>

              <h1 className=''>Frequently asked <span className='text-[#FFC400]'>questions.</span> </h1>

            </div>

            <div className='h-auto w-[100%]  flex flex-col justify-center items-center'>

              <div className='w-[100%] h-[100%] flex flex-col justify-center items-center lg:gap-8 md:gap-6 sm:gap-5'>


                <div className='sm:w-[100%] lg:w-[100%] h-auto bg-[#222222] text-[#fff] rounded-xl '>

                  <button onClick={() => { text(); close(); }} className='2xl:h-[60px] lg:h-[45px] md:h-[45px] sm:h-[40px]  w-[100%] text-left flex justify-between items-center lg:p-10 md:p-8 sm:p-5 2xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[10px] font-bold'>

                    <h4>How many countries do you support?</h4>

                    {showText ? <GoArrowRight className='-rotate-90 duration-500 font-bold sm:w-[20px]' /> : <GoArrowRight className='sm:w-[20px] rotate-0 duration-500 font-bold' />}

                  </button>

                  {showText && <div onClick={text} className=' w-[100%] 2xl:h-auto 2xl:pb-[30px] pb-[20px] xl:pb-[26px] xl:h-auto lg:h-auto md:h-auto sm:h-auto text-left items-center cursor-pointer overflow-hidden md:px-10 sm:px-5 2xl:text-[16px] lg:text-[12px] md:text-[11px] sm:text-[9px] font-semibold ' > <h1>Flux is currently supported in multiple countries globally and can be used to send & receive money instantly from the following countries within minutes. United States, United Kingdom, Ireland, Sweden, Germany, Denmark, Finland, Austria, Cyprus, Estonia, South Africa, Vietnam, Australia, Canada, Ukraine, China, Egypt. Hongkong, Japan, Macau, Malaysia, South Korea, Turkey, Dubai, Philippines, Kenya, Ghana, and India.</h1> </div>}

                </div>

                 <img src='https://iflux.app/assets/img/glasses.c051a459.png' className='absolute sm:hidden md:flex xl:w-[160px] lg:w-[150px] md:w-[120px] lg:-translate-x-[120px] md:-translate-x-[98px] left-0 xl:-translate-x-[140px] xl:-translate-y-[220px]  -translate-y-[200px] z-[-100] ' />

                <div className='sm:w-[100%] lg:w-[100%] h-auto bg-[#222222] text-[#fff] rounded-xl '>

                  <button onClick={() => { text2(); close2(); }} className='2xl:h-[60px] lg:h-[45px] md:h-[45px] sm:h-[40px]  w-[100%] text-left flex justify-between items-center lg:p-10 md:p-8 sm:p-5 2xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[10px] font-bold'>

                    <h4>How much is the cost to open a Flux account?</h4>

                    {showText2 ? <GoArrowRight className='-rotate-90 duration-500 font-bold sm:w-[20px]' /> : <GoArrowRight className='sm:w-[20px] rotate-0 duration-500 font-bold' />}

                  </button>

                  {showText2 && <div onClick={text2} className=' w-[100%] 2xl:h-auto 2xl:pb-[30px] pb-[20px] xl:pb-[26px] xl:h-auto lg:h-auto md:h-auto sm:h-auto text-left items-center cursor-pointer overflow-hidden md:px-10 sm:px-5 2xl:text-[16px] lg:text-[12px] md:text-[11px] sm:text-[9px] font-semibold ' > <h1>FREE!!! Setting up your Flux account is free and does not require you to make a minimum deposit. You can decide to fund your account immediately after you sign up or fund whenever you want to.</h1> </div>}

                </div>


                <div className='sm:w-[100%] lg:w-[100%] h-auto bg-[#222222] text-[#fff] rounded-xl '>

                  <button onClick={() => { text3(); close3(); }} className='2xl:h-[60px] lg:h-[45px] md:h-[45px] sm:h-[40px]  w-[100%] text-left flex justify-between items-center lg:p-10 md:p-8 sm:p-5 2xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[10px] font-bold'>

                    <h4>What can i use the Flux app for ?</h4>

                    {showText3 ? <GoArrowRight className='-rotate-90 duration-500 font-bold sm:w-[20px]' /> : <GoArrowRight className='sm:w-[20px] rotate-0 duration-500 font-bold' />}

                  </button>

                  {showText3 && <div onClick={text3} className=' w-[100%] 2xl:h-auto 2xl:pb-[30px] pb-[20px] xl:pb-[26px] xl:h-auto lg:h-auto md:h-auto sm:h-auto text-left items-center cursor-pointer overflow-hidden md:px-10 sm:px-5 2xl:text-[16px] lg:text-[12px] md:text-[11px] sm:text-[9px] font-semibold ' > <h1>Flux can be used to perform day to day transactions from simple payments like paying for meals, sending receiving money from your peers, purchasing airtime, paying bills (Internet, Cable TV, electricity bills), making small and large purchases globally, and saving your cash in dollars or euros for a fixed duration to receive it after duration.</h1> </div>}

                </div>

                <img src='https://iflux.app/assets/img/chat.fa81d1de.png' className='sm:hidden md:flex xl:w-[130px] lg:w-[120px] lg:translate-x-[100px] md:w-[100px] md:translate-x-[80px] absolute right-0 translate-y-[80px] xl:translate-y-[115px] xl:translate-x-[120px] ' />

                <div className='sm:w-[100%] lg:w-[100%] h-auto bg-[#222222] text-[#fff] rounded-xl '>

                  <button onClick={() => { text4(); close4(); }} className='2xl:h-[60px] lg:h-[45px] md:h-[45px] sm:h-[40px]  w-[100%] text-left flex justify-between items-center lg:p-10 md:p-8 sm:p-5 2xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[10px] font-bold'>

                    <h4>Are transfers free on Flux ?</h4>

                    {showText4 ? <GoArrowRight className='-rotate-90 duration-500 font-bold sm:w-[20px]' /> : <GoArrowRight className='sm:w-[20px] rotate-0 duration-500 font-bold' />}

                  </button>

                  {showText4 && <div onClick={text4} className=' w-[100%] 2xl:h-auto 2xl:pb-[30px] pb-[20px] xl:pb-[26px] xl:h-auto lg:h-auto md:h-auto sm:h-auto text-left items-center cursor-pointer overflow-hidden md:px-10 sm:px-5 2xl:text-[16px] lg:text-[12px] md:text-[11px] sm:text-[9px] font-semibold ' > <h1>YES!!! All local cash transfers are free on Flux, whether you are sending money to a bank account or you are sending money to another Flux user. It is totally free, no hidden charges, no maintenance fees or other funny charges. We believe free banking should be free and shouldn`t be capped.</h1> </div>}

                </div>


                <div className='sm:w-[100%] lg:w-[100%] h-auto bg-[#222222] text-[#fff] rounded-xl '>

                  <button onClick={() => { text5(); close5(); }} className='2xl:h-[60px] lg:h-[45px] md:h-[45px] sm:h-[40px]  w-[100%] text-left flex justify-between items-center lg:p-10 md:p-8 sm:p-5 2xl:text-[17px] lg:text-[15px] md:text-[14px] sm:text-[10px] font-bold'>

                    <h4>How secure is my money with Flux ?</h4>

                    {showText5 ? <GoArrowRight className='-rotate-90 duration-500 font-bold sm:w-[20px]' /> : <GoArrowRight className='sm:w-[20px] rotate-0 duration-500 font-bold' />}

                  </button>

                  {showText5 && <div onClick={text5} className=' w-[100%] 2xl:h-auto 2xl:pb-[30px] pb-[20px] xl:pb-[26px] xl:h-auto lg:h-auto md:h-auto sm:h-auto text-left items-center cursor-pointer overflow-hidden md:px-10 sm:px-5 2xl:text-[16px] lg:text-[12px] md:text-[11px] sm:text-[9px] font-semibold ' > <h1>Protecting your money is our biggest priority. We use cutting-edge technology to safeguard your account and money on the Flux app. We are partnered with fully licensed payment service providers to help facilitate your money transfers. Our partners also provide an extra layer of security in protecting your money. Contact us at info@iflux.support for more information.</h1> </div>}

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Faq