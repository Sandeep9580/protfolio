import React, { useState } from "react";
import img from "../assets/img/feature-section1-dottedrows.png";
import img1 from "../assets/img/ctaImg.png.svg"

function Home() { 
     
    const HandleLinkedinUrl=()=>{
      window.open('www.linkedin.com/in/sandeep-modanwal-a8695b209','_blank')
    }

     const HandleInstagamUrl=()=>{
       window.open('https://www.instagram.com/_sandeepmodanwal/', '_blank')
     }

  return (
    <>
     <div className="flex flex-col-reverse sm:flex-row md:flex-col-reverse lg:flex-row justify-evenly items-center min-h-screen rounded-sm border border-black bg-gren-500 bg-transparent mt-24 m-3 ">
      
      <div className="flex flex-col gap-4 ml-3">
        <p className="text-yellow-500 font-Reddit text-xl mt-6">Hello !!</p>
        <div className=" font-Reddit text-5xl" >
          I'm <span className="text-yellow-500 font-Pacifico text-5xl ml-5">Sandeep <br />modanwal</span>
        </div>

        <div>
          <div className="w-max ">
            <h1
              className="animate-typing overflow-hidden whitespace-nowrap border-r-4
                   border-r-white font-serif font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent"
            >
              Software Developer.
            </h1>
          </div>
        </div>

        <div className=" font-Reddit ">
          <p>I'm a software developer and here is my postfolio website. <br />Here you"ll 
            learn about my Journey as a software developer.
          </p>
        </div>

        <div className=" my-6">
          <button 
           onClick={HandleInstagamUrl}
          className=" font-Reddit bg-transparent hover:border-pink-400 text-slate-500 font-semibold hover:text-pink-400 py-1 px-1 border-2 hover:border-transparent rounded mr-2 mb-3">
            MY INSTAGRAM
          </button>
          
          <button onClick={HandleLinkedinUrl} 
          className="bg-transparent hover:bg-blue-500  font-semibold text-blue-500 hover:text-white py-1 px-1 border-2 border-blue-500 hover:border-transparent rounded">
            MY LINKEDIN
          </button>
        </div>
      </div>

      <div className="mt-5 mr-5 mb-5">
        <img src={img1} alt="hero image" />
       
      </div>
      
      </div>
      
      
      
      </>
  );
}

export default Home;
