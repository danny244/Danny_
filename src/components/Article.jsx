import eye from '../Flux/Article/eye image.png'
import theL from '../Flux/Article/L image.png'
import star from '../Flux/Article/purple star image.png'
import spike from '../Flux/Article/spikes images.png'

function Article() {
  return (
    // The general div
    <div className='flex justify-center items-center font-sans '>
      
      <div className='max-w-[1523px] m-auto p-20'>

        <div className='before:block before:absolute before:-inset-1 before:bg-[#222222] before:left-[8px] before:top-[8px] lg:before:w-[900px] lg:before:h-[320px] before:md:w-[700px] before:md:h-[370px] before:sm:w-[100%] before:sm:h-[320px] before:rounded-[15px] relative z-[1]'>

          <img src='https://iflux.app/assets/img/menu.f7ff02cd.png' className='lg:w-[85px] md:w-[80px] sm:w-[50px] absolute md:right-[80px] sm:right-[20px] lg:-translate-y-16 md:-translate-y-16 sm:-translate-y-10' />

          <img src={spike} className='md:w-[55px] sm:w-[45px] absolute right-[1px] md:top-[30px] sm:top-[30px] lg:translate-x-14 md:translate-x-10 sm:translate-x-12 z-[2]' />

          <div className='lg:h-[320px] lg:w-[900px] md:w-[700px] md:h-[370px] sm:w-[100%] sm:h-[320px] border-[2px] rounded-[15px] border-[#222222] bg-[#fff] flex justify-center items-center px-[30px] md:pb-[25px] flex-col relative z-[3] '>

            <img src='https://iflux.app/assets/img/tongue_emoji.399c2b00.png' className='lg:w-[85px] md:w-[80px] sm:w-[60px] sm:left-[20px] sm:top-[0px] absolute md:top-[10px] md:left-[90px] lg:-translate-y-14 md:-translate-y-12 sm:-translate-y-7' />

            <img src='https://iflux.app/assets/static/yellow_star.afb6620.9fdc29f2640ddaf497d7ed586eb3293d.png' className='md:w-[50px] sm:w-[30px] sm:right-[60px] sm:translate-y-[55px]  absolute sm:top-0 md:right-[265px] md:top-0 md:translate-y-16 ' />

            <img src={star} className='md:w-[40px] sm:w-[25px] sm:-translate-x-12 sm:translate-y-2 absolute md:left-[260px]' />

            <h1 className=' md:text-8xl sm:text-5xl  font-bold text-center text-[#222222] after:content-["."] after:text-purple-600 '>Send Money and Spend Online Using Flux</h1>

            <h1 className='font-medium md:text-[16px] sm:text-[10px] md:pt-[25px] sm:pt-[18px] text-center text-[#222222]'>Send, Spend, Bank, and invest securely from one App</h1>

          </div>

          <img src={eye} className='md:w-[70px] sm:w-[55px] absolute md:right-[80px] sm:right-[20px] md:-translate-y-10 sm:-translate-y-7' />

          <img src={theL} className='md:w-[70px] sm:w-[60px] absolute md:left-[50px] sm:left-[30px] -translate-y-5' />

        </div>

      </div>

    </div>
  )
}

export default Article

//  A way of adding image in a content in tailwind css // after:content-[url("https://iflux.app/assets/img/tongue_emoji.399c2b00.png")] after:h-[50px]