import React from "react";
import Container from "../Container";
import Accordion from "../accordion/Accordion";

const Solution = () => {
  return (
    <div className="bg-[#F1F1F1] py-10">
      <Container>
        <div className="flex flex-col items-center md:flex-row justify-evenly ">
          <div className="mb-4">
            <div className="text-xl font-semibold flex">
              Frequently Asked Questions
            </div>
          </div>
          <Accordion />
        </div>
      </Container>
    </div>
  );
};

export default Solution;
