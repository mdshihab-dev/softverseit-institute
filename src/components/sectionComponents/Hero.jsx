import Link from "next/link";

 function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden  px-4 py-20 text-center text-white">
      
      {/* Background Decorative Rings & Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        {/* Soft Radial Glow */}
        <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        
        {/* Animated/Static Hero Rings */}
        <div className="absolute size-[400px] rounded-full border border-blue-700 opacity-30" />
        <div className="absolute size-[550px] rounded-full border border-blue-700 opacity-30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center">
        
        {/* Live Chip */}
        <div className="mb-6 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-sm sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          10 July — নতুন ব্যাচ শুরু
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight leading-[1.2] sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-[#00FFCC] drop-shadow-[0_0_20px_rgba(0,255,204,0.2)]">ডিজিটাল</span>{' '}
          <span className="text-white">দক্ষতায়</span>
          <br />
          <span className="bg-gradient-to-r from-[#00FFCC] to-[#00A3FF] bg-clip-text text-transparent">
            এগিয়ে যান
          </span>
          <br />
          <span className="text-white">আত্মবিশ্বাসে</span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-[520px] text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg">
          হাতে-কলমে শিক্ষা, অভিজ্ঞ প্রশিক্ষক এবং বাস্তবমুখী কারিকুলাম আপনার
          ক্যারিয়ারকে নতুন উচ্চতায় নিয়ে যেতে <span className="text-zinc-300 font-medium">SoftVerse IT</span> প্রস্তুত।
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-emerald-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:from-cyan-500 hover:to-emerald-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] active:scale-95 cursor-pointer"
            aria-label="এখনই ভর্তি হন"
          >
            এখনই ভর্তি হন 
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          
          <Link
            href="#courses"
            className="rounded-lg border border-zinc-800 bg-zinc-950/40 px-6 py-3 font-semibold text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 hover:text-white active:scale-95"
          >
            কোর্স দেখুন
          </Link>
        </div>

        {/* Trust Pill */}
        <div className="mt-12">
          <div className="rounded-full border border-zinc-800/80 bg-zinc-900/30 px-5 py-2 text-xs font-medium text-zinc-500 backdrop-blur-sm tracking-wider">
            সার্টিফিকেট প্রদান
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero