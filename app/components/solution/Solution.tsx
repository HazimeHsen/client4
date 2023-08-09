import React from "react";
import Container from "../Container";
import Accordion from "../accordion/Accordion";

const Solution = () => {
  return (
    <div className="bg-[#F1F1F1] py-10">
      <Container>
        <div className="flex flex-col items-center md:flex-row justify-evenly ">
          <div className="mb-4">
            <div className="text-3xl font-semibold">
              <div>SOLUTIONS</div>
              <div>CUSTOMIZED</div>
              <div className="font-bold">FOR YOU</div>
            </div>
            <p className="font-semibold mt-5">
              Bark Media helps you through any stage of your business.
            </p>
          </div>
          <Accordion />
        </div>
      </Container>
    </div>
  );
};

export default Solution;
