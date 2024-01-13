import Lottie from "lottie-react";
import React, { useRef } from "react";
import animation from "../icons/synergyAnimation.json";

export default function SynergySection() {
  const ref = useRef();
  const lottieRef = useRef(null);
  return (
    <div ref={ref} className="h-[500vh]  relative">
      <div className=" sticky z-50 overflow-hidden container inset-0 h-screen flex justify-center items-center">
        <Lottie
          // style={{ width: "550px" }}
          lottieRef={lottieRef}
          className=" box-border md:w"
          onDOMLoaded={() =>
            ref
              ? (lottieRef.current.animationContainerRef.current = ref.current)
              : null
          }
          interactivity={{
            mode: "scroll",
            actions: [
              {
                visibility: [0.2, 1],
                type: "seek",
                frames: [0, 65],
                
              },
            ],
          }}
          animationData={animation}
        />
      </div>
    </div>
  );
}
