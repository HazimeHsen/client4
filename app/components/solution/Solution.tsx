import React from "react";
import Container from "../Container";
import Accordion from "../accordion/Accordion";

const Solution = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col items-center md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold text-gray-800">
              Explore Our Insights
            </h1>
            <p className="mt-2 text-gray-600 max-w-md">
              Discover answers to some of the most common questions we receive.
              If you're curious about certain concepts or phenomena, our FAQ
              section is here to provide clarity and knowledge.
            </p>
          </div>
          <Accordion />
        </div>
      </Container>
    </div>
  );
};

export default Solution;
