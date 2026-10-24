import AdmissionProcess from "@/components/sectionComponents/AdmissionProcess";
import Contect from "@/components/sectionComponents/Contect";
import Courses from "@/components/sectionComponents/Courses";
import Features from "@/components/sectionComponents/Features";
import Footer from "@/components/sectionComponents/Footer";
import Gallery from "@/components/sectionComponents/Gallery";
import Hero from "@/components/sectionComponents/Hero";
import Navbar from "@/components/sectionComponents/Navbar";
import Stats from "@/components/sectionComponents/Stats";
import Team from "@/components/sectionComponents/Team";
import Testimonials from "@/components/sectionComponents/Testimonials";
import Videos from "@/components/sectionComponents/Videos";

export default function Home() {
  return (
    <>

    {/* This is Navbar Section */}
      <Navbar/>

    {/* This is Hero Section */}
      <Hero/>

    {/* This is States Section */}
      <Stats/>

    {/* This is Courses Section */}
      <Courses/>

    {/* This is Features Section */}
      <Features/>

    {/* This is Admission Process Section */}
      <AdmissionProcess/>

    {/* This is Testimonials Section */}
      <Testimonials/>

    {/* This is Gallery Section */}
      <Gallery/>

    {/* This is Videos Section */}
      <Videos/>

    {/* This is Team Section */}
      <Team/>

    {/* This is Contect Section */}
      <Contect/>

    {/* This is Footer Section */}
      <Footer/>

    </>
  );
}
