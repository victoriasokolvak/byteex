"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { StarIcon } from "./ui/StarIcon";
import { useRef } from "react";
import { ArrowSwiper } from "./ui/ArrowSwiper";
import { ChooseOutfitButton } from "./ChooseOutfitButton";
import { reviews } from "@/constants/reviewsData";

export const ReviewsSection = () => {
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

  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto pb-12 lg:pb-[60px] lg:px-8">
        <div className="flex flex-col relative justify-center items-center w-full mt-[38px] lg:mt-[76px]">
          <Swiper
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
            modules={[Navigation]}
            navigation={false}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-6xl"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="p-4">
                <div className="flex flex-col mx-auto p-9 bg-white shadow-lg rounded-xl border-[1px] border-[#EAEAEA] max-w-[300px] lg:max-w-[338px]">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#1C2E58] rounded-full mr-3.5"></div>
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <div key={index}>
                            <StarIcon width="10" height="10"/>
                          </div>
                        ))}
                      </div>
                      <h3 className="text-[15px] text-[#676869]">{review.name}</h3>
                    </div>

                  </div>
                  <p className="text-[12px] text-[#676869] leading-6 mt-3">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute flex justify-between w-[392px] lg:w-[1258px] top-1/2 -translate-y-1/2 z-10">
            <button 
              className="cursor-pointer p-2 lg:p-4 z-20" 
                onClick={goToPrev} 
                title="Go to previous slide"
                aria-label="Previous slide"
              >
                <div className="flex rotate-180">
                  <ArrowSwiper />
                </div>
              </button>
              <button 
                className="cursor-pointer p-2 lg:p-4 z-20" 
                onClick={goToNext} 
                title="Go to next slide"
                aria-label="Next slide"
              >
              <div className="flex">
                <ArrowSwiper />
              </div>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-7 xl:mt-16">
          <ChooseOutfitButton />
          </div>
            <div className="flex justify-center items-center gap-3.5 mt-2.5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index}>
                    <StarIcon />
                  </div>
                ))}
              </div>
            <p className="text-[12px] text-[#828282]">Over 500+ 5 Star Reviews Online</p>
        </div>
      </div>
    </section>
  );
};
