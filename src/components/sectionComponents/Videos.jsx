import SectionHeader from "../commonComponents/SectionHeader"
import { videoGalleryData} from '@/projectData/data'
import VideoCard from "../commonComponents/VideoCard"

const Videos = () => {
  return (
    <section className="mx-auto max-w-7xl bg-[#070D19] py-28 px-16">
        <div className=" relative -top-12">
          <SectionHeader tag={'আমাদের ভিডিও'} title={'শিক্ষার্থীদের রিভিউ ও প্রোগ্রামের ভিডিও'} desc={'আমাদের ক্লাস, ব্যাচ ও বিশেষ অনুষ্ঠানের কিছু ভিডিও।'}/>
        </div>

        <div className=" flex items-center space-x-6 flex-wrap">
          { videoGalleryData.map((item,index)=>(
              <VideoCard key={item.id} index={index +1} title={item.title} url={item.videoUrl} thumbnailUrl={item.thumbnailUrl}/>
          ))
          }
        </div>

    </section>
  )
}

export default Videos