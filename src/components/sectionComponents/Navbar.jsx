import MarqueeBanner from "../commonComponents/Marquee";
import { navigationData } from '@/projectData/data'

const Navbar = () => {
  return (
    <section className="sticky top-0 z-50">
    <nav className=" bg-[#040d0f] text-white px-16 h-17.5 flex items-center justify-between border-b border-gray-900 select-none">
      {/* This is Logo part */}
      <div className="flex flex-col cursor-pointer">
        <span className="text-xl font-extrabold tracking-wider text-white font-sans">
          SOFTVERSE IT
        </span>
        <span className="text-[10px] tracking-[0.15em] text-[#00a878] font-bold mt-0.5">
          COMPUTER TRAINING CENTER
        </span>
      </div>

      {/* This is Navigation part */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
        {navigationData.map((link, index) => (
            <a
            key={index}
            href={link.href}
            className="relative py-2 text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            {link.name}
         {/* Hover Underline Effect */}
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00a878] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
          </a>
        ))}
      </div>

      {/* Right side: Action Button */}
      <div>
        <button className="bg-gradient-to-r from-[#1d4361] to-[#00a878] text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 text-sm hover:opacity-90 transition-opacity duration-200 shadow-md">
          ভর্তি হন <span>&rarr;</span>
        </button>
      </div>
    </nav>

     <MarqueeBanner/>       
 </section>
        
  );
};

export default Navbar;

