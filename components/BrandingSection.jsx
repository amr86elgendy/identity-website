import Image from "next/image";
import React, { useRef } from "react";
import firstPhoto from "@/icons/1.png";
import secondPhoto from "@/icons/2.png";
import thirdPhoto from "@/icons/3.png";
import forthPhoto from "@/icons/4.png";
import fifthPhoto from "@/icons/5.png";
import useStaggeringEffect from "@/hooks/useStaggeringEffect";
import { useScroll, motion } from "framer-motion";

const photos = [
  { id: 1, photo: firstPhoto },
  { id: 2, photo: secondPhoto },
  { id: 3, photo: thirdPhoto },
  { id: 4, photo: forthPhoto },
  { id: 5, photo: fifthPhoto },
];

export default function BrandingSection() {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });
  return (
    <div ref={targetRef}>
      <div className="mb-24">
        <h3 className="mb-8">Branding</h3>
        <p className="max-w-[55ch] mx-auto">
          The logo encapsulates the idea behind the brand. We know how to make
          it work for you. Colors add a touch of soul that will resonate better
          with your customers.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-24">
        {photos.map((p, i, arr) => (
          <ImageComponent
            arrayLength={arr.length}
            key={p.id}
            index={i}
            scrollYProgress={scrollYProgress}
            {...p}
          />
        ))}
        {/* <div>
          <Image src={firstPhoto} alt="" />
        </div>
        <div>
          <Image src={secondPhoto} alt="" />
        </div>
        <div>
          <Image src={thirdPhoto} alt="" />
        </div>
        <div>
          <Image src={forthPhoto} alt="" />
        </div>
        <div>
          <Image src={fifthPhoto} alt="" />
        </div> */}
      </div>
    </div>
  );
}

function ImageComponent({ photo, index, scrollYProgress, arrayLength }) {
  const opacity = useStaggeringEffect(scrollYProgress, [0, 1], [0.05, 1], {
    arrayLength,
    index,
  });

  return (
    <motion.div className="flex justify-center" style={{ opacity }}>
      <Image className="w-[90%]" src={photo} alt="" />
    </motion.div>
  );
}
