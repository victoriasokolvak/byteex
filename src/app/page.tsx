import { Hero } from "@/components/Hero";
import { LoungewearSection } from "@/components/LoungewearSection";

export default function Home() {

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Hero />
      <LoungewearSection />
    </div>
  );
}
