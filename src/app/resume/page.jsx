"use client"
import { ScrollArea } from "@/Components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs} from "react-icons/si"




const about = {
    title: "About Me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequuntur necessitatibus tempore nemo adipisci possimus.",
    info: [
        {
         fieldName:'Name',
         fieldValue: 'like colman'
        },
        {
            fieldName:'Phone',
            fieldValue: '(+09090990)'
           },
           {
            fieldName:'Experience',
            fieldValue: '12 + years'
           },
           {
            fieldName:'Skype',
            fieldValue: 'luke.01'
           },
           {
            fieldName:'Nationality',
            fieldValue: 'Pakistani'
           },
           {
            fieldName:'Email',
            fieldValue: 'luke@mail.com'
           },
           {
            fieldName:'Freelance',
            fieldValue: 'Available'
           },
           {
            fieldName:'languages',
            fieldValue: 'English, spanish'
           },
    ]
}

const experience = {
    icon: '/',
    title: 'My Experience',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veniam accusamus. Temporibus molestias nostrum magni.',
    items: [
        {
            company: 'Tech Solutions Inc.',
            position: 'Full Stack Developer',
            duration: "2022 - Present"
        },
        {
            company: 'Web Design Studio',
            position: 'Front-End Developer',
            duration: "Summer 2021"
        },
        {
            company: 'E-commerce startup',
            position: 'Freelance Web Developer',
            duration: "2020 - 2021"
        },
        {
            company: 'Tech Academy',
            position: 'Teaching Assistant',
            duration: "2019 - 2020"
        },
        {
            company: 'Digital agency',
            position: 'UI/UX Designer',
            duration: "2018 - 2019"
        },
        {
            company: 'Software Development Firm',
            position: 'Junior Developer',
            duration: "2017 - 2018"
        },
    ]
}

const education = {
    icon: '/',
    title: 'My Education',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, veniam accusamus. Temporibus molestias nostrum magni.',
    items: [
        {
            Institute: 'Online Course Platform',
            degree: 'Full Stack Web Development Bootcamp',
            duration: "2023"
        },
        {
            Institute: 'CodeCademy',
            degree: 'Front-End Track',
            duration: "2022"
        },
        {
            Institute: 'Online Course',
            degree: 'Programming Course',
            duration: "2020 - 2021"
        },
        {
            Institute: 'Tech Institute',
            degree: 'Certified Web Developer',
            duration: "2019"
        },
        {
            Institute: 'Design School',
            degree: 'Diploma in Graphic Design',
            duration: "2016 - 2018"
        },
        {
            Institute: 'Community College',
            degree: 'Associate Degree in Computer Science',
            duration: "2014 - 2016"
        },
    ]
}

const skill = {
    title: 'My Skill',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium error, commodi fugiat cum veniam aliquid!',
    skillList: [
        {
            icon: <FaHtml5/>,
            name: 'HTML 5'
        },
        {
            icon: <FaCss3/>,
            name: 'CSS 3'
        },
        {
            icon: <FaJs/>,
            name: 'Javascript'
        },
        {
            icon: <FaReact/>,
            name: 'React.js'
        },
        {
            icon: <SiNextdotjs/>,
            name: 'Next.js'
        },
        {
            icon: <SiTailwindcss/>,
            name: 'Tailwind Css'
        },
        {
            icon: <FaNodeJs/>,
            name: 'Node.js'
        },
        {
            icon: <FaFigma/>,
            name: 'Figma'
        },
    ]
}

export default function Resume(){
    return (
        <div className="min-h-[100vh] flex py-12">
            <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col py-32 xl:flex-row xl:py-0 items-center gap-[60px]">
            <TabsList className="bg-black flex-col w-full max-w-[450px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="w-full bg-[#27272c] p-6 text-xl rounded-md font-bold">Experience</TabsTrigger>
            <TabsTrigger value="education" className="w-full bg-[#27272c] p-6 text-xl rounded-md font-bold">Education</TabsTrigger>
            <TabsTrigger value="skill" className="w-full bg-[#27272c] p-6 text-xl rounded-md font-bold">Skill</TabsTrigger>
            <TabsTrigger value="about" className="w-full bg-[#27272c] p-6 text-xl rounded-md font-bold">About Me</TabsTrigger>
            </TabsList>
            <div className="h-[50vh] w-full">
            <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center py-32 xl:text-left xl:py-0">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                     <ScrollArea className="h-[400px]">
                     <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item,index)=>{
                            return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center
                            lg:items-start gap-2
                            ">
                                <span className="text-[#00ff99]">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                                    <p className="text-white/60">{item.company}</p>
                                </div>
                            </li>)
                        })}
                     </ul>
                     </ScrollArea>
                </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center py-32 xl:text-left xl:py-0">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                     <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                     <ScrollArea className="h-[400px]">
                     <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item,index)=>{
                            return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center
                            lg:items-start gap-2
                            ">
                                <span className="text-[#00ff99]">{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                                    <p className="text-white/60">{item.Institute}</p>
                                </div>
                            </li>)
                        })}
                     </ul>
                     </ScrollArea>
                </div>
            </TabsContent>
            <TabsContent value="skill" className="w-full h-full">
             <div className="flex flex-col gap-[30px] py-32 xl:py-0">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{skill.title}</h3>
                 <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skill.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]"> 
                    {skill.skillList.map((skill, index)=>{
                        return <li key={index} className="w-full h-[150px] bg-[#232329] group rounded-lg flex flex-col gap-4 justify-center items-center">
                            <div className="text-6xl group-hover:text-[#00ff99] transition-all duration-50">{skill.icon}</div>
                            <p className="capatalize">{skill.name}</p>
                        </li>
                    })}
                </ul>
             </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px] py-32 xl:py-0">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-2 gap-10 xl:gap-[30px] xl:grid-cols-4">
                        {about.info.map((item,index)=>{
                         return <li key={index} className="flex flex-row justify-center gap-10 xl:flex xl:flex-col flex-wrap">
                            <span className="text-2xl text-white/60">{item.fieldName}</span>
                            <span className="text-2xl font-bold">{item.fieldValue}</span>
                         </li>
                        })}
                    </ul>
                </div>
            </TabsContent>
            </div>
            </Tabs>
            </div>
        </div>
    )
}