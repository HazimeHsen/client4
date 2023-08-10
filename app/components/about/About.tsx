import React from "react";
import Container from "../Container";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="bg-gray-100 py-10">
      <h1 className="font-bold text-3xl text-center mb-8">About Us</h1>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[250px]">
            <Image
              src="/images/about3.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl font-semibold leading-relaxed">
              About Asquared Crypto: Innovators Redefining Business. Combining
              technology and creativity, we craft solutions that break
              boundaries. From engaged communities to strategic success, we
              drive innovation. Join us in shaping the future.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
