"use client";

import Image from "next/image";
import { ChooseOutfitButton } from "./ChooseOutfitButton";
import { StarIcon } from "./ui/StarIcon";
import { ClockIcon } from "./ui/ClockIcon";
import { TruckIcon } from "./ui/TruckIcon";
import { CheckIcon } from "./ui/CheckIcon";
import { CartIcon } from "./ui/CartIcon";
import { imageData } from "@/constants/finalSectionData";

export const FinalSection = () => {
  const impactData = [
      { icon: <TruckIcon width="26" height="26" color="#676869" />, description: "FREE Shipping on Orders over $200" },
      { icon: <CheckIcon />, description: "Over 500+ 5 Star Reviews Online" },
      { icon: <CartIcon color="#676869" />, description: "Made ethically and responsibly." }
    ];

  return (
    <section className="final-section w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto pb-12 lg:pb-[83px] lg:px-8">
        <div className="flex flex-col justify-center items-center w-full">
          
          <h1 className="mt-[57px] lg:mt-[75px] text-[26px] lg:text-[32px] text-[#01005B] text-center">
            Find something you love.
          </h1>

          <p className="flex lg:hidden mt-6 text-[15px] text-center text-[#676869] max-w-[385px] lg:max-w-[612px]">
            Click below to browse our collection!
          </p>

          <p className="hidden lg:flex mt-7 text-[15px] text-center text-[#676869] max-w-[385px] lg:max-w-[612px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
            facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
          </p>

            <div className="flex justify-center mt-4 xl:mt-12 h-[244px] xl:h-[422px] items-center">
              <div className="flex gradient-block h-[100px] w-[70px] xl:w-[134px] xl:h-[189px] -mr-10 xl:-mr-16"></div>
              <div className="flex items-center justify-center relative">
                {imageData?.map((img, index) => (
                  <div key={index} className={`relative ${img.className}`}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex gradient-block h-[100px] w-[70px] xl:w-[134px] xl:h-[189px] -ml-10 xl:-ml-16"></div>
            </div>

          <div className="flex flex-col justify-center mt-10 lg:mt-14">
            <ChooseOutfitButton />

            <div className="flex lg:hidden justify-center items-center gap-3.5 mt-2.5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index}>
                    <StarIcon />
                  </div>
                ))}
              </div>

              <p className="text-[12px] text-[#828282]">Over 500+ 5 Star Reviews Online</p>
            </div>

            <div className="hidden lg:flex justify-center items-center gap-0.5 mt-1.5">
              <ClockIcon /> 
              <p className="text-[10px] text-[#1FAD40] mr-3">Ships in 1-2 Days</p>

              <div className="relative mx-auto lg:mx-0 w-[243px] h-[22px]">
                <Image 
                  src='./Cards.svg'
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

            <div className="hidden lg:flex justify-center items-center mt-3.5 lg:mt-[26px] px-12">
              {impactData.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center text-center w-[210px] pl-6 lg:py-0 gap-3 ${
                    index !== 0
                      ? "border-t border-b lg:border-l lg:border-b-0 lg:border-t-0 border-[#C4C4C480]"
                      : ""
                  } ${index === 2 ? "lg:flex hidden" : ""}`}
                >
                  <div className="flex justify-center items-center min-w-[33px] min-h-[33px] w-[33px] h-[33px] bg-[#6666661A] rounded-full">
                    {item.icon}
                  </div>
                  <p className="text-[#676869] text-[14px] text-start">{item.description}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};
