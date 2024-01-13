// import FrontendIllustration from "@/icons/FrontendIllustration";
import FrontendIllustration from "../icons/frontendIllustration.png";
import BackendIllustration from "../icons/backendIllustration.png";
import { useSkillStore } from "@/store/store";
import Image from "next/image";

function SkillCard({ className, children, id }) {
  const { skillInView } = useSkillStore((state) => state);
  return (
    <div
      className={`absolute inset-0  w-full h-full bg-gradient-to-br border border-white/10 before:inset-x-0 before:-top-0 before:bg-[radial-gradient(closest-side,rgba(255,255,255,0.8),transparent)] before:absolute before:h-[1.5px] p-8 rounded-3xl ${className} ${
        skillInView === id ? "opacity-1" : "opacity-0"
      } transition-all duration-300`}
    >
      {children}
    </div>
  );
}

export function FrontEnd({ id }) {
  return (
    <SkillCard id={id} className="bg-[var(--background-color)] flex justify-center items-center">
      <Image src={FrontendIllustration} alt="" width={1000} height={1000}/> 
    </SkillCard>
  );
}
export function BackEnd({ id }) {
  return (
    <SkillCard id={id} className="bg-[var(--background-color)] flex justify-center items-center">
      <Image src={BackendIllustration} alt="" width={1000} height={1000}/> 
    </SkillCard>
  );
}
export function WebDesign({ id }) {
  return (
    <SkillCard id={id} className="bg-yellow-900/10">
      WebDesign
    </SkillCard>
  );
}
export function MotionGraphic({ id }) {
  return (
    <SkillCard id={id} className="bg-green-900/10">
      MotionGraphic
    </SkillCard>
  );
}
export function GraphicDesign({ id }) {
  return (
    <SkillCard id={id} className="bg-cyan-900/10">
      GraphicDesign
    </SkillCard>
  );
}
