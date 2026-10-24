'use client'
import Image from "next/image"
import {videoGalleryData} from '@/projectData/data'
import { useState } from "react";
const VideoCard = ({index, title , url,thumbnailUrl }) => {

  let [activeVideo,setActiveVideo] = useState(false)
  let video = videoGalleryData.filter((item)=> item.id == index)
  const srcUrl = activeVideo ? `${url}?autoplay=1` : url; 

  return (
    <div onClick={()=> setActiveVideo(index == video[0].id) } className="relative w-[358px] h-[264px] rounded-[14px] overflow-hidden">
        <div className=' w-full h-full'>
          
          <div  className={`${activeVideo ? 'hidden' : 'flex'} absolute z-30`}>
            <Image src={thumbnailUrl} className=" w-full h-full"  alt="image"/>
          </div>

          <iframe
            width={355}
            height={200}
            src={srcUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </div>
          {/* <div className=" text-white text-3xl">
            {title}
          </div> */}
    </div>
  );
};

export default VideoCard;



