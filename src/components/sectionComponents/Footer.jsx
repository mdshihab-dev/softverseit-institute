import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaPlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b1936] text-gray-400 text-sm font-sans border-t-2 border-[#00a884]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-1">SoftVerse IT</h2>
          <p className="text-xs text-[#00a884] font-semibold tracking-wider uppercase mb-4">
            Computer Training Center
          </p>
          <p className="leading-relaxed text-gray-400">
            বিশ্বস্ত কম্পিউটার ট্রেনিং সেন্টার। আমরা বিগত ২০২৩ সাল ২+ বছর ধরে শত শিক্ষার্থীকে কম্পিউটার প্রশিক্ষণ দিয়ে।
          </p>
        </div>

        {/* Column 2: Courses */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">কোর্স</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="hover:text-white transition">বেসিক কম্পিউটার (৩ মাস)</Link></li>
            <li><Link href="#" className="hover:text-white transition">গ্রাফিক ডিজাইন (৩ মাস)</Link></li>
            <li><Link href="#" className="hover:text-white transition">স্কিল বুস্ট (৬ মাস)</Link></li>
            <li><Link href="#" className="hover:text-white transition">IELTS প্র্যাক্টিস (৬ মাস)</Link></li>
          </ul>
        </div>

        {/* Column 3: Pages */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">আমাদের আরো কিছু পেইজ</h3>
          <ul className="space-y-3">
            <li><Link href="#" className="hover:text-white transition">SV-Tech Zone</Link></li>
            <li><Link href="#" className="hover:text-white transition">SV-Advanture</Link></li>
            <li><Link href="#" className="hover:text-white transition">Gift Managment</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">যোগাযোগ</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="w-4 h-4 text-gray-500 shrink-0 mt-1" />
              <span>মৃগেনীজ্ঞ পুলিশ সুপার কার্যালয় বিপরীত পাশে</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FaPhoneAlt className="w-3.5 h-3.5 text-gray-500" />
              <a href="tel:016038-93912" className="hover:text-white transition">016038-93912</a>
            </li>
            <li className="flex items-center gap-2.5">
              <FaEnvelope className="w-3.5 h-3.5 text-gray-500" />
              <a href="mailto:softversei@gmail.com" className="hover:text-white transition">softversei@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Middle Divider & Copyright Section */}
      <div className="border-t border-gray-800/60 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © 2026 SoftVerse IT Computer Training Center|
        </p>
        
        {/* Social Icons (Font Awesome) */}
        <div className="flex gap-3">
          <Link href="#" className="w-8 h-8 flex items-center justify-center border border-gray-800 rounded text-gray-500 hover:text-white hover:border-gray-600 transition">
            <FaFacebookF className="w-3.5 h-3.5" />
          </Link>
          <Link href="#" className="w-8 h-8 flex items-center justify-center border border-gray-800 rounded text-gray-500 hover:text-white hover:border-gray-600 transition">
            <FaPlay className="w-3.5 h-3.5 ml-0.5" />
          </Link>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="bg-[#081229] py-4 text-center text-xs tracking-wide text-gray-500 border-t border-gray-900">
        Developed by <span className="text-[#00a884] font-semibold">SOFTVERSE IT</span>
      </div>
    </footer>
  );
};

export default Footer;