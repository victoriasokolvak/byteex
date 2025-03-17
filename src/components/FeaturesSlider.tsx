import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { CartIcon } from "./ui/CartIcon";
import { TruckIcon } from "./ui/TruckIcon";
import { SunMoonIcon } from "./ui/SunMoonIcon";
import { ArrowSwiper } from "./ui/ArrowSwiper";

export const FeaturesSlider = () => {
  const mainSwiperRef = useRef<SwiperClass | null>(null);

  const goToNext = () => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideNext();
    }
  };

  const goToPrev = () => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slidePrev();
    }
  };

  const features = [
    {
      icon: <CartIcon width="51" height="51"/>,
      title: "You save.",
      description: "Browse our comfort sets and save 15% when you bundle.",
    },
    {
      icon: <TruckIcon/>,
      title: "We ship.",
      description: "We ship your items within 1-2 days of receiving your order.",
      highlighted: true,
    },
    {
      icon: <SunMoonIcon width="51" height="51"/>,
      title: "You enjoy!",
      description: "Wear hernest around the house, out on the town, or in bed.",
    },
  ];

  return (
    <>
      <Swiper
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        modules={[Navigation]}
        navigation={false}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`h-72 w-72 rounded-lg flex flex-col justify-center items-center gap-3.5 p-8 mx-auto ${
                feature.highlighted ? "bg-[#F9F0E6]" : "bg-[#F0EEEF]"
              }`}
              >
              <div className="relative">{feature.icon}</div>
              <h3 className="text-[22px] text-[#01005B]">{feature.title}</h3>
              <p className="text-[15px] text-center text-[#676869]">{feature.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute flex justify-between w-[352px] lg:w-[504px] top-1/2 -translate-y-1/2 z-10">
        <button 
          className="cursor-pointer p-2 lg:p-4 z-20" 
          onClick={goToPrev} 
          title="Go to previous slide"
          aria-label="Previous slide"
        >
          <div className="w-[7px] h-[14px] rotate-180">
            <ArrowSwiper />
          </div>
        </button>
        <button 
          className="cursor-pointer p-2 lg:p-4 z-20" 
          onClick={goToNext} 
          title="Go to next slide"
          aria-label="Next slide"
        >
          <div className="w-[7px] h-[14px]">
            <ArrowSwiper />
          </div>
        </button>
      </div>
    </>
  );
};
