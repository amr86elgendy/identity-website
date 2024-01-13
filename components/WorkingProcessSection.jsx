import useStaggeringEffect from "@/hooks/useStaggeringEffect";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  easeOut,
} from "framer-motion";
import React, { useRef } from "react";

const cards = [
  {
    title: "initiate",
    description:
      "It all starts with the strategy. We start each new project with a discovery phase that helps us to focus on understanding the user needs and context and to find deep insights rather than quick answers.",
    gradient: "bg-gradient-to-r from-[#00eeaf] to-[#00afd7]",
  },
  {
    title: "dedicate",
    description:
      "Good work requires focus and dedication. Our cooperation is based only on fully dedicated teams, who work closely with you from engagement to the product launch.",
    gradient: "bg-gradient-to-r from-[#13c0ec] to-[#794bfc]",
  },
  {
    title: "elevate",
    description:
      "Digital products are constantly evolving. We build long-term partnerships with our clients to make sure we not only help to launch successful products but optimize and grow them over time.",
    gradient: "bg-gradient-to-r from-[#8442f8] to-[#b536f3]",
  },
  {
    title: "navigate",
    description:
      "We design with a user-centric approach, using research and meticulous planning to navigate any problems you have. After all: design without research is not a viable long-term solution.",
    gradient: "bg-gradient-to-r from-[#bc52da] to-[#fc6cad]",
  },
  {
    title: "translate",
    description:
      "We apply design thinking which is an iterative process that helps knowledge translation and implementation practitioners get at the root of a problem, and incorporate meaningful feedback from end-users.",
    gradient: "bg-gradient-to-r from-[#ff7439] to-[#ffa708]",
  },
];

export default function WorkingProcessSection() {
  const targetRef = useRef();

  const { scrollYProgress: scrollYProgressForCircles } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });

  const smoothScrollForCircles = useSpring(scrollYProgressForCircles, {
    damping: 80,
    stiffness: 800,
    ease: easeOut,
  });

  const transform = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(-800px,0px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform2 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(800px,0px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform3 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(-390px,-600px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform4 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(390px,-600px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform5 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(-390px,600px,0px)", "translate3d(0px,0px,0px)"]
  );
  const transform6 = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    ["translate3d(390px,600px,0px)", "translate3d(0px,0px,0px)"]
  );
  const opacityCircles = useTransform(
    smoothScrollForCircles,
    [0.05, 0.15],
    [0, 1]
  );
  const textOpacity = useTransform(smoothScrollForCircles, [0.2, 0.3], [0, 1]);
  const bgColor = useTransform(
    smoothScrollForCircles,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "rgba(0, 238, 175, 0.0)",
      "rgba(0, 238, 175, 0.05)",
      "rgba(19, 192, 236, 0.05)",
      "rgba(132, 66, 248, 0.05)",
      "rgba(188, 82, 218, 0.05)",
      "rgba(255, 116, 57, 0.05)",
    ]
  );

  const scaleCircles = useTransform(
    smoothScrollForCircles,
    [0.15, 0.2],
    [1, 0.7]
  );

  const rotateCircles = useTransform(
    smoothScrollForCircles,
    [0.15, 1],
    [0, 1000]
  );
  const y = useTransform(smoothScrollForCircles, [0.2, 0.3], [0, -250]);

  return (
    <div ref={targetRef} className="h-[400vh] bg-white">
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky h-screen overflow-hidden top-0"
      >
        <div className="flex flex-col w-full h-full justify-center items-center">
          <motion.div
            style={{ scale: scaleCircles, y, rotateZ: rotateCircles }}
            className="[&>*]:w-24 [&>*]:h-24 [&>*]:rounded-full [&>*]:border-4 relative flex h-[180px] justify-center items-center"
          >
            <motion.div
              className="border-[#00eeaf]"
              style={{ transform: transform, opacity: opacityCircles }}
            />
            <motion.div
              className="border-[#13c0ec]"
              style={{ transform: transform2, opacity: opacityCircles }}
            />
            <motion.div
              style={{ transform: transform3, opacity: opacityCircles }}
              className="absolute top-0 left-6 border-[#8442f8]"
            />
            <motion.div
              style={{ transform: transform4, opacity: opacityCircles }}
              className="absolute top-0 right-6 border-[#bc52da]"
            />
            <motion.div
              style={{ transform: transform5, opacity: opacityCircles }}
              className="absolute bottom-0 left-6 border-[#ff7439]"
            />
            <motion.div
              style={{ transform: transform6, opacity: opacityCircles }}
              className="absolute bottom-0 right-6 border-[#794bfc]"
            />
          </motion.div>
          <motion.div className="w-full  px-6" style={{ y }}>
            <motion.h4
              style={{ opacity: textOpacity }}
              className="font-extrabold text-[var(--background-color)] mb-10"
            >
              Working Process
            </motion.h4>
            <div className="relative  text-center w-full flex flex-col justify-center items-center ">
              {cards.map((card, i, arr) => (
                <Card
                  key={i}
                  smoothScrollForCircles={smoothScrollForCircles}
                  index={i}
                  arrayLength={arr.length}
                >
                  <h4
                    className={`font-bold ${card.gradient} text-transparent bg-clip-text capitalize text-4xl tracking-tight mb-4`}
                  >
                    {card.title}
                  </h4>
                  <p className="text-black font-normal max-w-[50ch] mx-auto">
                    {card.description}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function Card({ arrayLength, index, smoothScrollForCircles, children }) {
  const y = useStaggeringEffect(
    smoothScrollForCircles,
    [0.2, 1],
    [500, index * 80],
    {
      arrayLength,
      index,
    }
  );
  const opacity = useStaggeringEffect(
    smoothScrollForCircles,
    [0.2, 1],
    [0, 1],
    {
      arrayLength,
      index,
    }
  );

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute top-0 rounded-3xl text-black bg-white p-8"
    >
      {children}
    </motion.div>
  );
}
