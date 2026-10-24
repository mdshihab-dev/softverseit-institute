import React from 'react';
import { statsData } from '@/projectData/data'

 function Stats() {
  
  return (
    <section className="relative w-full bg-[#020813] px-4">
      {/* Top Glowing Border Line */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#00FFCC] to-transparent opacity-80" />
      <div className="absolute top-0 left-0 h-[1px] w-full bg-cyan-500/30" />

      {/* Main Flex Container */}
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center md:flex-row">
          
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="relative flex w-1/2 flex-col items-center justify-center py-12 px-6 text-center sm:px-8 md:w-1/4
                         border-r border-b border-zinc-900/40 
                         [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r 
                         md:[&:last-child]:border-r-0 md:border-b-0"
            >
              {/* Stat Value */}
              <h3 className="text-4xl font-extrabold text-[#00FFCC] drop-shadow-[0_0_15px_rgba(0,255,204,0.15)] sm:text-5xl">
                {stat.value}
              </h3>
              
              {/* Stat Label */}
              <p className="mt-3 text-sm font-medium text-zinc-500 sm:text-base tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats