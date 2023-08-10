import React from "react";
import Image from "next/image";
import Container from "../Container";

const WhatWeDo = () => {
  const data = [
    {
      title: "BRANDING",
      text: [
        "Crafting compelling brand identities.",
        "Creating striking brand elements.",
        "Providing expert guidance for brand presence.",
      ],
      image: "/images/1.gif",
    },
    {
      title: "CONTENT",
      text: [
        "Designing engaging graphics and videos.",
        "Tailoring content to meet brand objectives.",
        "Ensuring consistent quality and relevance.",
      ],
      image: "/images/2.gif",
    },
    {
      title: "STRATEGY",
      text: [
        "Developing growth-oriented marketing plans.",
        "Offering industry-leading insights for informed decisions.",
        "Optimizing positioning for enhanced visibility and conversions.",
      ],
      image: "/images/3.gif",
    },
  ];

  return (
    <div className="bg-[#F1F1F1]">
      <Container>
        <div className="w-full flex justify-center mt-10 py-5">
          <div className="max-w-4xl w-full">
            <h1 className="font-bold text-center text-4xl mb-8">
              Our Expertise
            </h1>
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
                <div className="md:w-3/4 w-full border-l-4 border-[#cab169] pl-8">
                  <h2 className="font-bold text-xl underline justify-start text-[#cab169] mb-4">
                    {info.title}:
                  </h2>
                  <ul className="font-semibold text-gray-600">
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
