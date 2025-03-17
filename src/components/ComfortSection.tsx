"use client";

import { ChooseOutfitButton } from "./ChooseOutfitButton";
import { FeaturesSlider } from "./FeaturesSlider";
import { CartIcon } from "./ui/CartIcon";
import { StarIcon } from "./ui/StarIcon";
import { SunMoonIcon } from "./ui/SunMoonIcon";
import { TruckIcon } from "./ui/TruckIcon";

export const ComfortSection = () => {
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
    <section className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto pb-12 lg:pb-[60px] lg:px-8">
        <div className="flex flex-col justify-center items-center w-full">
          
          <h1 className="mt-[57px] lg:mt-[75px] text-[26px] lg:text-[32px] text-[#01005B] text-center">
            Comfort made easy
          </h1>

          <div className="hidden lg:flex justify-center items-center gap-10 mt-6 lg:mt-[46px] w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`h-72 w-72 lg:h-80 lg:w-[346px] rounded-lg flex flex-col justify-center items-center gap-3.5 p-8 ${
                  feature.highlighted ? "bg-[#F9F0E6]" : "bg-[#F0EEEF]"
                }`}
              >
                <div className="relative">{feature.icon}</div>
                <h3 className="text-[22px] text-[#01005B]">{feature.title}</h3>
                <p className="text-[15px] text-center text-[#676869]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center relative lg:hidden w-full mt-6">
            <FeaturesSlider />
          </div>

          <div className="flex flex-col justify-center mt-10 lg:mt-14">
            <ChooseOutfitButton />

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

          <h1 className="mt-[60px] lg:mt-[74px] text-[26px] lg:text-[32px] text-[#01005B] text-center">
            What are our fans saying?
          </h1>

          <p className="mt-7 lg:mt-8 text-[15px] text-center text-[#676869] max-w-[385px] lg:max-w-[612px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
            tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
          </p>
        </div>
      </div>
    </section>
  );
};
