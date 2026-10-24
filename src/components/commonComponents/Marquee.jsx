"use client";
import Marquee from 'react-fast-marquee';
import {marqueeBannerData} from '@/projectData/data'

const MarqueeBanner = () => {
  

  return (

    // This is marquee scrolling part
    <div className="w-full bg-[#0d3b4c] text-[#e0f2fe] py-3 overflow-hidden border-y border-teal-700/30 select-none">
      <Marquee 
        direction="left" 
        speed={50} 
        gradient={false} 
        pauseOnHover={true}
      >
        <div className="flex items-center whitespace-nowrap">
          {marqueeBannerData.map((text, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className="text-sm md:text-base font-medium px-8 tracking-wide">
                {text}
              </span>
              <span className="h-5 w-[1px] bg-teal-600/50 block"></span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;