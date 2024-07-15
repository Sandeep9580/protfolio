import React from 'react'
import img from "../assets/img/ResumeFoot.jpg"

function Resume() {
  return (
    <>
   <div className='mt-24 flex flex-col '>
   <div className=' flex flex-col w-full items-center  '>
       <h1 className=' text-3xl font-semibold  '>Resume</h1>
       <p className='truncate whitespace-break-spaces max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto'>
         Experienced Adobe ColdFusion Developer at Arosys Technologies,
         proficient in PHP and skilled in jQuery AJAX. Specialized in crafting
         visually appealing webpages using HTML, CSS, Tailwind, Bootstrap, and 
         Material UI. Possesses a strong foundation in Python, C++, C, and 
         Java, with expertise in SQL. Eager to apply expertise to drive innovative 
         web development projects forward.</p>
    </div>
    <div >
      <h1 className='text-3xl font-semibold text-center'>Education</h1>
      <div className=" bottom-0 w-full h-1 bg-blue-500 rounded-sm "></div>

      <div className=' mt-5 flex flex-col md:flex-row justify-center items-center'>
      <div className='flex flex-col rounded-md border border-black  px-1 py-2  max-w-sm overflow-hidden mb-3 md:mb-0 md:mr-3 '>
      <p className='font-medium  text-yellow-400 text-xl'>2022-2025</p>
      <p className='font-semibold text-xl  '>Bachelor In Computer Applications</p>
      <p className='font-medium'>Integral University</p>
      <p className='text-base '>Grade: First class distinction.</p>
      </div>
      <div className='flex flex-col rounded-md border border-black  pr-[7.5rem]   pl-2 py-2  max-w-md  overflow-hidden  '> 
       <p className='font-medium  text-yellow-400 text-xl'>2019-2020</p>
       <p className='font-semibold text-xl  '>Dr.AK Public School</p>
       <p className='font-medium'>CBSE(PCM)</p>
       <p className='text-base '>Grade: First class distinction.</p>
      </div>
      </div>
     
       <div className='flex justify-center'>
        <button className='bg-yellow-300 rounded-3xl text-white broder p-3 mt-5'>Download</button>
       </div>

       
       <div className='flex flex-col md:flex-row justify-center items-center absolute z-10 left-[11rem] right-[11rem]  sm:left-[12rem] sm:right-[12rem]   mt-6 '>
         <div className='rounded-md border bg-slate-500 text-white px-28   sm:px-32 py-2  '>
          <p className='text-center font-bold text-yellow-300  text-2xl'>20</p>
          <p className='text-center font-medium'>Achievements</p>
         </div>
         <div className='rounded-md border  bg-slate-500 text-white px-[8.6rem] sm:px-[9.5rem]   py-2 mt-3 md:ml-12 md:mt-0  '>
          <p className='text-center font-bold text-yellow-300  text-2xl'>5</p>
          <p className='text-center font-medium'>Project</p>
         </div>
       </div>
       

       <div className=' relative '>
        <img src={img} alt="image Footer" className='w-full h-[30rem] object-cover mt-20 mb-1' />
       </div>
       
       <div className='flex justify-center absolute top-[60rem] left-[2rem] right-[2rem] md:top-[42rem]'>
        <p className=' font-bold text-4xl mr-3 text-[#ffffff] '>Here's my</p>
        <button className='bg-yellow-300 rounded-3xl text-white broder p-3 '> GITHUB</button>
       </div>

       <div className=' flex justify-center  absolute top-[67rem] md:top-[51rem] left-0 right-0 mx-auto w-[75%]'>
        <p className='text-white text-md '>Crack the Code, Change the World.</p>
       </div>

    </div>
   </div>
    </>
  )
}

export default Resume
