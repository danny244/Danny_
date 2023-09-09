import ballon from '../images/articleballon.png'
import waves from '../images/articlewaves.png'
import star from '../images/articlegreenstar.png'
import purpleStar from '../images/articlepurplestar.png'
import blueStar from '../images/articlebluestar.png'
import yellowstar from '../images/securestar.png'

function Article() {
  return (
    <div className='flex justify-center items-center'>

      <div className='max-w-[1523px] m-auto p-20 font-sans flex-col flex justify-center items-center'>

        <div className='text-center xl:w-[450px] xl:h-[170px] lg:w-[400px] sm:w-[350px] xl:mb-[30px] sm:mb-[80px] relative'>

          <p className='xl:text-2xl lg:text-[14px] sm:text-[13px] font-medium xl:mb-[10px] sm:mb-[5px] text-[#0C103A99]'>IN CHARGE</p>

          <img src={blueStar} className='absolute sm:w-[25px] left-[70px] top-[5px] ' />

          <img src={yellowstar} className='absolute sm:w-[25px] bottom-[5px] right-[70px] ' />

          <h1 className='xl:text-6xl lg:text-5xl sm:text-4xl font-bold text-[#222222] after:content-["."] after:text-[#0C103A99]'>All you need to be in full control</h1>

        </div>

        <div className="w-[100%] text-[#222222] h-auto grid md:gap-14 sm:gap-y-14 md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-3">


          <div className='before:block before:absolute before:-inset-1 xl:before:w-[330px] xl:before:h-[220px] lg:before:w-[260px] lg:before:h-[210px]  md:before:h-[225px] md:before:w-[210px] sm:before:w-[300px] sm:before:h-[220px] before:bg-[#222222] before:top-[10px] before:left-[10px] before:rounded-[15px] relative'>

            <img src={ballon} className='xl:w-[80px] sm:w-[60px] absolute xl:-translate-y-[95px] translate-x-[220px] md:translate-x-[140px] sm:-translate-y-[70px] ' />

            <div className='xl:w-[330px] xl:h-[220px] lg:w-[260px] lg:h-[210px] md:w-[210px] md:h-[225px] sm:w-[300px] sm:h-[220px] p-10 border-[2px] rounded-[15px] border-[#222222] bg-[#fff] relative'>

              <div className=' xl:pb-[40px] lg:pb-[30px] md:pb-[35px] sm:pb-[40px] ' id="divAngle">

                <div className="xl:w-[100px] xl:h-[40px] lg:w-[95px] lg:h-[40px] md:h-[40px] md:w-[90px] sm:w-[100px] sm:h-[40px] border-black border-4 rounded-xl relative bg-[#fc6190]" id='angle'></div>

              </div>

              <h2 className='xl:text-3xl lg:text-[23px] sm:text-[20px] font-bold mb-[7px] after:content-["."] after:text-[#fc6190]'>Terminate <img src={purpleStar} className='xl:w-[20px] sm:w-[18px] top-[8px] right-[8px] absolute ' /></h2>

              <p className='xl:text-[15px] lg:text-[13px] sm:text-[12px] font-normal'>Terminate your Virtual card when you have no use for it anymore.</p>

            </div>

          </div>


          <div className='before:block before:absolute before:-inset-1 xl:before:w-[330px] xl:before:h-[238px] lg:before:w-[260px] lg:before:h-[230px] md:before:h-[245px] md:before:w-[210px] sm:before:w-[300px] sm:before:h-[220px] before:bg-[#222222] before:z-[-200] before:top-[10px] before:left-[10px] before:rounded-[15px] relative'>

            <div className='xl:w-[330px] xl:h-[238px] lg:w-[260px] lg:h-[230px] md:h-[245px] md:w-[210px] sm:w-[300px] sm:h-[220px] p-10 border-[2px] rounded-[15px] border-[#222222] bg-[#fff] relative'>

              <div className=' xl:pb-[40px] lg:pb-[30px] md:pb-[35px] sm:pb-[40px] ' id="divAngle">

                <div className="xl:w-[100px] xl:h-[40px] lg:w-[95px] lg:h-[40px] md:h-[40px] md:w-[90px] sm:w-[100px] sm:h-[40px] border-black border-4 rounded-xl relative bg-[#00a7ff]" id='angle'></div>

              </div>

              <h2 className='xl:text-3xl lg:text-[23px] sm:text-[20px] font-bold mb-[7px] after:content-["."] after:text-[#00a7ff]'>Freeze <img src={blueStar} className='xl:w-[25px] sm:w-[20px] top-[8px] right-[8px] absolute ' /> </h2>

              <p className='xl:text-[15px]  lg:text-[13px] sm:text-[12px] font-normal'>Freeze your Virtual card if you wish to take a spending break, and unfreeze at will.</p>

            </div>

            <img src={waves} className='w-[60px] absolute -translate-y-[29px] translate-x-[140px] xl:translate-x-[160px] md:translate-x-[80px] z-[-100] ' />

          </div>


          <div className='before:block before:absolute before:-inset-1 xl:before:w-[330px] xl:before:h-[260px] lg:before:w-[260px] lg:before:h-[268px] md:before:h-[263px] md:before:w-[210px] sm:before:w-[300px] sm:before:h-[230px] before:bg-[#222222] before:top-[10px] before:left-[10px] before:rounded-[15px] relative'>

            <img src={star} className='w-[80px] absolute md:-translate-y-[40px] translate-x-[180px] md:translate-x-10 sm:translate-y-[210px] z-[-100] ' />

            <div className='xl:w-[330px] xl:h-[260px] lg:w-[260px] lg:h-[268px] md:h-[263px] md:w-[210px] sm:w-[300px] sm:h-[230px] p-10 border-[2px] rounded-[15px] border-[#222222] bg-[#fff] relative'>

              <div className=' xl:pb-[40px] lg:pb-[30px] md:pb-[35px] sm:pb-[40px] ' id="divAngle">

                <div className="xl:w-[100px] xl:h-[40px] lg:w-[95px] lg:h-[40px] md:h-[40px] md:w-[90px] sm:w-[100px] sm:h-[40px] border-black border-4 rounded-xl relative bg-[#ffc400]" id='angle'></div>

              </div>

              <h2 className='xl:text-3xl lg:text-[23px] sm:text-[20px] font-bold mb-[7px] after:content-["."] after:text-[#ffc400]'>Recreate <img src={yellowstar} className='xl:w-[30px] sm:w-[22px] top-[8px] right-[8px] absolute ' /> </h2>
              <p className='xl:text-[15px]  lg:text-[13px] sm:text-[12px] font-normal'>Terminate and recreate your virtual card instantly, in the unlikely event that you think your card details have been compromised</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Article