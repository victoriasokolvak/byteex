import { BeYourselfSection } from "@/components/BeYourselfSection";
import { ComfortSection } from "@/components/ComfortSection";
import { Hero } from "@/components/Hero";
import { ImagesLine } from "@/components/ImagesLine";
import { LoungewearSection } from "@/components/LoungewearSection";

export default function Home() {

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Hero />
      <LoungewearSection />
      <BeYourselfSection />
      <ComfortSection />
      <ImagesLine />
    </div>
  );
}
