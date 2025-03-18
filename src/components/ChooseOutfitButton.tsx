import { ArrowIcon } from "./ui/ArrowIcon";

export const ChooseOutfitButton = () => {
  return (
    <a href="#outfit-section">
      <button className="flex items-center gap-4 py-[16px] px-[70px] rounded-[5px] bg-[#01005B] text-[18px] text-white hover:cursor-pointer">
        Customize Your Outfit
        <ArrowIcon />
      </button>
    </a>
  );
};
