import React from "react";
import AutoTypeAnimation from "../auto-Type/AutoTypeAnimation";
import Image from "next/image";
import Container from "../Container";

const Hero = () => {
  return (
    <Container>
      <div className="w-full mb-5 pt-10">
        <div className="w-full flex md:flex-row flex-col items-center justify-evenly ">
          <div>
            <div className="text-3xl">INNOVATIVE IDEAS</div>
            <AutoTypeAnimation />
            <div className="text-3xl font-bold ">SOLUTIONS</div>
            <span className="h-[4px] w-[180px] bg-[#F7931E] mt-3"></span>
          </div>
          <div className="relative w-full md:w-[500px] h-[300px] mt-[20px] ">
            <Image src="/images/hero.png" className="" alt="hero" fill />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
