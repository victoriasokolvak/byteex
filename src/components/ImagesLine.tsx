import { line1, line2 } from '@/constants/ImagesLineData';
import Image from 'next/image';

 export const ImagesLine = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-[5px] overflow-hidden mx-auto">
      <div className="flex h-[102px] lg:h-32 w-full min-w-max justify-center gap-[5px]">
        {line1.map((img) => (
          <div key={img.alt} className="flex relative h-[102px] w-[102px] lg:h-32 lg:w-32">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex h-[102px] lg:h-32 w-full min-w-max justify-center gap-[5px]">
        {line2.map((img) => (
          <div key={img.alt} className="flex relative h-[102px] w-[102px] lg:h-32 lg:w-32">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
