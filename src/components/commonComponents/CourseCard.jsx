
export default function CourseCard({ 
  title, 
  desc, 
  date, 
  time, 
  duration, 
  weeklyClasses, 
  isLive = true 
}) {
  return (
    <div className="group relative flex w-full max-w-[420px] flex-col justify-between rounded-3xl border border-[#00FFCC]/20 bg-transparent p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#00FFCC]/40 hover:shadow-[0_0_30px_rgba(0,255,204,0.05)]">
      
      <div>
        {/* Top Status Badge (ভর্তি চলছে / আসন্ন ব্যাচ) */}
        <div className="mb-6 flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#061e19]/50 px-4 py-1.5 text-sm font-medium text-[#00FFCC]">
            {/* 3D Glowing Dot Effect */}
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></span>
            </span>
            {isLive ? 'ভর্তি চলছে' : 'আসন্ন ব্যাচ'}
          </span>
        </div>

        {/* Course Title */}
        <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#00FFCC]">
          {title}
        </h3>

        {/* Course Description */}
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-300/90 font-normal">
          {desc}
        </p>

        {/* Schedule & Time Inner Box */}
        <div className="mt-6 rounded-2xl bg-[#091424]/70 border border-zinc-900/50 p-4 text-sm text-zinc-400 space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="text-zinc-500">শুরু:</span>
            <span className="font-medium text-zinc-200">{date}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="text-zinc-500 shrink-0">সময়:</span>
            <span className="font-medium text-zinc-200 leading-relaxed">{time}</span>
          </div>
        </div>
      </div>

      {/* Footer Info (Duration & Weekly Classes) */}
      <div className="mt-6 flex flex-col gap-1.5">
        <div className="text-xl font-bold text-white tracking-wide">
          {duration}
        </div>
        <div className="text-[14px] font-medium text-zinc-400">
          {weeklyClasses}
        </div>
      </div>

    </div>
  );
}