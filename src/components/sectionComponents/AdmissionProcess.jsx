import AdmissionProccessStepCard from "../commonComponents/AdmissionProccessStepCard"
import SectionHeader from "../commonComponents/SectionHeader"
import { admissionProcessData} from '@/projectData/data'

const AdmissionProcess = () => {
  return (
    <section className=" mx-auto py-[7rem] px-[4rem] max-w-7xl">
        <SectionHeader tag={'ভর্তি প্রক্রিয়া'} title={'মাত্র ৪টি ধাপে শুরু করুন'} />

        <div className=" flex items-start ">
            {admissionProcessData.map((data)=>(
                <AdmissionProccessStepCard key={data.id} step={data.step} title={data.title} desc={data.desc}/>
            ))
            }
        </div>
    </section>
  )
}

export default AdmissionProcess