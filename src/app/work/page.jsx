"use client"
import React,{useState} from "react"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub} from "react-icons/bs"
import Link from "next/link"
import Image from "next/image"
import Pro1 from "@/Components/assets/project-1.png"
import Pro2 from "@/Components/assets/project-2.png"
import Pro3 from "@/Components/assets/project-3.png"
import Pro4 from "@/Components/assets/project-4.png"
import Pro5 from "@/Components/assets/project-5.png"
import Workslidebtns from '@/Components/Workslidebtns'


const project = [
    {
        num: "01",
        category: "FrontEnd",
        title: "Project 1",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur soluta voluptatem laborum omnis? Eum, dolor?',
        stack:[{name: 'HTML 5'}, {name: 'CSS 3'}, {name: 'Javascript'}],
        image: Pro1,
        live: '',
        github: ''
    },
    {
        num: "02",
        category: "MernStack",
        title: "Project 2",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur soluta voluptatem laborum omnis? Eum, dolor?',
        stack:[{name: 'React Js'}, {name: 'MongoDb'}, {name: 'Express.js'}],
        image: Pro2,
        live: '',
        github: ''
    },
    {
        num: "03",
        category: "FullStack",
        title: "Project 3",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur soluta voluptatem laborum omnis? Eum, dolor?',
        stack:[{name: 'Next.js'}, {name: 'MongoDb'}, {name: 'Node.js'}],
        image: Pro3,
        live: '',
        github: ''
    },
    {
        num: "04",
        category: "FrontEnd",
        title: "Project 4",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur soluta voluptatem laborum omnis? Eum, dolor?',
        stack:[{name: 'React Js'}, {name: 'Tailwind CSS'}, {name: 'AntDesign'}],
        image: Pro4,
        live: '',
        github: ''
    },
    {
        num: "05",
        category: "Mobile App",
        title: "Project 5",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur soluta voluptatem laborum omnis? Eum, dolor?',
        stack:[{name: 'Javascript'}, {name: 'styleSheet'}, {name: 'Firebase'}],
        image: Pro5,
        live: '',
        github: ''
    },
]
export default function Work(){
    const  [projects, setProjects] = useState(project[0])
    const HandleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProjects(project[currentIndex])
    }
    return (
        <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
             <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-8xl leading-none font-extrabold text-outline text-white">
                           {projects.num} 
                        </div>
                        {/* projetc category */}
                        <h2 className="text-[42px] leading-none font-bold text-white group-hover:text-[#00ff99]
                        transition-all duration-500 capitalize
                        ">{projects.category} project</h2>
                        {/* project desc */}
                        <p className="text-white/60 leading-[40px] text-2xl">{projects.description}</p>
                        <ul className="flex flex-wrap justify-center gap-4 xl:flex xl:justify-start">
                            {projects.stack.map((item,index)=>{
                             return <li key={index} className="text-5xl text-[#00ff99]">{item.name}
                             {index !== projects.stack.length - 1 && ","}
                             </li>
                            })}
                        </ul>
                        {/* border */}
                        <div className="border border-white/20"></div>
                        {/* button */}
                        <div className="flex gap-8">
                            <Link href=''>
                            <BsArrowUpRight  className="bg-white/5 rounded-full p-2" size={50}/>
                            </Link>
                            <Link href=''>
                            <BsGithub className="bg-white/5 rounded-full p-2" size={50}/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={HandleSlideChange}>
                        {project.map((item, index)=>{
                            return <SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">

                                    </div>
                                    <div className="relative w-full h-full">
                                        <Image src={item.image} fill alt="Projects" className="object-cover"/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                        {/* slider button */}
                        <Workslidebtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0
                        z-20 w-full justify-between xl:w-max xl:justify-none" btnstyles="bg-[#00ff99] hover:bg-[#00ff99]-hover text-primary 
                        text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                    </Swiper>
                </div>
             </div>
            </div>
        </div>
    )
}