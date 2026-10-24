import React from 'react'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'

const Contect = () => {
  return (
    <section className="w-full bg-[#030914] p-6 sm:p-12">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl border border-gray-800/40 bg-gradient-to-br from-[#0b1936] to-[#060e20] px-6 py-16 text-center shadow-2xl">
        
        {/* Right Side Decorative Background Circles (ইমেজের ডানদিকের আর্ট) */}
        <div className="absolute right-[-10%] top-[-20%] bottom-[-20%] w-[50%] pointer-events-none opacity-10 hidden md:block">
          <div className="absolute inset-0 border-[1.5px] border-white rounded-full scale-100"></div>
          <div className="absolute inset-0 border-[1.5px] border-white rounded-full scale-75 translate-x-12"></div>
          <div className="absolute inset-0 border-[1.5px] border-white rounded-full scale-50 translate-x-24"></div>
        </div>

        {/* Content Box */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 tracking-wide">
            আজই <span className="text-[#00a884]">SoftVerse IT</span>-এ যোগ দিন
          </h2>

          {/* Subheading */}
          <p className="text-xs sm:text-sm text-gray-400 font-light mb-8 max-w-xl">
            ভর্তি চলছে তাই — দেরি না করে এখনই নিশ্চিত করুন।
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
            
            {/* Admission Button with Gradient */}
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#173e6b] to-[#00a884] text-white font-medium rounded-lg text-sm shadow-md hover:opacity-90 transition-opacity duration-200"
            >
              <span>ভর্তির আবেদন করুন</span>
              <FaArrowRight className="text-xs" />
            </a>

            {/* Phone Call Button */}
            <a 
              href="tel:01603-893912" 
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3 border border-gray-850/60 bg-[#061026] text-white font-medium rounded-lg text-sm hover:bg-[#0b1936] transition-colors duration-200"
            >
              <FaPhoneAlt className="text-[#d946ef] text-xs shrink-0" />
              <span className="tracking-wide">01603-893912</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contect