"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { logos } from "@/constants/loungewearData";
import { LeafIcon } from "./ui/LeafIcon";
import { CartIcon } from "./ui/CartIcon";
import { SunMoonIcon } from "./ui/SunMoonIcon";
import { WavesIcon } from "./ui/WavesIcon";
import { Slider } from "./Slider";

export const LoungewearSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const mobileLogosPerPage = 3;
  const desktopLogosPerPage = 5;
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedLogos = isMobile
    ? [...logos, ...logos].slice(currentIndex, currentIndex + mobileLogosPerPage)
    : logos.slice(0, desktopLogosPerPage);

  const iconData = [
    { icon: <CartIcon width="26" height="26"/>, text: "Ethically sourced.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
    { icon: <LeafIcon />, text: "Responsibly made.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
    { icon: <SunMoonIcon width="26" height="26"/>, text: "Made for living in.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
    { icon: <WavesIcon width="22" height="18"/>, text: "Unimaginably comfortable.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat." },
  ];

  return (
    <section className="loungewear-section w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col justify-center w-full max-w-[1400px] mx-auto pb-10 lg:pb-[60px]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-[15px] lg:text-[20px] text-[#868787] mt-[76px] mb-6">as seen in</h1>

          <div className="flex justify-center gap-5 lg:gap-0 overflow-hidden items-center">
            {displayedLogos.map((logo) => (
              <div key={logo.id} className={`relative ${logo.className}`}>
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
              </div>
            ))}
          </div>

          {isMobile && (
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex % logos.length === index ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}

          <h1 className="mt-[42px] xl:mt-28 text-[26px] xl:text-[32px] text-[#01005B] mx-auto lg:ml-24 text-center lg:text-start w-[330px] lg:w-full">
            Loungewear you can be proud of.
          </h1>

          <div className="flex flex-col lg:flex-row lg:justify-center gap-0 lg:gap-[186px]">
            <div className="flex flex-col gap-6 w-[244px] lg:w-[570px] mx-auto lg:mx-0 order-2 lg:order-1 mt-[60px]">
              {iconData.map((item, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start gap-0 lg:gap-8">
                  <div className="flex justify-center items-center mx-auto lg:mx-0 rounded-full bg-[#F9F0E5] w-[42px] h-[42px] flex-shrink-0">
                    <div className="relative">{item.icon}</div>
                  </div>

                  <div className="flex flex-col items-center lg:items-start">
                    <p className="text-[20px] lg:text-[22px] text-[#01005B] mt-5 lg:mt-0 lg:text-start">
                      {item.text}
                    </p>
                    <p className="text-[14px] lg:text-[15px] text-[#676869] mt-5 lg:mt-3.5 lg:text-start">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center order-1 lg:order-2 mt-6 lg:mt-0 lg:ml-8">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
