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
        <div className={`absolute top-10 right-5 animate-widthAnimation  `}>
          <svg
            fill="#cab169"
            height="80px"
            width="80px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            viewBox="0 0 256.00 256.00"
            stroke="#cab169"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M122.7,109.9l0.1-30.1c8.5,0,35.2-2.6,35.2,15.2C157.9,112,131.2,109.9,122.7,109.9z M164.8,141.8L164.8,141.8 c0.1-19.5-32-16.7-42.2-16.7l-0.1,33.2C132.7,158.3,164.8,160.5,164.8,141.8z M10.6,119.9C10.6,54.9,62.8,2,127.8,2 c65,0,117.5,52.5,117.5,117.5c0,65-52.9,117.5-117.5,117.5S10.6,184.6,10.6,119.9z M98.1,113.5c-0.5,0-1,0-1.6,0L96.3,153 c-0.3,1.9-1.4,5-5.7,5c0.2,0.2-11,0-11,0l-3.1,18l19.6,0.1c3.7,0,7.2,0.1,10.8,0.1l-0.1,25l15.1,0.1l0.1-24.8 c4.1,0.1,8.1,0.1,12,0.2l-0.1,24.7l15.1,0.1l0.1-25c25.3-1.4,43.1-7.7,45.4-31.5c1.8-19.2-7.1-27.7-21.5-31.2 c8.8-4.4,14.2-12.2,13-25.3h0c-1.7-17.9-17-23.9-36.5-25.7l0.1-24.8l-15.1-0.1L134.5,62c-4,0-8,0.1-12,0.1l0.1-24.3l-15.1-0.1 l-0.1,24.8c-3.3,0.1-6.5,0.1-9.6,0.1l0-0.1l-20.8-0.1L77,78.5c0,0,11.1-0.2,10.9,0c6.1,0,8.1,3.6,8.6,6.6l-0.1,28.2 C96.9,113.4,97.5,113.4,98.1,113.5z"></path>{" "}
            </g>
          </svg>
        </div>
        <div className={`absolute bottom-3 left-3 animate-widthAnimation `}>
          <svg
            fill="#cab169"
            height="80px"
            width="80px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            viewBox="0 0 256.00 256.00"
            stroke="#cab169"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M122.7,109.9l0.1-30.1c8.5,0,35.2-2.6,35.2,15.2C157.9,112,131.2,109.9,122.7,109.9z M164.8,141.8L164.8,141.8 c0.1-19.5-32-16.7-42.2-16.7l-0.1,33.2C132.7,158.3,164.8,160.5,164.8,141.8z M10.6,119.9C10.6,54.9,62.8,2,127.8,2 c65,0,117.5,52.5,117.5,117.5c0,65-52.9,117.5-117.5,117.5S10.6,184.6,10.6,119.9z M98.1,113.5c-0.5,0-1,0-1.6,0L96.3,153 c-0.3,1.9-1.4,5-5.7,5c0.2,0.2-11,0-11,0l-3.1,18l19.6,0.1c3.7,0,7.2,0.1,10.8,0.1l-0.1,25l15.1,0.1l0.1-24.8 c4.1,0.1,8.1,0.1,12,0.2l-0.1,24.7l15.1,0.1l0.1-25c25.3-1.4,43.1-7.7,45.4-31.5c1.8-19.2-7.1-27.7-21.5-31.2 c8.8-4.4,14.2-12.2,13-25.3h0c-1.7-17.9-17-23.9-36.5-25.7l0.1-24.8l-15.1-0.1L134.5,62c-4,0-8,0.1-12,0.1l0.1-24.3l-15.1-0.1 l-0.1,24.8c-3.3,0.1-6.5,0.1-9.6,0.1l0-0.1l-20.8-0.1L77,78.5c0,0,11.1-0.2,10.9,0c6.1,0,8.1,3.6,8.6,6.6l-0.1,28.2 C96.9,113.4,97.5,113.4,98.1,113.5z"></path>{" "}
            </g>
          </svg>
        </div>
        <div className={`absolute bottom-12 right-6 animate-widthAnimation `}>
          <svg
            fill="#cab169"
            height="80px"
            width="80px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            viewBox="0 0 256.00 256.00"
            stroke="#cab169"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M122.7,109.9l0.1-30.1c8.5,0,35.2-2.6,35.2,15.2C157.9,112,131.2,109.9,122.7,109.9z M164.8,141.8L164.8,141.8 c0.1-19.5-32-16.7-42.2-16.7l-0.1,33.2C132.7,158.3,164.8,160.5,164.8,141.8z M10.6,119.9C10.6,54.9,62.8,2,127.8,2 c65,0,117.5,52.5,117.5,117.5c0,65-52.9,117.5-117.5,117.5S10.6,184.6,10.6,119.9z M98.1,113.5c-0.5,0-1,0-1.6,0L96.3,153 c-0.3,1.9-1.4,5-5.7,5c0.2,0.2-11,0-11,0l-3.1,18l19.6,0.1c3.7,0,7.2,0.1,10.8,0.1l-0.1,25l15.1,0.1l0.1-24.8 c4.1,0.1,8.1,0.1,12,0.2l-0.1,24.7l15.1,0.1l0.1-25c25.3-1.4,43.1-7.7,45.4-31.5c1.8-19.2-7.1-27.7-21.5-31.2 c8.8-4.4,14.2-12.2,13-25.3h0c-1.7-17.9-17-23.9-36.5-25.7l0.1-24.8l-15.1-0.1L134.5,62c-4,0-8,0.1-12,0.1l0.1-24.3l-15.1-0.1 l-0.1,24.8c-3.3,0.1-6.5,0.1-9.6,0.1l0-0.1l-20.8-0.1L77,78.5c0,0,11.1-0.2,10.9,0c6.1,0,8.1,3.6,8.6,6.6l-0.1,28.2 C96.9,113.4,97.5,113.4,98.1,113.5z"></path>{" "}
            </g>
          </svg>
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
          Welcome to a world of possibilities where creativity meets technology.
          Join us in making a difference.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
