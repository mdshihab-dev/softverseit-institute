import React from 'react'
import SectionHeader from '../commonComponents/SectionHeader'
import {featuresData} from '@/projectData/data'
import FeatureCard from '../commonComponents/FeatureCard'


const Features = () => {
  return (
    <section className='bg-[#070D19] mx-auto max-w-7xl py-28 px-16'>
        <SectionHeader tag={'কেন আমরা'} title={'আমাদের পার্থক্য কোথায়'} desc={'সাধারণ ট্রেনিং সেন্টার নই — আমরা আপনার ক্যারিয়ার পার্টনার।'}/>

        <div className=' flex items-center gap-x-7'>
            {featuresData.map((card)=>(
            <FeatureCard key={card.id} title={card.title} desc={card.desc} icon={card.icon}/>
        ))    
        }
        </div>
       

    </section>
  )
}

export default Features