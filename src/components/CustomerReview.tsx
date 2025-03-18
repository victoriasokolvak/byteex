import Image from "next/image";
import { StarIcon } from "./ui/StarIcon";

export const CustomerReview = () => {
  return (
    <div className="absolute top-22 xl:top-26 bg-white shadow-lg rounded-xl border-[1px] border-[#EAEAEA] p-6 xl:p-4 w-full max-w-[375px] xl:max-w-[425px]">
      <div className="flex items-center">
        <div className="relative w-full h-full mr-3.5">
          <Image 
            src='./Customer.jpg'
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col xl:flex-row justify-start xl:justify-center items-start xl:items-center gap-0 xl:gap-4">
        <h3 className="text-[15px] text-[#676869] text-nowrap order-2 xl:order-1">Amy P.</h3>
        <div className="flex justify-center items-center gap-3.5 order-1 xl:order:2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                <StarIcon width="10" height="10" />
              </div>
            ))}
          </div>
            <p className="text-[12px] text-[#828282] text-nowrap">Over 500+ 5 Star Reviews Online</p>
          </div>
            </div>
        </div>
        <p className="xl:hidden text-[12px] text-[#676869] leading-6 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo.
        </p>
        <p className="hidden xl:flex text-[12px] text-[#676869] leading-6 mt-3">
          Overjoyed with my Loungewear set. I have the jogger and the sweatshirt.
          Quality product on every level. From the compostable packaging, to the supplied
          washing bag, even the garments smells like fresh herbs when I first held them. 
        </p>
    </div>
  );
};
