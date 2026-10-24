

export default function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center justify-start text-center bg-[#0a1525] w-64.5 h-69 border border-[rgba(0,184,148,.1)] rounded-[14px] px-[1.8rem] py-[2.2rem] ">
      
      {/* Icon Container with Subtle Circle Graphic */}
      <div className="mb-5 flex items-center justify-center size-16  rounded-full border border-[#074E4C] bg-[#092730]">
       {Icon}
      </div>

      {/* Feature Title */}
      <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#00FFCC]">
        {title}
      </h3>

      {/* Feature Description */}
      <p className="mt-2.5 text-xs leading-relaxed  text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">
        {desc}
      </p>

    </div>
  );
}
