"use client";
import Container from "../Container";
import Accordion from "../accordion/Accordion";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Solution = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2, // Percentage of the element in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="py-10">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
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
        </motion.div>
      </Container>
    </div>
  );
};

export default Solution;
