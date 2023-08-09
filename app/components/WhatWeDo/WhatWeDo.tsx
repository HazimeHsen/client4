import Image from "next/image";
import React from "react";
import Container from "../Container";

const WhatWeDo = () => {
  const data = [
    {
      title: "BRANDING",
      text: [
        "Compelling brand identities: logos, design, full kits.",
        "Striking brand elements for impact.",
        "Expert guidance for strong brand presence.",
      ],
      image: "/images/1.gif",
    },
    {
      title: "CONTENT",
      text: [
        "Engaging graphics and videos.",
        "Tailored content for brand objectives.",
        "Consistent quality and relevance.",
      ],
      image: "/images/2.gif",
    },
    {
      title: "STRATEGY",
      text: [
        "Growth-driven marketing plans.",
        "Industry-leading insights for informed decision making.",
        "Optimized positioning for visibility and conversions.",
      ],
      image: "/images/3.gif",
    },
  ];
  return (
    <Container>
      <div className="w-full flex justify-center mt-10 py-5">
        <div>
          <h1 className="font-bold text-center text-3xl w-full">WHAT WE DO</h1>
          <div className="flex flex-col justify-center w-full">
            {data.map((info) => (
              <div
                className="flex flex-col md:flex-row mt-10 items-center w-full"
                key={info.title}>
                <div>
                  <Image
                    src={info.image}
                    width={200}
                    height={200}
                    alt={info.title}
                  />
                </div>
                <div className="border-l-4 border-[#F7931E] pl-8 w-full">
                  <h2 className="font-bold text-xl text-[#F7931E]">
                    {info.title}
                  </h2>
                  <div className="flex flex-col justify-center font-semibold text-gray-500">
                    {info.text.map((text) => (
                      <div className="w-full" key={text}>
                        <ul className="mb-1 list-disc w-full">
                          <li className="w-full">{text}</li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
