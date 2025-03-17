import Image from "next/image";
import { images } from "@/constants/beYourselfData";
import { ChooseOutfitButton } from "./ChooseOutfitButton";

export const BeYourselfSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center overflow-hidden bg-[#F0EEEF]">
      <div className="w-full max-w-[1400px] mx-auto pb-12 lg:pb-[60px] lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[102px] w-full">
          
          <h2 className="mt-[40px] text-[26px] text-[#01005B] text-center lg:hidden order-1">
            Be your best self.
          </h2>

          <div className="flex items-center justify-center relative order-2 lg:order-1 h-[362px] w-[344px] lg:h-[664px] lg:w-[524px] mx-auto lg:mx-0 mt-12 lg:mt-[82px]">
            {images.map((img, index) => (
                <div key={index} className={img.className}>
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
              ))}
          </div>
          
          <div className="flex flex-col justify-center lg:justify-start order-3 lg:order-2 lg:mt-28">
            <h2 className="text-[32px] text-[#01005B] text-start hidden lg:flex">
              Be your best self.
            </h2>
            <p className="text-[15px] text-[#676869] text-start px-[46px] lg:px-0 mt-12 max-w-[630px] mx-auto lg:mx-0">
              Hi! My name&apos;s [Insert Name], and I founded [Insert] in ____.
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
              <br /><br />
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula.
              <br /><br />
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
              <br /><br />
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh.
              <br /><br />
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien.
              <br /><br />
              Cras mattis varius mollis.
            </p>

            <div className="hidden lg:flex justify-start mt-7">
              <ChooseOutfitButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
