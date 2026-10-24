import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})



export const metadata = {
  title: "Softverse IT — কম্পিউটার ট্রেনিং সেন্টার",
  description: "SoftVerse IT Institute: SoftVerse IT Institute: মুন্সীগঞ্জের সেরা কম্পিউটার ট্রেনিং সেন্টার। Computer Basic, Keds computer, IELTS Practice, Graphic Design এবং বেসিক কম্পিউটার কোর্সে ভর্তি চলছে। আজই যোগাযোগ করুন!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030d1e] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[50px_50px]">{children}</body>
    </html>
  );
}
