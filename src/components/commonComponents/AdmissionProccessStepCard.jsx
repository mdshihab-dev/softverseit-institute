import React from 'react'

const AdmissionProccessStepCard = ({ step, title, desc }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[260px] p-6 group">
      
      {/* Step Circle with Gradient Background */}
      <div className="size-14 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br from-[#13586F] to-[#069988] text-white font-bold text-xl tracking-wider shadow-lg shadow-emerald-950/20 transition-transform duration-300 group-hover:scale-105">
        {step}
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-3 transition-colors duration-300 group-hover:text-emerald-400">
        {title}
      </h3>

      {/* Description */}
      <p className="text-zinc-400 text-xs leading-relaxed font-normal">
        {desc}
      </p>
      
    </div>
  )
}

export default AdmissionProccessStepCard