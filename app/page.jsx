"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Logos from "@/components/Logos";
import {
  easeInOut,
  easeOut,
  motion,
  stagger,
  useAnimate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Scroll from "@/components/Scroll";
import WhyI from "@/components/WhyI";
import SkillSection from "@/components/SkillSection";

import GetInTouch from "@/components/GetInTouch";
import TechnologyStack from "@/components/TechnologyStack";
import LaptopSection from "@/components/LaptopSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import Timeline from "@/components/Timeline";
import AgeSection from "@/components/AgeSection";
import MetaLogo from "@/icons/MetaLogo";
import EdaLogo from "@/icons/EdaLogo";
import IdentityLogo from "@/icons/IdentityLogo";
import SynergySection from "@/components/SynergySection";
import BrandingSection from "@/components/BrandingSection";

export default function Home() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end center"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    damping: 80,
    stiffness: 400,
    ease: easeOut,
  });

  const scale = useTransform(smoothScroll, [0.05, 0.5], [1, 0.92]);
  // const y = useTransform(smoothScroll, [0.05, 0.5], [0, 1000]);

  return (
    <main className="bg-[var(--background-color)] ">
      <Hero />
      <motion.section
        style={{ scale }}
        ref={ref}
        className="text-center origin-[50%_100%] relative z-10  text-white "
      >
        {/* <Logos /> */}
        <Scroll />
        <TechnologyStack />
        <SkillSection />
        <BrandingSection />
        <SynergySection />
        {/* <AgeSection /> */}
        {/* <LaptopSection /> */}
        {/* <Timeline /> */}
        <WorkingProcessSection />
        <WhyI />
        {/* <div className="py-60 px-16  bg-white text-[var(--background-color)]">
          <div className="mb-20 ">
            <h4 className="capitalize mb-4">our clients</h4>
            <p className="text-black/70">we serve them with love</p>
          </div>

          <div className="grid grid-cols-5 gap-20 w-1/2 mx-auto ">
            <MetaLogo className={"text-black w-full h-full"} />
            <EdaLogo className={"text-black w-full h-full"} />
            <IdentityLogo className={"text-black w-full h-full"} />
            <MetaLogo className={"text-black w-full h-full"} />
            <EdaLogo className={"text-black w-full h-full"} />
            <IdentityLogo className={"text-black w-full h-full"} />
          </div>
          <p></p>
        </div> */}
        <GetInTouch />
      </motion.section>
      <Footer smoothScroll={smoothScroll} />
    </main>
  );
}
