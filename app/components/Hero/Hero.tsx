import React from "react";
import AutoTypeAnimation from "../auto-Type/AutoTypeAnimation";
import Image from "next/image";
import Container from "../Container";

const Hero = () => {
  return (
    <Container>
      <div className="w-full mb-5 pt-10">
        <div className="w-full flex md:flex-row flex-col items-center justify-center text-center">
          <div>
            <div className="text-3xl">IGNITING INNOVATION</div>
            <AutoTypeAnimation />
            <div className="text-3xl font-bold">FOR TOMORROW</div>
            <span className="h-[4px] w-[180px] bg-[#cab169] mt-3 block mx-auto"></span>
          </div>
          <div className="relative w-full md:w-[500px] h-[300px] mt-[20px]">
            <Image
              src="/images/hero.jpg"
              className="object-contain"
              alt="hero"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
