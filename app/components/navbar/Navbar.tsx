"use client";
import React from "react";
import { Navbar, Typography, Button, Collapse } from "@material-tailwind/react";
import { AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
export default function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex items-center flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-300 hover:text-[#cab169] font-bold text md:border-b-0 border-b w-full text-center">
        <a
          href="/"
          className="flex items-center w-full text-center justify-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-300 hover:text-[#cab169] font-bold text md:border-b-0 border-b w-full text-center">
        <a
          href="/about"
          className="flex items-center w-full text-center justify-center">
          About
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-300 hover:text-[#cab169] font-bold text md:border-b-0 border-b w-full text-center">
        <a
          href="/#ourwork"
          className="flex items-center w-full text-center justify-center">
          Our Work
        </a>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 transition-all duration-300 hover:text-[#cab169] font-bold text md:border-b-0 border-b w-full text-center">
        <a
          href="/#contact"
          className="flex items-center w-full text-center justify-center">
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="w-full mx-auto max-w-screen-xl py-4 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center text-[#999999] justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium w-[60px]  h-[60px] ">
          <Image
            src="/images/logo3.png"
            alt="logo"
            width={100}
            height={80}
            className="object-contain w-[60px] h-[60px] flex justify-center items-center "
          />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          fullWidth
          className="mb-2 hidden lg:block w-fit p-1 bg-[#999999] transition-all duration-300 hover:bg-[#cab169] rounded ">
          <AiOutlineTwitter size={25} className="text-white fill-white" />
        </Button>

        <button
          className=" h-6 w-6 text-inherit transition-all duration-300 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <Collapse open={openNav}>
        <div
          className={`mx-auto text-[#999999] ${openNav ? "" : "unclickable"}`}>
          {navList}
        </div>
      </Collapse>
    </Navbar>
  );
}
