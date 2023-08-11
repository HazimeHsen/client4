"use client";
import React, { useState } from "react";

const Accordion = () => {
  const accordionItems = [
    {
      id: "accordion-button-1",
      title: "Stay Ahead in Web3 and Finance",
      content:
        "Embrace unbiased insights and unmatched news by joining our Telegram group today-NFA",
    },
    {
      id: "accordion-button-2",
      title: "Ready to Take a Gamble? ",
      content:
        "Join our Telegram group for high-risk, high-reward micro gem calls and seize the thrill of potential gains-NFA",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="md:max-w-[500px]">
      <div className="accordion">
        {accordionItems.map((item, index) => (
          <div key={item.id} className="accordion-item">
            <button
              id={item.id}
              className={
                index === activeIndex ? "active font-semibold" : "font-semibold"
              }
              onClick={() => toggleAccordion(index)}>
              <span className="accordion-title">{item.title}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            {index === activeIndex && (
              <div className="accordion-content pl-5">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
