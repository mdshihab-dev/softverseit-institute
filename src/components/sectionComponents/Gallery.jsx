"use client"

import { useState } from "react"
import SectionHeader from "../commonComponents/SectionHeader"
import {galleryData} from '@/projectData/data'
import Image from "next/image"
import { FcSearch } from "react-icons/fc"
const Gallery = () => {
  const [active,setActive] = useState(1)
  const activeData = galleryData.filter((item)=> active === item.id)
  return (
    <section className="w-full py-28 px-16 mx-auto max-w-7xl">
        <SectionHeader tag={'আমাদের মুহূর্ত'} title={'ব্যাচ ও প্রোগ্রামের ছবি'} desc={'শিক্ষার্থীদের ক্লাস, প্রজেক্ট ও বিশেষ অনুষ্ঠানের মুহূর্ত।'}/>


        <div className="">

           <div className="flex justify-center items-center">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full border border-[#14322dd5] bg-[#091512]/80 backdrop-blur-md">
              {galleryData.map((tab) => {
                return (
                  <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={` cursor-pointer relative px-5 py-2 text-sm md:text-base font-medium rounded-full whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${ active == tab.id ? 'text-white' : 'text-gray-400 hover:text-gray-200 hover:bg-teal-950/30 border border-teal-900/20'}`}
                  style={{ background: active == tab.id ? 'linear-gradient(135deg, #0d5a7d 0%, #009980 100%)' : 'transparent' }} >
                  {tab.category}
                </button>
                );
              })}
            </div>
          </div>

          <div className="my-10 flex justify-between flex-wrap gap-4 ">
          {activeData[0].imagesUrl.map((img,index)=> (
            <div key={index} className="group relative grow h-80 w-[45%] max-w-1/2 overflow-hidden rounded-xl cursor-pointer">
              <Image src={img.url} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105"/>

              {/* Bottom Gradient Shadow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Top Right Magnifying Glass Icon */}
              <div className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-[8px] bg-black/50 backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FcSearch  className=" text-2xl"/>
              </div>

              {/* Bottom Left Badge / Detail Tag */}
              <div className="absolute bottom-4 left-4 rounded-full border border-teal-500/40 bg-[#06938533] px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.badge}
              </div>
            </div>
          ))}
        </div>

        <div className=" flex justify-center">
          <button
      // onClick={onClick}
           className="  inline-flex items-center gap-2 rounded-xl border border-emerald-800/80  px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-950/40 active:scale-95">
            <span>আরও ছবি দেখুন</span>
            <span className="text-lg">↓</span>
        </button>
        </div>
        </div>
    </section>
  )
}

export default Gallery







          