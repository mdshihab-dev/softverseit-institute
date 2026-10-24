import CourseCard from "@/components/commonComponents/CourseCard";
import { coursesData } from '@/projectData/data'
import SectionHeader from "../commonComponents/SectionHeader";

export default function Courses() {

  return (
    <section className="w-full py-16 px-4 mx-auto max-w-7xl">
        
        {/* Title Section */}
        <SectionHeader tag={'কোর্সসমূহ'} title={'আপনার পথ বেছে নিন'} desc={'প্রতিটি কোর্স বাস্তবমুখী প্রজেক্ট ও অভিজ্ঞ প্রশিক্ষকদের তত্ত্বাবধানে পরিচালিত।'} />

        {/* Reusable Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <CourseCard 
              key={course.id}
              title={course.title}
              desc={course.desc}
              date={course.date}
              time={course.time}
              duration={course.duration}
              weeklyClasses={course.weeklyClasses}
            />
          ))}
        </div>

    </section>
  );
}