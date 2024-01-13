import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function WhyI() {
  //   const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    margin: "-50% 100px -10% 0px",
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      animate("h3", { opacity: 1 }, { duration: 1.5, delay: stagger(0.2) });
    }
  }, [isInView, animate]);

  const features = [
    {
      // icon: ,
      title: "Timeless design",
      paragraph:
        "Run your digital product for years without worries about being outdated. Our design is ahead of time.",
    },
    {
      // icon: ,
      title: "Business-oriented solutions",
      paragraph:
        "We help our clients succeed concentrating our efforts on business goals and striving to achieve them no matter what.",
    },
    {
      // icon: ,
      title: "Deep research",
      paragraph:
        "We do our own research into your business area and market. Once we know all there is to know, we can give you exactly what your business needs.",
    },
    {
      // icon: ,
      title: "Reliable partner",
      paragraph:
        "Our relationship with you is 100% transparent and built on trust. We believe friendliness is key to any successful long-term partnership.",
    },
    {
      // icon: ,
      title: "Out-of-the-box design",
      paragraph:
        "What we offer are custom-built solutions. We love experimenting and breaking rules! No boring old templates here.",
    },
    {
      // icon: ,
      title: "Increasing value",
      paragraph:
        "Do you want to increase the value of your product? How about more customer loyalty and engagement? We know you do, so we create design strategies to do just that!",
    },
  ];

  return (
    <div className="min-h-screen  bg-white text-left text-black  flex justify-center items-center">
      <div className="container py-16 md:py-0">
        <motion.h4
          className={`${
            isInView ? "blur-0" : " blur-sm"
          } transition-all duration-500 text-center md:text-left mb-12 md:mb-24`}
        >
          What&apos;s our secret?
        </motion.h4>
        <div
          ref={scope}
          className=" text-center md:text-left grid md:grid-cols-2 lg:grid-cols-3 gap-20 "
        >
          {features.map((el) => (
            <div key={el.title} className="">
              <div className=" mb-8 mx-auto md:mx-0 relative before:inset-x-0 before:-top-0 before:bg-[radial-gradient(closest-side,rgba(0,0,0,0.3),transparent)] before:absolute before:h-[0.5px] rounded-xl w-20 h-20 bg-[rgba(0,0,0,0.1)] border border-black/10"></div>
              <motion.h3
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: 1 }}
                className="font-semibold opacity-0 text-xl mb-2"
              >
                {el.title}
              </motion.h3>
              <p className="text-base text-black/50 font-medium">
                {el.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
