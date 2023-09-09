import '../App.css'
import card from '../Flux/card_img.png'
import card2 from '../Flux/card_2.png'
import purple from '../Flux/dark purple.png'
import star from '../Flux/blue star.png'
import emoji from '../Flux/Article/tounge emoji.png'
import yellow from '../Flux/yello star.png'

function Cards() {
  return (
    <div className='flex justify-center items-center bg-gray-100'>

      <div className='max-w-[1523px]  m-auto  p-20 items-center font-sans grid place-items-center gap-16  2xl:grid-cols-4 2xl:grid-rows-1 xl:grid-cols-4 xl:grid-rows-1 lg:grid-cols-4 lg:grid-rows-1 md:grid-rows-1 md:grid-cols-4 sm:grid-cols-1 sm:grid-rows-4 '>


        <div className='before:block before:absolute before:-inset-1  before:bg-black before:border-2 relative before:xl:w-[200px] before:xl:h-[350px] before:lg:w-[180px] before:lg:h-[315px] before:md:w-[150px] before:md:h-[320px] before:sm:w-[90%] before:sm:h-[260px] before:rounded-[15px] before:left-[10px] before:top-[10px]'>

          <img src={card2} className='xl:hidden lg:hidden md:hidden absolute w-[60px] z-[10] top-0 right-[90px] -translate-y-16 -translate-x-6' />

          <div className="border-2 border-black xl:w-[200px] xl:h-[350px] lg:w-[180px] lg:h-[315px] md:w-[150px] md:h-[320px] sm:w-[90%] sm:h-[260px] lg:px-8 md:px-5 sm:px-8 rounded-[15px] xl:py-[40px] lg:py-[25px] md:py-[20px] sm:py-[30px] bg-white flex flex-col items-left relative  z-[200]  ">

            <img src={emoji} className='sm:hidden md:flex absolute w-[60px] xl:-translate-y-24 lg:-translate-y-[64px] md:-translate-y-20' />

            <div className=' xl:pb-[40px] lg:pb-[30px] md:pb-[35px] sm:pb-[40px] ' id="divAngle">
              <div className="xl:w-[100px] xl:h-[40px] lg:w-[95px] lg:h-[40px] md:h-[40px] md:w-[90px] sm:w-[120px] sm:h-[40px] border-black border-4 rounded-xl relative bg-[#fc6190]" id='angle'></div>
            </div>

            <h1 className="after:content-['.'] after:text-[#fc6190] text-4xl font-bold xl:pb-[10px] md:pb-[10px] sm:pb-[10px]">Send</h1>
            <h1 className="xl:text-[16px] lg:text-[16px] sm:text-[14px] text-left pb-[60px]">Send & Receive money instantly across over 40+ countries globally.</h1>

          </div>

          <img src={card} className='sm:hidden md:flex absolute right-[15%] z-[10]  -translate-y-[20px] w-[60px]' />

        </div>


        <div className='before:block before:absolute before:-inset-1  before:bg-black before:border-2 relative before:xl:w-[200px] before:xl:h-[350px] before:lg:w-[180px] before:lg:h-[315px] before:md:w-[150px] before:md:h-[320px] before:sm:w-[90%] before:sm:h-[260px] before:rounded-[15px] before:left-[10px] before:top-[10px]'>

          <div className="border-2 border-black xl:w-[200px] xl:h-[350px] lg:w-[180px] lg:h-[315px] md:w-[150px] md:h-[320px] sm:w-[90%] sm:h-[260px] lg:px-8 md:px-5 sm:px-8 rounded-[15px] xl:py-[40px] lg:py-[25px] md:py-[20px] sm:py-[30px] bg-white flex flex-col items-left relative  z-[200]  ">

            <div className=' xl:pb-[40px] lg:pb-[30px] md:pb-[35px] sm:pb-[40px] ' id="divAngle">
              <div className="xl:w-[100px] xl:h-[40px] lg:w-[95px] lg:h-[40px] md:h-[40px] md:w-[90px] sm:w-[120px] sm:h-[40px] border-black border-4 rounded-xl relative bg-[#00a7ff]" id='angle'></div>
            </div>

            <h1 className="after:content-['.'] after:text-[#00a7ff] text-4xl font-bold xl:pb-[10px] md:pb-[10px] sm:pb-[10px]">Spend</h1>
            <h1 className="xl:text-[16px] lg:text-[16px] sm:text-[14px] text-left pb-[60px]">Create flexible virtual dollar cards to spend on your favourite websites.</h1>

            <img src={star} className='w-[40px] absolute translate-y-[55%] translate-x-1 right-[-20px] bottom-1' />
          </div>

        </div>


        <div className='before:block before:absolute before:-inset-1  before:bg-black before:border-2 relative before:xl:w-[200px] before:xl:h-[350px] before:lg:w-[180px] before:lg:h-[315px] before:md:w-[150px] before:md:h-[320px] before:sm:w-[90%] before:sm:h-[260px] before:rounded-[15px] before:left-[10px] before:top-[10px]'>

          <img src={card2} className='sm:hidden md:flex absolute w-[60px] z-[10] -translate-y-16' />

          <div className="border-2 border-black xl:w-[200px] xl:h-[350px] lg:w-[180px] lg:h-[315px] md:w-[150px] md:h-[320px] sm:w-[90%] sm:h-[260px] lg:px-8 md:px-5 sm:px-8 rounded-[15px] xl:py-[40px] lg:py-[25px] md:py-[20px] sm:py-[30px] bg-white flex flex-col items-left relative  z-[200]  ">

            <div className=' xl:pb-[40px] lg:pb-[30px] md:pb-[35px] sm:pb-[40px] ' id="divAngle">
              <div className="xl:w-[100px] xl:h-[40px] lg:w-[95px] lg:h-[40px] md:h-[40px] md:w-[90px] sm:w-[120px] sm:h-[40px] border-black border-4 rounded-xl relative bg-[#ffc400]" id='angle'></div>
            </div>

            <h1 className="after:content-['.'] after:text-[#ffc400] text-4xl font-bold xl:pb-[10px] md:pb-[10px] sm:pb-[10px]">Bank</h1>
            <h1 className="xl:text-[16px] lg:text-[16px] sm:text-[14px] text-left pb-[60px]">Enjoy unlimited transfers to local bank and other Flux users.</h1>

            <img src={yellow} className='w-[40px] xl:hidden lg:hidden md:hidden absolute translate-y-[55%] translate-x-4 left-[-20px] bottom-6' />

          </div>

        </div>


        <div className='before:block before:absolute before:-inset-1  before:bg-black before:border-2 relative before:xl:w-[200px] before:xl:h-[350px] before:lg:w-[180px] before:lg:h-[315px] before:md:w-[150px] before:md:h-[320px] before:sm:w-[90%] before:sm:h-[260px] before:rounded-[15px] before:left-[10px] before:top-[10px]'>

          <div className="border-2 border-black xl:w-[200px] xl:h-[350px] lg:w-[180px] lg:h-[315px] md:w-[150px] md:h-[320px] sm:w-[90%] sm:h-[260px] lg:px-8 md:px-5 sm:px-8 rounded-[15px] xl:py-[40px] lg:py-[25px] md:py-[20px] sm:py-[30px] bg-white flex flex-col items-left relative  z-[200]  ">

            <div className=' xl:pb-[40px] lg:pb-[30px] md:pb-[35px] sm:pb-[40px] ' id="divAngle">
              <div className="xl:w-[100px] xl:h-[40px] lg:w-[95px] lg:h-[40px] md:h-[40px] md:w-[90px] sm:w-[120px] sm:h-[40px] border-black border-4 rounded-xl relative bg-[#855aaf]" id='angle'></div>
            </div>

            <h1 className="after:content-['.'] after:text-[#855aaf] text-4xl font-bold xl:pb-[10px] md:pb-[10px] sm:pb-[10px]">Invest</h1>
            <h1 className="xl:text-[16px] lg:text-[16px] sm:text-[14px] text-left pb-[60px]">Buy 90+ cryptos, store cash in dollars or euros for a fixed duration until maturity.</h1>

            <img src={purple} className='w-[40px] absolute translate-y-[55%] translate-x-1 right-[-20px] bottom-1' />

          </div>

        </div>


      </div>

    </div>
  )
}
//relative after:content-[""] after:absolute after:w-0 after:h-0 after:border-t-[18px] after:border-black after:border-l-[31px] after:bottom-0 after:left-[-3px] after:translate-y-[100%] after:bg-black
//lg:grid-cols-2  lg:grid-rows-none md: md:grid-rows-4 md:grid-cols-1
//div className='before:block before:absolute before:-inset-1  before:bg-black relative before:w-[530px] before:h-[500px] before:ml-[10px] before:rounded-xl before:mt-[10px]'></div>


export default Cards