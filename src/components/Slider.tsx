"use client";

import "swiper/css";
import 'swiper/css/navigation';
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from 'swiper/modules';
import { ArrowSwiper } from "./ui/ArrowSwiper";
import { useRef, useState, useEffect } from "react";
import { imageSwiperData } from "@/constants/heroImagesData";

export const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const mainSwiperRef = useRef<SwiperClass | null>(null);
  const thumbsSwiperRef = useRef<SwiperClass | null>(null);

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

  useEffect(() => {
    if (mainSwiperRef.current && thumbsSwiperRef.current) {
      mainSwiperRef.current.on('slideChange', () => {
        const activeIndex = mainSwiperRef.current?.activeIndex || 0;
        if (thumbsSwiperRef.current && thumbsSwiperRef.current.activeIndex !== activeIndex) {
          thumbsSwiperRef.current.slideTo(activeIndex);
        }
      });
    }
  }, [thumbsSwiper]);
  
  return (
    <div className="flex relative flex-col items-center w-[302px] h-[452px] xl:h-[648px] xl:w-[432px]">
      <div className="relative w-[302px] h-[452px] xl:h-[648px] xl:w-[432px]">
        <Swiper
          modules={[Navigation, Thumbs]}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          spaceBetween={50}
          navigation={false}
          slidesPerView={1}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full h-full"
          loop={true}
        >
          {imageSwiperData.map((image) => (
            <SwiperSlide key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex justify-center w-[110px]">
        <Swiper
          onSwiper={(swiper: SwiperClass) => {
            thumbsSwiperRef.current = swiper;
            setThumbsSwiper(swiper);
          }}
          loop={true}
          spaceBetween={7}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="w-full h-full"
        >
          {imageSwiperData.map((image) => (
            <SwiperSlide key={image.src} className="group">
              <div className="w-[22px] h-[22px] lg:w-8 lg:h-8 relative cursor-pointer
                              group-[.swiper-slide-thumb-active]:border-2
                            group-[.swiper-slide-thumb-active]:border-white">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute flex justify-between w-[352px] xl:w-[504px] top-1/2 -translate-y-1/2">
        <button 
          className="cursor-pointer p-2 xl:p-4 z-20" 
          onClick={goToPrev} 
          title="Go to previous slide"
          aria-label="Previous slide"
        >
          <div className="w-[7px] h-[14px] rotate-180">
            <ArrowSwiper />
          </div>
        </button>
        <button 
          className="cursor-pointer p-2 xl:p-4 z-20" 
          onClick={goToNext} 
          title="Go to next slide"
          aria-label="Next slide"
        >
          <div className="w-[7px] h-[14px]">
            <ArrowSwiper />
          </div>
        </button>
      </div>
    </div>
  );
};
