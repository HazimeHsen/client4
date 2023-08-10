import Image from "next/image";
import AutoTypeAnimation from "./components/auto-Type/AutoTypeAnimation";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import Solution from "./components/solution/Solution";
import LogoSlideShow from "./components/logoSlideShow/LogoSlideShow";
import ContactUs from "./components/contactus/ContactUs";

export default function Home() {
  return (
    <div className="flex-grow">
      <Hero />
      <WhatWeDo />
      <Solution />
      <About />
      <ContactUs />
    </div>
  );
}
