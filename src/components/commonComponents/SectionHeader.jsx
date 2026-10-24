import React from 'react';

export default function SectionHeader({ tag, title, desc }) {
  return (
    <div className="relative flex flex-col items-center text-center px-4 py-12">
      
      {/* Top Tag / Category Badge with Lines */}
      {tag && (
        <div className="mb-3 flex items-center gap-3">
          <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#00FFCC]/60"></span>
          <span className="text-xs font-semibold tracking-wider text-[#00FFCC] sm:text-sm">
            {tag}
          </span>
          <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#00FFCC]/60"></span>
        </div>
      )}

      {/* Decorative Subtle Underline Gradient under Tag */}
      <div className="mb-6 h-[2px] w-14 bg-gradient-to-r from-transparent via-[#00A3FF] to-[#00FFCC]" />

      {/* Main Heading */}
      {title && (
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
          {title}
        </h2>
      )}

      {/* Description */}
      {desc && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base opacity-90">
          {desc}
        </p>
      )}
      
    </div>
  );
}