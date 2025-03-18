import { CO2Icon } from "./ui/CO2Icon";
import { EnergyIcon } from "./ui/EnergyIcon";
import { H2OIcon } from "./ui/H2OIcon";

export const GreenImpactSection = () => {
  const impactData = [
    { icon: <CO2Icon />, value: "3,927", unit: "kg", description: "of CO2 saved" },
    { icon: <H2OIcon />, value: "2,546,167", unit: "days", description: "of drinking water saved" },
    { icon: <EnergyIcon />, value: "7,321", unit: "kWh", description: "of energy saved" }
  ];

  return (
<section className="w-full flex flex-col items-center justify-center overflow-hidden bg-[#F0EEEF]">
      <div className="w-full max-w-[1400px] mx-auto pb-14 lg:pb-8 lg:px-8">
        <div className="flex flex-col justify-center items-center w-full">
          
          <h1 className="mt-[52px] lg:mt-10 text-[25px] text-[#01005B] text-center">
            Our total green impact
          </h1>

          <div className="flex flex-col lg:flex-row justify-center items-center mt-3.5 lg:mt-[26px] px-12">
            {impactData.map((item, index) => (
              <div
                key={item.value}
                className={`flex flex-col items-center text-center w-[282px] lg:w-[252px] p-6 lg:py-0 ${
                          index !== 0 ? "border-t border-b lg:border-l lg:border-b-0 lg:border-t-0 border-[#C4C4C480]" : ""
                          } ${index === 2 ? 'lg:flex hidden' : ''}`}
              >
              <div className="flex justify-center items-center w-[42px] h-[42px] bg-[#E4E4E4] rounded-full">
                {item.icon}
              </div>
              <p className="text-[22px] font-semibold text-[#2A2996] mt-3">{item.value} {item.unit}</p>
              <p className="text-[#2A2996] text-[14px]">{item.description}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
