import { BiSolidBriefcase } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa'
import { FaPersonChalkboard } from 'react-icons/fa6'
import { FiClock } from 'react-icons/fi'
import rapSongThumbnail from '@/images/video-thumbnails/rap-song-thumbnail.webp'
import studentReview1Thubmnail from '@/images/video-thumbnails/student-review1-thumbnail.webp'
import studentReview2Thubmnail from '@/images/video-thumbnails/student-review2-thumbnail.webp'
import campainThumbnail from '@/images/video-thumbnails/campain-thumbnail.webp'
import kidsCourseThumnail from '@/images/video-thumbnails/kids-course-thumbnail.webp'
import galleryImg1 from '@/images/program_pi/img1.webp'
import galleryImg2 from '@/images/program_pi/img2.webp'
import galleryImg3 from '@/images/program_pi/img3.webp'
import galleryImg4 from '@/images/program_pi/img4.webp'
import galleryImg5 from '@/images/program_pi/img5.webp'
import galleryImg6 from '@/images/program_pi/img6.webp'
import galleryImg7 from '@/images/program_pi/img7.webp'
import galleryImg8 from '@/images/program_pi/img8.webp'
import galleryImg9 from '@/images/program_pi/img9.webp'
import galleryImg10 from '@/images/program_pi/img10.webp'
import galleryImg11 from '@/images/program_pi/img11.webp'

// Navigation data
export const navigationData = [
          { name: 'কোর্স', href: '#courses' },
          { name: 'কেন আমরা', href: '#about' },
          { name: 'গ্যালারি', href: '#gallery' },
          { name: 'টিম', href: '#team' },
          { name: 'সাফল্য', href: '#success' },
          { name: 'যোগাযোগ', href: '#contact' },
        ]

// Marquee banner data
export const marqueeBannerData = [
        "বেসিক কম্পিউটার • গ্রাফিক ডিজাইন • কিডস কম্পিউটার",
        "যোগাযোগ করুন: 01603-893912",
        "মুন্সীগঞ্জ পুলিশ সুপার কার্যালয়ের বিপরীত পাশে",
        "কোর্স শেষে সার্টিফিকেট প্রদান করা হয়",
        "ভর্তি চলছে — 10 july, 2026 থেকে নতুন ব্যাচ শুরু"
      ];

// Stats data
export const statsData = [
    { id: 1, value: '৮০০+', label: 'সফল শিক্ষার্থী' },
    { id: 2, value: '৪+', label: 'প্রফেশনাল কোর্স' },
    { id: 3, value: '২+', label: 'বছরের অভিজ্ঞতা' },
    { id: 4, value: '৯৮%', label: 'শিক্ষার্থী সন্তুষ্টি' },
  ];


// Courses data 
export const coursesData = [
  {
    id: 1,
    title: "বেসিক কম্পিউটার",
    desc: "MS Office, ইন্টারনেট, ফাইল ম্যানেজমেন্ট এবং ডিজিটাল লিটারেসির সম্পূর্ণ কোর্স।",
    date: "10 July, 2026",
    time: "৩টা-৪টা (রবি-মঙ্গল-বৃহঃ), ৬টা-৭টা (শনি-সোম-বুধ)",
    duration: "৩ মাস",
    weeklyClasses: "সপ্তাহে ৩ দিন ক্লাস"
  },
  {
    id: 2,
    title: "কিডস কম্পিউটার",
    desc: "কম্পিউটার পরিচিতি, হার্ডওয়্যার পরিচিতি, Ms Paint etc.",
    date: "10 July, 2026",
    time: "৩টা-৪টা (শনি-সোম-বুধ)",
    duration: "২ মাস",
    weeklyClasses: "সপ্তাহে ৩ দিন ক্লাস"
  },
  {
    id: 3,
    title: "গ্রাফিক ডিজাইন",
    desc: "Photoshop, Illustrator, AI ও ব্র্যান্ড আইডেন্টিটি ডিজাইনের সম্পূর্ণ গাইড।",
    date: "10 July, 2026",
    time: "৩টা-৪টা (শনি-সোম-বুধ)",
    duration: "৩ মাস",
    weeklyClasses: "সপ্তাহে ৩ দিন ক্লাস"
  },
  {
    id: 4,
    title: "ডিপ্লোমা ইন আইটি",
    desc: "MS Office, টাইপিং, ডাটা এন্ট্রি, ফ্রিল্যান্সিং গাইডলাইন এবং আইটি স্কিলস ইত্যাদি।",
    date: "10 July, 2026",
    time: "৩টা-৪টা (সপ্তাহে ২ দিন)",
    duration: "৬ মাস",
    weeklyClasses: "সপ্তাহে ২ দিন ক্লাস"
  },
  {
    id: 5,
    title: "IELTS প্র্যাকটিস",
    desc: "টাইপিং, Software Practice এবং মক টেস্টের মাধ্যমে আইইএলটিএস প্রিপারেশন।",
    date: "10 July, 2026",
    time: "৩টা-৪টা (শনি-সোম-বুধ)",
    duration: "৬ মাস",
    weeklyClasses: "সপ্তাহে ৩ দিন ক্লাস"
  },
  {
    id: 6,
    title: "ICT প্র্যাকটিস",
    desc: "HTML Advance, CSS, C Language, এবং একাডেমি ভিত্তিক রিয়েল-লাইফ Projects।",
    date: "10 July, 2026",
    time: "৩টা-৪টা (রবি-মঙ্গল-বৃহঃ)",
    duration: "২ মাস",
    weeklyClasses: "সপ্তাহে ৩ দিন ক্লাস"
  }
];

// Features data 
export const featuresData = [
  {
    id: 1,
    title: "স্বীকৃত সার্টিফিকেট",
    desc: "সার্টিফিকেট",
    icon:  <FaAward className=' text-white text-4xl' />
  },
  {
    id: 2,
    title: "বিশেষজ্ঞ প্রশিক্ষক",
    desc: "ইন্ডাস্ট্রিতে ৩+ বছরের অভিজ্ঞতাসম্পন্ন প্রশিক্ষকদের কাছ থেকে শিখুন।",
    icon: <FaPersonChalkboard className=' text-white text-4xl'/>

  },
  {
    id: 3,
    title: "নমনীয় সময়সূচি",
    desc: "সকাল, বিকেল ও সন্ধ্যা ব্যাচ — চাকরির পাশেও কোর্স করা যাবে।",
    icon: <FiClock className=' text-white text-4xl'/>
  },
  {
    id: 4,
    title: "জব প্লেসমেন্ট",
    desc: "CV রিভিউ, মক ইন্টারভিউ",
    icon: <BiSolidBriefcase className=' text-white text-4xl'/>
  }
];

export const admissionProcessData = [
  {
    id: 1,
    step: "০১",
    title: "পরামর্শ নিন",
    desc: "ফ্রি কাউন্সেলিং সেশনে আপনার লক্ষ্য নির্ধারণ করুন।"
  },
  {
    id: 2,
    step: "০২",
    title: "কোর্স বেছে নিন",
    desc: "আপনার সুবিধামতো কোর্স ও ব্যাচ সিলেক্ট করুন।"
  },
  {
    id: 3,
    step: "০৩",
    title: "শেখা শুরু করুন",
    desc: "ক্লাস, প্রজেক্ট ও প্র্যাকটিসে দক্ষ হয়ে উঠুন।"
  },
  {
    id: 4,
    step: "০৪",
    title: "ক্যারিয়ার গড়ুন",
    desc: "সার্টিফিকেট নিয়ে জব মার্কেটে প্রবেশ করুন।"
  }
];

export const reviewsData = [
  {
    id: 1,
    text: "আমার মতে এই ৩ মাসে অনেক কিছু শিখতে পেরেছি। শুরুর দিকে অনেক ভালো লাগলেও শেষে অনেকটাই খারাপ লেগেছে । বিশেষভাবে আবিদ স্যার অনেকটাই সাহায্যকারী ছিল বাকিদেরটা তেমন ভালো লাগেনি । সামনে যারা এখানে আসবেন আমি মনে করি উপকৃত হবেন।",
    name: "",
    role: "(ব্যাচ ২৫)",
    avatarLetter: ""
  },
  {
    id: 2,
    text: "আবিদ স্যার ঠিক মত ক্লাসে আসে নাই । মারুফ স্যার অনেক ভালো ক্লাস করায় কিন্তু আবিদ স্যার বেশি ভালো ক্লাস করায় ।।",
    name: "",
    role: "(ব্যাচ ২৫)",
    avatarLetter: ""
  },
  {
    id: 3,
    text: "Softverse it এর শেখানোর ধরণ খুবই ভালো। সব স্যারদের ব্যবহার খুবই ভালো কিন্তু কৌশিক স্যার প্রশ্ন করলে বিরক্ত হয়।",
    name: "",
    role: "(ব্যাচ ২৫)",
    avatarLetter: ""
  },
  {
    id: 4,
    text: "Softverse it প্রতিষ্ঠানে খুব অল্প সময়ে ভালো কাজ শিখিয়েছে , কৌশিক স্যার অনেক ভালো করে এবং গুরুত্ব নিয়ে ক্লাস করিয়েছেন অন্য সব প্রতিষ্ঠান থেকে এই কম্পিউটার সেন্টারটি অনে ভালো অনেক সুন্দরভাবে ক্লাস করিয়েছেন এখানের পরিবেশ অনেক ভালো।",
    name: "",
    role: "(ব্যাচ ২৭)",
    avatarLetter: ""
  },
  {
    id: 5,
    text: "স্যারদের ব্যবহার অনেক ভালো ছিল। তারা খুব ভালো ভাবে ক্লাসগুলো করিয়েছে। এই কয়দিনে অনেক কিছু শিখিয়েছেন। ধন্যবাদ স্যারদের।",
    name: "",
    role: "(ব্যাচ ২৪)",
    avatarLetter: ""
  },
  {
    id: 6,
    text: "শান্তিপূর্ণ পরিবেশে কম্পিউটার শিক্ষা নিয়েছি । Ms word, Excell, power points এর ব্যবহার শিখেছি । যা আমার ভবিষ্যতে বিভিন্নভাবে সাহায্য করবে ।",
    name: "",
    role: "(ব্যাচ ২৩)",
    avatarLetter: ""
  },
  {
    id: 7,
    text: "স্যতি বলতে আমি আমার প্রত্যাশার চেয়েও বেশি পেয়েছি । প্রতিটী টিচারের ব্যবহার অত্যন্ত বন্ধুসুলভ । তাদের সাথে ক্লাস করে অনেক ভালো লাগলো।",
    name: "মোঃ জিসান শেখ",
    role: "(ব্যাচ ২৬)",
    avatarLetter: "জি"
  },
  {
    id: 8,
    text: "আসলে এখানে আসার আগে আমার চিন্তা ভাবনা অন্য রকম ছিল । ভাবছিলাম হয়তো তেমন গুরুত্ব সহকারে শিখানো হয় না । কিন্তু এখানে আসারপর আমার ভাবনা সম্পূর্ণ পরিবর্তন হয়ে গিয়েছে । মুন্সিগঞ্জের মধ্যে বেস্ট একটা প্লার্টফর্ম Softverse it , এক কথাইয় অসাধারণ। স্যাররা খুব ফ্রেন্ডলি, যার কারণে সবকিছু শিখতে আরো সহজ মনে হয়েছে । কেউ যদি আমাকে জিজ্ঞেস করে আমি বলবো তোমার জন্য উত্তম স্থান ।",
    name: "",
    role: "(ব্যাচ ২৭)",
    avatarLetter: ""
  },
  {
    id: 9,
    text: "Softverse it তে ক্লাস করে আমার কম্পিউটার নিয়ে বেসিক ধারণা এসেছে । এখানে ক্লাসের পরিবেশ এবং শিক্ষক গণ যথেष्ठ ভালো।",
    name: "রিয়াদ",
    role: "(ব্যাচ ২৬)",
    avatarLetter: "রি"
  },
  {
    id: 10,
    text: "বোঝানো দক্ষতা চমৎকার ছিল। পরিবেশ শান্তিপূর্ণ ছিল। স্যারদের ব্যবহার ভালো ছিল । ক্লাসের সময় আরো কিছক্ষণ বাড়িয়ে দিলে আমাদের জন্য সুবিধা হতো ।",
    name: "Minha khatun",
    role: "",
    avatarLetter: ""
  },
  {
    id: 11,
    text: "Softverse it এই প্রতিষ্ঠানে অনেক সহজেই বুঝতে পারি আর এখানকার যেই ভাইয়েরা আমাদের ক্লাস করাইয় তাদের ব্যবহার অনেক ভালো।",
    name: "",
    role: "(Batch ২৭)",
    avatarLetter: ""
  }
];

export const galleryData = [
  {
    id: 1,
    category: "সব",
    imagesUrl: [
       {
        url: galleryImg1,
        alt: "Class Room 2",
        badge: 'ক্লাস রুম 2'
       },
       {
        url: galleryImg2,
        alt: "কলেজ ক্যাম্পেইন",
        badge: 'কলেজ ক্যাম্পেইন'
       },
       {
        url: galleryImg3,
        alt: "কলেজ ক্যাম্পেইন",
        badge: 'কলেজ ক্যাম্পেইন'
       },
       {
        url: galleryImg4,
        alt: "Class Room 1",
        badge: 'ক্লাস রুম 1'
       },
       {
        url: galleryImg5,
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url: galleryImg6, 
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url: galleryImg7,
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url:  galleryImg8, 
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url:  galleryImg9, 
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url:  galleryImg10, 
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url: galleryImg11,
        alt: "ক্যাম্পেইন",
        badge: 'ক্যাম্পেইন'
       }  
    ]
  },
  {
    id: 2,
    category: "ব্যাচ ছবি",
    imagesUrl: [
      {
        url: galleryImg4,
        alt: "Class Room 1",
        badge: 'ক্লাস রুম 1'
       },
       {
        url: galleryImg1,
        alt: "Class Room 2",
        badge: 'ক্লাস রুম 2'
       },
    ]
  },
  {
    id: 3,
    category: "প্রোগ্রাম",
    imagesUrl: [
       {
        url: galleryImg2,
        alt: "কলেজ ক্যাম্পেইন",
        badge: 'কলেজ ক্যাম্পেইন'
       },
       {
        url: galleryImg3,
        alt: "কলেজ ক্যাম্পেইন",
        badge: 'কলেজ ক্যাম্পেইন'
       },
       {
        url: galleryImg5,
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url: galleryImg6, 
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url: galleryImg11,
        alt: "ক্যাম্পেইন",
        badge: 'ক্যাম্পেইন'
       }  
    ]
  },
  {
    id: 4,
    category: "সার্টিফিকেট",
    imagesUrl: [
       {
        url: galleryImg7,
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url:  galleryImg8, 
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url:  galleryImg9, 
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       },
       {
        url:  galleryImg10, 
        alt: "সার্টিফিকেট অনুষ্ঠান",
        badge: "সার্টিফিকেট অনুষ্ঠান"
       }
    ]
  }
];

export const videoGalleryData = [
  {
    id: 1,
    title: "Softverse It Rap Song",
    thumbnailUrl: rapSongThumbnail,
    videoUrl: "https://www.youtube.com/embed/0VEmSzp7ZQQ",
  },
  {
    id: 2,
    title: "বেসিক কোর্স ব্যাচ",
    thumbnailUrl: studentReview1Thubmnail,
    videoUrl: "https://www.youtube.com/embed/PfhSGo4URak",
  },
  {
    id: 3,
    title: "বেসিক কোর্স ব্যাচ",
    thumbnailUrl: studentReview2Thubmnail,
    videoUrl: "https://www.youtube.com/embed/t6I4sI1cZ-U",
  },
  {
    id: 4,
    title: "ক্যাম্পেইন রিভিউ",
    thumbnailUrl: campainThumbnail,
    videoUrl: "https://www.youtube.com/embed/0EVtuVKj_kw",
  },
  {
    id: 5,
    title: "বাচ্চাদের কোর্স এর ভিডিও",
    thumbnailUrl: kidsCourseThumnail,
    videoUrl: "https://www.youtube.com/embed/bTTGGaZbqfo",
  }
];

export const teamData = [
  {
    category: "নেতৃত্ব",
    members: [
      {
        badge: "Advisor",
        badgeClass: "advisor",
        name: "Eng Md.Ashraful Islam Mishu",
        role: "Chief Advisor",
        exp: "প্রতিষ্ঠানের প্রধান উপদেষ্টা",
        image: "./Images/mesu.webp",
        altText: "mishu picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/AshrafulMishu2323",
          facebookLabel: "Ashraful Islam Mishu"
        }
      },
      {
        badge: "CEO",
        badgeClass: "ceo",
        name: "Maruf Hasan",
        role: "Chief Executive Officer",
        exp: "প্রতিষ্ঠানের প্রধান নির্বাহী কর্মকর্তা",
        image: "./Images/maruf.webp",
        altText: "maruf picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/md.marufhasan.142035",
          facebookLabel: "Maruf Hasan"
        }
      },
      {
        badge: "MD",
        badgeClass: "md",
        name: "Nure Alam Alvi",
        role: "Managing Director",
        exp: "প্রতিষ্ঠানের ব্যবস্থাপনা পরিচালক",
        image: "./Images/albi.webp",
        altText: "albi picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/nuralam.alvi",
          facebookLabel: "Nure Alam Alvi"
        }
      },
      {
        badge: "AMD",
        badgeClass: "ceo",
        name: "Md.Musfiqur Salahin",
        role: "Assistant Managing Director",
        exp: "প্রতিষ্ঠানের সহকারী ব্যবস্থাপনা পরিচালক",
        image: "./Images/shihav.webp",
        altText: "shihav picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/mashfic.sihab",
          facebookLabel: "Musfiqur Salahin"
        }
      },
      {
        badge: "CFO",
        badgeClass: "cfo",
        name: "Md.Rony Hasan",
        role: "Chief Financial Officer",
        exp: "প্রধান আর্থিক কর্মকর্তা",
        image: "./Images/rony (1).webp",
        altText: "rony picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/mohammadronyhasan337",
          facebookLabel: "Rony Hasan"
        }
      },
      {
        badge: "CTO",
        badgeClass: "cto",
        name: "Niloy Halder",
        role: "Chief Technology Officer",
        exp: "প্রধান প্রযুক্তি কর্মকর্তা",
        image: "./Images/niloy.webp",
        altText: "niloy picture",
        social: {
          behance: "https://www.behance.net/niloyrvi",
          facebook: "https://www.facebook.com/Niloyrvi7",
          facebookLabel: "Niloy Haldar"
        }
      }
    ]
  },
  {
    category: "প্রশিক্ষক",
    members: [
      {
        badge: "Head Trainer",
        badgeClass: "tt",
        name: "Abid Hasan",
        role: "Lead Trainer & Instructor",
        exp: "বেসিক কম্পিউটার",
        image: "./Images/abid.webp",
        altText: "abid picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/share/1EDpQPEgYu/?mibextid=wwXIfr",
          facebookLabel: "Abid Hasan"
        }
      },
      {
        badge: "Head Trainer",
        badgeClass: "tt",
        name: "Prattikha Mondal Arkka",
        role: "Lead Trainer & Instructor",
        exp: "বেসিক কম্পিউটার",
        image: "./Images/arkka.webp",
        altText: "arkka picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/share/18ea5zfjZq/",
          facebookLabel: "Prattikha Mondal Arkka"
        }
      },
      {
        badge: "Head Trainer",
        badgeClass: "tt",
        name: "Koushik Day",
        role: "Lead Trainer & Instructor",
        exp: "বেসিক কম্পিউটার",
        image: "./Images/koushik.webp",
        altText: "kousik picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/koushik.day.587",
          facebookLabel: "Koushik Day"
        }
      },
      {
        badge: "Head Trainer",
        badgeClass: "tt",
        name: "Niloy Haldar",
        role: "Graphics Design",
        exp: "গ্রাফিক ডিজাইন",
        image: "./Images/niloy.webp",
        altText: "niloy picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/Niloyrvi7",
          facebookLabel: "Niloy Haldar"
        }
      }
    ]
  },
  {
    category: "ব্যবস্থাপনা",
    members: [
      {
        badge: "MM",
        badgeClass: "marketing",
        name: "Rifat Bin Osman",
        role: "Marketing Manager",
        exp: "ডিজিটাল মার্কেটিং ও ব্র্যান্ড পরিচালনা",
        image: "./Images/rifat.webp",
        altText: "rifat picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/rifat.bin.osman.2025",
          facebookLabel: "Rifat Bin Osman"
        }
      },
      {
        badge: "MM",
        badgeClass: "coordinator",
        name: "Nahean Al Azad",
        role: "Marketing Member",
        exp: "ভর্তি, সময়সূচি ও শিক্ষার্থী সহায়তা",
        image: "./Images/nahiyan.webp",
        altText: "nahiyan picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/nahyan.al.azad.2025",
          facebookLabel: "Nahean Al Azad"
        }
      },
      {
        badge: "MM",
        badgeClass: "hr",
        name: "Dip Das",
        role: "Marketing Member",
        exp: "কর্মী ব্যবস্থাপনা ও ক্যারিয়ার সাপোর্ট",
        image: "./Images/dip.webp",
        altText: "dip picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/dip.d.a.s.1.1.1.1.0",
          facebookLabel: "Dip Das"
        }
      },
      {
        badge: "MM",
        badgeClass: "hr",
        name: "Rafsan Sheikh",
        role: "Marketing Member",
        exp: "কর্মী ব্যবস্থাপনা ও ক্যারিয়ার সাপোর্ট",
        image: "./Images/rafsan.webp",
        altText: "rafsan picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/as.ajmahin",
          facebookLabel: "Rafsan Sheikh"
        }
      },
      {
        badge: "MM",
        badgeClass: "hr",
        name: "Mahbubur Rahman Chowdhury",
        role: "Marketing Member",
        exp: "কর্মী ব্যবস্থাপনা ও ক্যারিয়ার সাপোর্ট",
        image: "./Images/mahbop.webp",
        altText: "Mahbubur Rahman Chowdhury",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/Mrpchow",
          facebookLabel: "Rafsan Sheikh"
        }
      },
      {
        badge: "MM",
        badgeClass: "hr",
        name: "Yeafes Lite",
        role: "Marketing Member",
        exp: "কর্মী ব্যবস্থাপনা ও ক্যারিয়ার সাপোর্ট",
        image: "./Images/iyafez png.webp",
        altText: "Yeafes Lite",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/mahmudurrahman.yeafes",
          facebookLabel: "Rafsan Sheikh"
        }
      }
    ]
  },
  {
    category: "ভিডিও ইডিটর",
    members: [
      {
        badge: "Seinor Editor",
        badgeClass: "hr",
        name: "Jaidul Islam Raja",
        role: "Vedio Editor",
        exp: "",
        image: "./Images/raja.webp",
        altText: "raja picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/p.a.n.d.a.a.a.2310",
          facebookLabel: "Jaidul Islam Raja"
        }
      },
      {
        badge: "Asistent Editor",
        badgeClass: "hr",
        name: "Sadaf Hasan",
        role: "Vedio Editor",
        exp: "",
        image: "./Images/sadaf.webp",
        altText: "sadaf picture",
        social: {
          linkedin: "#",
          facebook: "https://www.facebook.com/SaaDuu.iykyk",
          facebookLabel: "Sadaf Hasan"
        }
      }
    ]
  }
];


        
        
       