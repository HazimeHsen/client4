import React from "react";
import Image from "next/image";
import Container from "../Container";

const WhatWeDo = () => {
  const data = [
    {
      title: "Start with Confidence",
      text: [
        "Embarking on your crypto journey can be daunting, but we're here to simplify the process.",
        "We provide step-by-step live guidance to ensure you start your Web3 adventure with a solid foundation.",
      ],
      image: "/images/1.gif",
    },
    {
      title: "Choose Wisely",
      text: [
        "With so many options in the crypto space, finding what suits you best is key",
        "We provide insights that empower you to make informed decisions, aligning your choices with your goals and aspirations.",
      ],
      image: "/images/2.gif",
    },
    {
      title: "Optimize Your Path",
      text: [
        "The crypto landscape is ever-evolving, and we're here to help you stay ahead.",
        " Our optimization strategies and expert tips enable you to maximize your crypto experience, from security to portfolio management.",
      ],
      image: "/images/3.gif",
    },
    {
      title: "Fundamental Analysis",
      text: [
        "Our team includes experienced fundamental analysts who offer valuable insights into the underlying factors that drive the crypto market.",
        "Through in-depth research, we help you understand the projects and technologies you're investing in, enabling you to make well-informed decisions.",
      ],
      image: "/images/3.gif",
    },
  ];

  return (
    <div className="bg-[#F1F1F1]">
      <Container>
        <div className="w-full flex justify-center mt-10 py-5">
          <div className="max-w-4xl w-full">
            <h1 className="font-bold text-center text-4xl mb-4">
              Our Expertise
            </h1>
            <p className={`text-center text-gray-600 mb-5`}>
              Join us at A² Crypto, where we help you take control of your
              crypto future. We're here to support you every step of the way as
              you explore the exciting opportunities of the decentralized world.
            </p>
            {data.map((info) => (
              <div
                className="flex flex-col md:flex-row md:items-center mb-10"
                key={info.title}>
                <div className="md:w-1/4 w-full md:mr-8">
                  <Image
                    src={info.image}
                    width={100}
                    height={100}
                    alt={info.title}
                  />
                </div>
                <div className="md:w-3/4 w-full ">
                  <h2 className="font-bold text-xl underline justify-start text-[#cab169] mb-4">
                    {info.title}:
                  </h2>
                  <ul className="font-semibold text-gray-600 pl-8">
                    {info.text.map((text, index) => (
                      <li className="mb-2 list-disc" key={index}>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
