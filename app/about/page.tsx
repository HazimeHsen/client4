"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Container from "../components/Container";
const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      id="about"
      className="py-10">
      <h1 className="font-bold text-3xl text-center mb-8">About Us</h1>
      <Container>
        <div className="">
          <div className="relative h-[250px] my-5">
            <Image
              src="/images/about3.jpg"
              alt="about"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              <span className="font-bold">
                Greetings, I'm Anthony Antoun, the founder of A² Crypto
              </span>
              . My journey into the crypto world is not your typical one. With a
              background in civil engineering, I achieved top honors during my
              university years and embarked on an immensely successful career
              spanning various countries and prestigious companies, including
              France, Canada, Dubai, and Lebanon. Establishing my own thriving
              civil engineering office in Lebanon was a pinnacle achievement.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              Mathematics and numbers have always fascinated me, driving my
              analytical mindset. As my career flourished, I stumbled upon the
              captivating realm of cryptocurrencies. What started as curiosity
              soon transformed into a deep exploration. I was drawn to the
              crypto space due to its fusion of numbers and groundbreaking
              technology, which aligned perfectly with my passions.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              Venturing into this dynamic space came with its share of
              challenges. Like many, I faced setbacks and experienced the sting
              of market volatility. However, these experiences became invaluable
              lessons, teaching me the ins and outs of the crypto landscape. I
              recognized that the crypto world was a space where learning was
              continuous, and adapting to change was imperative.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              As my involvement in the Web3 landscape deepened over the years,
              an idea crystallized in my mind. With a desire to share my
              knowledge and protect others from the pitfalls I encountered, I
              founded A² Crypto. This platform is dedicated to empowering
              individuals to navigate the crypto space safely and with
              confidence.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              At A² Crypto, our mission is to provide you with the tools,
              understanding, and fundamental insights to make informed decisions
              in the crypto world. I firmly believe that knowledge is the key to
              success in this ever-evolving realm. By leveraging my background
              in numbers, my penchant for technology, and my firsthand
              experiences, I aspire to help you build a strong foundation and
              stay ahead in the exciting journey of decentralized technologies.
            </p>
            <p className="md:text-xl text-start font-semibold text-sm leading-relaxed mb-4">
              Join us at A² Crypto as we embark on a journey of empowerment,
              innovation, and growth in the Web3 world. Together, we'll navigate
              the complexities, seize opportunities, and build a future where
              crypto is not just a challenge, but a pathway to success.
            </p>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
