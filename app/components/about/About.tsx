import React from "react";
import Container from "../Container";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="bg-[#F1F1F1]">
      <Container>
        <div className="w-full py-4 flex flex-col md:flex-row justify-evenly">
          <div className="relative w-full h-[270px] md:w-[500px]">
            <Image
              src="/images/about3.jpg"
              className="object-contain"
              alt="about"
              fill
            />
          </div>
          <div>
            {" "}
            <h1 className="font-semibold text-2xl my-5">
              ABOUT{" "}
              <span className="font-extrabold text-2xl text-[#cab169]">
                Asquared Crypto
              </span>
            </h1>
            <p className="text-lg max-w-[400px]">
              We develop strong brands, engaged communities, and kickass
              strategies to achieve <span className="font-bold">your</span> big
              business goals.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
