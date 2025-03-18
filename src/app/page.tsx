import { BeYourselfSection } from "@/components/BeYourselfSection";
import { ComfortSection } from "@/components/ComfortSection";
import { Hero } from "@/components/Hero";
import { ImagesLine } from "@/components/ImagesLine";
import { LoungewearSection } from "@/components/LoungewearSection";
import { FAQSection } from "@/components/FAQSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { GreenImpactSection } from "@/components/GreenImpactSection";

export default function Home() {

  return (
    <div className="relative flex flex-col justify-center items-center">
      <Hero />
      <LoungewearSection />
      <BeYourselfSection />
      <ComfortSection />
      <ImagesLine />
      <ReviewsSection />
      <FAQSection />
      <GreenImpactSection />
    </div>
  );
}
