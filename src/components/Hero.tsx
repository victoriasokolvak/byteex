import Image from "next/image";
import { SunMoonIcon } from "./ui/SunMoonIcon";
import { CartIcon } from "./ui/CartIcon";
import { WavesIcon } from "./ui/WavesIcon";
import { imageData } from "@/constants/heroImagesData";
import { ChooseOutfitButton } from "./ChooseOutfitButton";

export const Hero = () => {
  const iconData = [
    { icon: <SunMoonIcon />, text: "Beautiful, comfortable loungewear for day or night." },
    { icon: <CartIcon />, text: "No wasteful extras, like tags or plastic packaging." },
    { icon: <WavesIcon />, text: "Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt." },
  ];

  return (
    <section className="w-full justify-center items-center">
      <div className="w-full flex items-center justify-center h-9 bg-[#F9F0E5]">
        <p className="text-[11px] text-center text-[#565656]">
          <span className="hidden lg:inline">
            CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
          </span>
          <span className="text-[#676869] mx-2 hidden lg:inline"> | </span>
            FREE SHIPPING on orders &gt; $200
          <span className="text-[#676869] mx-2 hidden lg:inline"> | </span>
          <span className="hidden lg:inline">
            easy 45 day return window.
          </span>
        </p>
      </div>

      <div className="flex justify-center w-full max-w-[1400px] mx-auto pb-[86px] lg:pb-[60px]">
        <div className="flex flex-col justify-center">
          <div className="relative mx-auto lg:mx-0 w-[200px] h-9 mt-3.5 lg:mt-8">
            <Image 
              src='./Logo.svg'
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="mt-3.5 xl:mt-[62px] text-[26px] xl:text-[38px] max-w-[592px] text-[#01005B] mx-auto lg:mx-0 text-center lg:text-start">
            Don&apos;t apologize for being comfortable.
          </h2>

          <div className="flex flex-col lg:flex-row lg:gap-[100px] xl:gap-[120px] justify-center">
            <div className="order-2 lg:order-1">
              <div className="flex flex-col gap-6 mt-6 mx-auto xl:mx-0 w-[335px] lg:w-[425px] justify-center">
                {iconData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="flex justify-center items-center rounded-full bg-[#F9F0E5] w-8 h-8 flex-shrink-0">
                      <div className="relative">{item.icon}</div>
                    </div>
                    <p className="text-[13px] text-[#676869]">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start mt-7 xl:mt-9">
                <ChooseOutfitButton />
              </div>
            </div>

            <div className="flex justify-center order-1 lg:order-2 mt-4 xl:-mt-22 h-[244px] xl:h-[422px] items-center">
              <div className="flex gradient-block h-[100px] w-[70px] xl:w-[134px] xl:h-[189px] -mr-8 xl:-mr-16"></div>
              <div className="flex items-center justify-center relative">
                {imageData?.map((img, index) => (
                  <div key={index} className={`relative ${img.className}`}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex gradient-block h-[100px] w-[70px] xl:w-[134px] xl:h-[189px] -ml-8 xl:-ml-16"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
