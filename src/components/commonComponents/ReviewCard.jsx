import React from 'react';
import { MdOutlineStarPurple500 } from 'react-icons/md';

const ReviewCard = ({ text, name, role, avatarLetter }) => {


  return (
    <div className="w-full max-w-sm bg-[#040d1a] border border-cyan-950 rounded-xl p-6 flex flex-col justify-between shadow-lg text-gray-300 relative overflow-hidden group min-h-[420px] mx-2">
      {/* টপ বর্ডার গ্লো ইফেক্ট (ঐচ্ছিক, ইমেজের মতো লুক দিতে) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-70"></div>
      
      <div>
        {/* কোটেশন মার্ক */}
        <div className="text-teal-500 text-4xl font-serif leading-none mb-2">
          "
        </div>
        
        {/* স্টার রেটিং */}
        <div className="text-amber-400 flex text-lg mb-4 tracking-wider">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
        </div>
        
        {/* রিভিউ টেক্সট */}
        <p className="text-sm md:text-base leading-relaxed text-wrap text-gray-400 font-normal">
          {text}
        </p>
      </div>

      {/* কন্ডিশনাল অথর সেকশন (নিচের অংশ) */}
      <div className="mt-6">
        {name && avatarLetter ? (
          /* ভ্যারিয়েন্ট ২: অ্যাভাটার + নাম + ব্যাচ */
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold text-sm">
              {avatarLetter}
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">{name}</h4>
              <span className="text-xs text-gray-500 block">{role}</span>
            </div>
          </div>
        ) : name ? (
          /* ভ্যারিয়েন্ট ৩: শুধুমাত্র নাম */
          <div>
            <h4 className="text-white font-semibold text-sm">{name}</h4>
          </div>
        ) : (
          /* ভ্যারিয়েন্ট ১: শুধুমাত্র ব্যাচ/রোল */
          <div>
            <span className="text-sm font-semibold text-white">{role}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;