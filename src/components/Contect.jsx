import React from 'react'
import img from "../assets/img/Address.png"
import img1 from "../assets/img/contact.png"
import img2 from "../assets/img/emailaddress.svg"
import img3 from "../assets/img/download.png"

function Contect() {
  return (
   <>
   <div className='mt-24  h-screen  flex flex-col mb-9  '>
    
  
   <div className=' text-center '>
   <h1 className=' font-extrabold text-5xl mb-5 '>Contact Me</h1>
    <p>Below are the details to reach out to me!</p>
    </div>

    <div className='flex flex-col  items-center m-auto justify-cente md:flex-row md:justify-around md:mt-12'>
      <div className='text-center  flex  flex-col items-center'>
      <img src={img} alt="Address" width="100" height="100" className=''/>
      <p>Address</p>
      <p>Akbarpur Amberdkar nagar</p>
      </div>
      <div className='text-center flex  flex-col items-center'>
      <img src={img1} alt="Contact" width="100" height="100"/>
      <p>Contact</p>
      <p>9580221174</p>
      </div>
      <div className='text-center flex  flex-col items-center'>
      <img src={img2} alt="Email" width="100" height="100" />
      <p>Email</p>
      <p>Sandeepmodanwal479@gmail.com</p>
      </div>
      <div className=' flex  flex-col items-center '>
      <img src={img3} alt="Dowanload" width="100" height="100" />
      <p>DOWNLOAD RESUME</p>
      <p>resume link</p>
      </div>
    </div>
    
   </div>
  
   </>
  )
}

export default Contect
