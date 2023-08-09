import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="flex justify-center my-10">
      <div className="relative w-[90%] md:w-[75%] z-[1] rounded-lg  text-white bg-[#F7931E] px-5 py-10  lg:-mr-14">
        <h2 className="mb-12 text-3xl font-bold text-center">Contact us</h2>
        <form className="flex flex-col items-center w-full">
          <div className="relative mb-4 w-full flex justify-center ">
            <input
              type="text"
              className="peer text-black block min-h-[auto] w-full md:w-1/2 rounded bg-white leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-[#99999] border border-white px-2 py-4 "
              id="exampleInput90"
              placeholder="Name"
            />
          </div>
          <div className="relative mb-4 w-full flex justify-center">
            <input
              type="email"
              className="peer text-black block min-h-[auto] w-full md:w-1/2 rounded bg-white leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-[#99999] border border-white px-2 py-4 "
              id="exampleInput91"
              placeholder="Email address"
            />
          </div>
          <div className="relative mb-4 w-full flex justify-center">
            <textarea
              className="peer text-black block min-h-[auto] w-full md:w-1/2 rounded bg-white leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-[#99999] border border-white px-2 py-4 "
              id="exampleFormControlTextarea1"
              rows={3}
              placeholder="Your message"></textarea>
          </div>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="inline-block w-full md:w-1/2 rounded bg-[#111111] px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
