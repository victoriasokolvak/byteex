'use client';

import Image from "next/image";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MinusIcon } from './ui/MinusIcon';
import { PlusIcon } from './ui/PlusIcon';
import { faqs, imageFAQData } from "@/constants/FAQData";
import { ChooseOutfitButton } from "./ChooseOutfitButton";
import { StarIcon } from "./ui/StarIcon";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className='flex flex-col justify-center w-full max-w-[1400px] mx-auto pb-10 lg:pb-[60px] lg:px-8'>
        <div className='flex justify-center gap-[88px]'>
          <div className="flex flex-col w-full max-w-[630px] px-11 lg:p-0">
            <h2 className="text-[26px] xl:text-[32px] text-[#01005B] mx-auto mb-14 text-center lg:text-start w-[330px] lg:w-full">
              Frequently asked questions.
            </h2>
            {faqs.map((faq, index) => (
              <div key={index} className={`py-4 border-b-[1px] border-[#EAEAEA] ${index === 0 ? 'border-t-[1px]' : ''}`}>
                <button
                  className="w-full flex justify-between items-center text-[18px] text-left text-[#01005B]"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <div className='flex justify-center items-center cursor-pointer h-8 w-8'>
                    {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </button>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-[15px] text-[#676869]"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

          <div className="relative hidden xl:flex items-center justify-center h-[600px] w-[430px]">
            <div className="flex absolute top-14 left-14 gradient-block h-[187px] w-[149px]"></div>

            {imageFAQData.map((img, index) => (
              <div key={index} className={img.className}>
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}

            <div className="flex absolute bottom-20 right-8 gradient-block h-[187px] w-[149px]"></div>
          </div>
        </div>

        <div className="flex justify-center mt-10 lg:hidden">
          <ChooseOutfitButton />
        </div>
          <div className="flex justify-center items-center gap-3.5 mt-2.5 lg:hidden">
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
