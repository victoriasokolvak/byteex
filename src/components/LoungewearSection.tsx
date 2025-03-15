"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getData } from "../../lib/fetchData";
import { LoungewearAttributes } from "@/types/loungewearProps";
import { logos } from "@/constants/logosData";
import { LeafIcon } from "./ui/LeafIcon";
import { CartIcon } from "./ui/CartIcon";
import { SunMoonIcon } from "./ui/SunMoonIcon";
import { WavesIcon } from "./ui/WavesIcon";
import { Slider } from "./Slider";

export const LoungewearSection = () => {
  const [loungewears, setLoungwears] = useState<LoungewearAttributes | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const mobileLogosPerPage = 3;
  const desktopLogosPerPage = 5;
  
  useEffect(() => {
    async function fetchLoungwears() {
      try {
        const data = await getData("loungewears");
        setLoungwears(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLoungwears();

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedLogos = isMobile
    ? [...logos, ...logos].slice(currentIndex, currentIndex + mobileLogosPerPage)
    : logos.slice(0, desktopLogosPerPage);

  const iconData = [
    { icon: <CartIcon width="26" height="26"/>, text: loungewears?.list_title1 || "Loading...", description: loungewears?.list_description1 || "Loading..." },
    { icon: <LeafIcon />, text: loungewears?.list_title2 || "Loading...", description: loungewears?.list_description2 || "Loading..." },
    { icon: <SunMoonIcon width="26" height="26"/>, text: loungewears?.list_title3 || "Loading...", description: loungewears?.list_description3 || "Loading..." },
    { icon: <WavesIcon width="22" height="18"/>, text: loungewears?.list_title4 || "Loading...", description: loungewears?.list_description4 || "Loading..." },
  ];

  return (
    <section className="loungewear-section w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col justify-center w-full max-w-[1400px] mx-auto pb-10 lg:pb-[60px]">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-[15px] lg:text-[20px] text-[#868787] mt-[76px] mb-6">as seen in</h1>

          <div className="flex justify-center gap-5 lg:gap-0 overflow-hidden items-center">
            {displayedLogos.map((logo, index) => (
              <div key={index} className={`relative ${logo.className}`}>
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

          <h2 className="mt-[42px] xl:mt-28 text-[26px] xl:text-[32px] text-[#01005B] mx-auto lg:ml-24 text-center lg:text-start w-[330px] lg:w-full">
            {loungewears ? loungewears.title : "Loading..."}
          </h2>

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
                      {item.description || "Loading..."}
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
