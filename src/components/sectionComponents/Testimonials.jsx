import React from 'react'
import SectionHeader from '../commonComponents/SectionHeader'
import TestimonialMarquee from '../commonComponents/TestimonialMarquee'

const Testimonials = () => {
  return (
    <section className=' mx-auto max-w-7xl bg-[#070D19] py-28 px-16 border-[#051F24] border-b'>
        <SectionHeader tag={'সাফল্যের গল্প'} title={'শিক্ষার্থীরা যা বলেন'}/> 
        <TestimonialMarquee/>
    </section>
  )
}

export default Testimonials