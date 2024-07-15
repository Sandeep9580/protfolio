import React from "react";
import img from "../assets/img/ctaImg.png.svg";
import img1 from "../assets/img/bg_img.png";

function About() {
  return (
    <>
      <div className=" mt-24 flex flex-col items-center md:flex-row min-h-screen justify-evenly  ">
        <div>
        <div className="mx-5 flex">
            <img className="mb-4"src={img1} alt="profile photo" width="100" height="100"  />
          <div className="mt-3 ml-1">
            <p>NAME:Sandeep modanwal</p>
            <p>JOB:Sofeware Developer</p>
            <p>Address:Akbarpur Amberkar nagar</p>
          </div>
          </div>
          <div className="mx-5">
            <h4 className="font-sans font-medium text-2xl  ">Skills</h4>
            <div className="my-3 ">
              <p className="mb-1">React js</p>
              <div className="  ">
                <div className="w-[21rem] absolute  h-[0.6rem]  bg-slate-300 mb-4 rounded-lg"></div>
                <div className=" w-[20.7rem] absolute h-[0.6rem]  bg-yellow-500 rounded-lg"></div>
              </div>
            </div>

            <div className="my-3">
              <p className="mb-1">Java script</p>
              <div className=" ">
                <div className="w-[21rem] absolute h-[0.6rem]  bg-slate-300 mb-4 rounded-lg"></div>
                <div className=" w-[20.7rem] absolute h-[0.6rem]  bg-yellow-500 rounded-lg"></div>
              </div>
            </div>
            <div className="my-3">
              <p className="mb-1">c++</p>
              <div className=" ">
                <div className="w-[21rem] absolute h-[0.6rem]  bg-slate-300 mb-4 rounded-lg"></div>
                <div className=" w-[20.7rem] absolute h-[0.6rem]  bg-yellow-500 rounded-lg"></div>
              </div>
            </div>
            <div className="my-3">
              <p className="mb-1">SQL</p>
              <div className=" ">
                <div className="w-[21rem] absolute h-[0.6rem]  bg-slate-300 mb-4 rounded-lg"></div>
                <div className=" w-[20.7rem] absolute h-[0.6rem]  bg-yellow-500 rounded-lg"></div>
              </div>
            </div>
            <div className="my-3">
              <p className="mb-1">UI/UX</p>
              <div className=" ">
                <div className="w-[21rem] absolute h-[0.6rem]  bg-slate-300 mb-4 rounded-lg"></div>
                <div className=" w-[20.7rem] absolute h-[0.6rem]  bg-yellow-500 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" truncate whitespace-normal  w-[75%] sm:w-[50%]  ">
          <h1 className="font-mono font-extrabold text-3xl "> About </h1>
          <p>
            Adobe ColdFusion developer at Arosys Technologies, proficient in
            PHP, jQuery AJAX, and skilled in crafting visually appealing
            webpages using HTML, CSS, Tailwind, Bootstrap, and Material UI.
            Well-versed in Python, C++,C, and Java, with a solid foundation in
            SQL. Eager to contribute to innovative web development projects.
          </p>
          <div className="flex flex-col gap-3">
           <p> <b>Profile:</b> Backend Developer & Freelancer Artist</p>
            <p><b>Domain:</b> Software Developement</p>
            <p><b>Education:</b> Bachelor of Computer Applications</p>
            <p><b>Language:</b>English, Hindi, Bengali</p>
            <p><b>Other Skills:</b> Drawing proficiency, Observational skills, Creativity, Knowledge of
            art fundamentals, Technical proficiency, Communication skills, Time
            management, Adaptability & Attention to detail</p>
            <p><b>Interest:</b> Traveling, Travel Photography, Teaching, Editing</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
