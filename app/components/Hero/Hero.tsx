import React from "react";
import AutoTypeAnimation from "../auto-Type/AutoTypeAnimation";
import Container from "../Container";
import styles from "./Hero.module.css"; // Import your CSS module for styling
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <div
        className={`relative flex flex-col items-center justify-center heroSection ${styles.hero}`}>
        <div
          className={`absolute top-10 right-5 animate-widthAnimation ${styles.fadeIn} `}>
          <Image src="/images/6.jpg" alt="hero" width={70} height={70} />
        </div>
        <div
          className={`absolute bottom-11 left-3 animate-widthAnimation ${styles.fadeIn}`}>
          <Image src="/images/5.jpg" alt="hero" width={80} height={80} />
        </div>
        <div
          className={`absolute bottom-12 right-5 animate-widthAnimation ${styles.fadeIn}`}>
          <Image src="/images/7.jpg" alt="hero" width={80} height={80} />
        </div>
        <h1
          className={`text-3xl md:text-5xl font-bold text-center mb-1 ${styles.fadeIn}`}>
          Igniting Innovation
        </h1>
        <AutoTypeAnimation />
        <h2
          className={`text-xl md:text-2xl font-semibold text-center mt-1 mb-2 ${styles.fadeIn}`}>
          Shaping a Better Tomorrow
        </h2>
        <div
          className={`h-1 w-24 max-w-[6rem] md:max-w-[16rem] bg-[#cab169] mb-4 ${styles.slideIn}`}></div>
        <p className={`text-center text-gray-600 ${styles.fadeIn}`}>
          At A² Crypto, our focus is on helping you navigate the crypto space
          with confidence. We offer guidance tailored to your needs, ensuring
          you have the tools to start, choose wisely, and optimize your crypto
          ventures.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
