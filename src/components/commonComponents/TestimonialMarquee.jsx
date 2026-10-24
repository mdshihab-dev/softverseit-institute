"use client";
import ReviewCard from '../commonComponents/ReviewCard'
import {reviewsData} from '@/projectData/data'
import Marquee from 'react-fast-marquee';

const TestimonialMarquee = () => {
  return (
    <div className=' relative'>

      <div className=' absolute flex items-center justify-between w-full'>
         <div className=' z-40 bg-linear-to-r from-[#060D18] to-transparent h-125 w-20'/>
         <div className=' z-40 bg-linear-to-l from-[#060D18] to-transparent h-125 w-20'/>
      </div>


      <Marquee direction="left" speed={100} gradient={false} pauseOnHover={true}>
        <div className=' flex items-center whitespace-nowrap'>
            {reviewsData.map((card)=>(
                <ReviewCard key={card.id} text={card.text} name={card.name} role={card.role} avatarLetter={card.avatarLetter}/>
            ))}
        </div>
      </Marquee>
    </div>
  )
}

export default TestimonialMarquee