import React from "react";

function Message_me() {
  return (
    <>
      <form >
      <div className="h-screen mt-24 [6.3rem]  flex flex-col justify-center">
        <div className="text-center text-3xl font-bold ">
          <h1>Have a Question?</h1>
        </div>
        <div className="flex  items-center flex-col mt-6 ">
        <div className="flex flex-col mb-4">
          <label htmlFor="tex">Full Name</label> 
          <input
            type="text"
            name="Enter name"
            id="tex"
            placeholder="Enter name"
            className=" h-10 w-60 md:w-96  rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm
             placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1
              disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col ">
            <label htmlFor="Email">Email</label>
            <input type="email" name="Email" id="Email" placeholder="Entre Email" 
            className=" h-10 w-60 mb-4 md:w-[11.63rem]  rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
            placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1
             disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div className="flex  flex-col md:ml-3">
            <label htmlFor="Number">Contact Number</label>
            <input type="number" name="Number" id="Number" placeholder="Entre Number" 
            className=" h-10 mb-4 w-60md:w-[11.63rem] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
            placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1
             disabled:cursor-not-allowed disabled:opacity-50 " 
            />
          </div>
        </div>
         <div className="flex flex-col mb-4">
          <label htmlFor="subject">Subject</label>
          <input type="text" name="Subject" id="subject" placeholder="Subject"
           className=" h-10 w-60 md:w-96  rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
           placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1
            disabled:cursor-not-allowed disabled:opacity-50"
            />
         </div>
         <div className="flex flex-col mb-4">
         <label htmlFor="Message">Message</label>
          <input type="text" name="Message" id="Message" placeholder="Message"
           className=" h-10 w-60 md:w-96  rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm
           placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1
            disabled:cursor-not-allowed disabled:opacity-50"
            />
         </div>
         <div>
         </div>
      
      </div >
      <div className="flex justify-center ">
         <button
          className="rounded-md border border-black bg-yellow-300 text-white px-1 py-2  ">SEND MESSAGE
          </button>
         </div>
         </div>
      
      </form>
    </>
  );
}

export default Message_me;
