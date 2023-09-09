import { GrFormClose } from 'react-icons/gr'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import '../App.css'


function ContactUs(prop) {

  const registerSchema = yup.object().shape({
    user_email: yup.string('email should be a string').email('please provide a valid email address').required('email adress is required'),
    user_name: yup.string().required(),
    user_number: yup.number('should be a number').required('please provide a valid phone Number'),
    message: yup.string().required(),
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });


  const sendEmail = (formData) => {
    emailjs
      .send("service_dmpb3oj", "template_sfn7znk", formData, "t7D8VnTpmuTIrnwQR")
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent')
        },
        (error) => {
          console.log(error.text);
          alert('Message Not Sent Please Try Again')
        }
      );
    reset();
  };


  return (
    <div className=' z-[1000] duration-1000'>

      <div className='max-w-[1523px] md:px-10 sm:px-10 h-[100%] w-full flex justify-center items-center '>

        <div className='before:block before:absolute before:-inset-1 xl:before:w-[1000px] xl:before:h-[580px] lg:before:w-[800px] lg:before:h-[520px] md:before:w-[650px] md:before:h-[450px] sm:before:h-[627px] sm:before:w-[350px] before:rounded-[15px] before:top-[10px] before:left-[10px] before:bg-[#222222] relative'>

          <div className='xl:w-[1000px] xl:h-[580px] lg:w-[800px] lg:h-[520px] md:w-[650px] md:h-[450px] sm:w-[350px] sm:h-[627px] border-[2px] border-[#000] rounded-[15px] xl:p-[50px] lg:p-[35px] md:p-[30px] sm:p-[25px] font-sans bg-[#fff] relative'>

            <div className="flex justify-between items-center">

              <div className='flex flex-col text-[#222222]'>
                <h1 className='xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl font-bold after:content-["."] lg:after:text-[50px] sm:after:text-[35px] after:text-[#855aaf]'>Contact Us</h1>
                <p className='xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[9px] font-medium'>Our agents are always available to help</p>
              </div>

              <button onClick={prop.onClick} className='xl:w-[30px] xl:h-[30px] lg:w-[25px] lg:h-[25px] md:w-[22px] md:h-[22px] sm:w-[20px] sm:h-[20px] border-[2px] border-[#000] rounded-full flex justify-center bg-[#855aaf] cursor-pointer items-center'><GrFormClose size={20} className='font-extrabold' /></button>

            </div>

            <form onSubmit={handleSubmit(sendEmail)} className='w-[100%] xl:h-[100%] lg:h-[80%] '>

              <div className='w-[100%] xl:h-[90px] lg:h-[70px] mt-[20px] mb-14 grid md:gap-10 sm:gap-7 md:grid-cols-3 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-3 md:place-content-between'>

                <div className='w-[100%] flex flex-col justify-center items-center'>
                  <label className='w-[100%] mb-[6px] xl:text-[12px] lg:text-[11px] md:text-[9px] sm:text-[9px] font-medium opacity-[.7] text-[#222222] ' htmlFor="fullName">Full Name</label>
                  <input type='text' name='user_name' autoComplete='text' {...register('user_name')} id='fullName' className='border-[#000] xl:h-[55px] lg:h-[45px] md:h-[35px] sm:h-[50px] w-[100%] p-[15px] border-[2px] rounded-[8px] ' />
                  {errors.user_name ? (<span className='text-red-900'>{errors.user_name.message}</span>) : (<></>)}
                </div>

                <div className='w-[100%] flex flex-col justify-center items-center'>
                  <label className='w-[100%] mb-[6px] xl:text-[12px] lg:text-[11px] md:text-[9px] sm:text-[9px] font-medium opacity-[.7] text-[#222222] ' htmlFor="email">Email Address</label>
                  <input type='email' name='user_email' {...register('user_email')} autoComplete='email' id='email' className='border-[#000] xl:h-[55px] lg:h-[45px] md:h-[35px] sm:h-[50px] w-[100%] p-[15px] border-[2px] rounded-[8px] ' />
                  {errors.user_email ? (<span className='text-red-900'>{errors.user_email.message}</span>) : (<></>)}
                </div>

                <div className='w-[100%] flex flex-col justify-center items-center'>
                  <label className='w-[100%] mb-[6px] xl:text-[12px] lg:text-[11px] md:text-[9px] sm:text-[9px] font-medium opacity-[.7] text-[#222222] ' htmlFor="phoneNumber">Phone Number</label>
                  <input type='tel' name='user_number'  {...register('user_number')} autoComplete='tel' id='phoneNumber' className='border-[#000] xl:h-[55px] lg:h-[45px] md:h-[35px] sm:h-[50px] w-[100%] p-[15px] border-[2px] rounded-[8px] ' />
                  {errors.user_number ? (<span className='text-red-900'>{errors.user_number.message}</span>) : (<></>)}
                </div>

              </div>

              <div className='w-[100%] lg:h-[180px] md:h-[165px] sm:h-[160px] '>
                <label className='w-[100%] xl:text-[12px] lg:text-[11px] md:text-[9px] sm:text-[9px] font-medium opacity-[.7] text-[#222222] '>Message</label>
                <textarea rows={10} name='message'  {...register('message')} className='xl:h-[130px] lg:h-[110px] md:h-[97px] sm:h-[95px] w-[100%] resize-none mt-[8px] p-[15px] border-[#000] border-[2px] rounded-[8px]'></textarea>
                {errors.message ? (<span className='text-red-900'>{errors.message.message}</span>) : (<></>)}
              </div>

              <div className='lg:mt-[16px] xl:mb-[27px] before:block before:absolute before:-inset-1 xl:before:w-[170px] xl:before:h-[48px] lg:before:w-[150px] lg:before:h-[40px] md:before:w-[130px] md:before:h-[35px] before:sm:w-[100px] before:sm:h-[30px] before:border-[2px] before:border-[#000] before:rounded-full xl:before:top-[8px] xl:before:left-[8px] sm:before:top-[6px] sm:before:left-[6px] before:bg-[#fff] relative'>
                <button type='submit' className='xl:h-[48px] xl:w-[170px] lg:h-[40px] lg:w-[150px] md:w-[130px] md:h-[35px] sm:h-[30px] sm:w-[100px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[11px] font-bold text-[#fff] bg-[#855aaf] border-[#000] border-[2px] rounded-full relative' >Send Message</button>
              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  )
}

export default ContactUs