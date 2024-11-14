"use client"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import Image from 'next/image'
import portfolioPic from "@/Components/assets/portfoliopic.png"
import Typewriter from 'typewriter-effect'; 
import CountUp from 'react-countup';



export default function Home(){
  return (
    <div>
    <div className="container mx-auto">
    <div className="flex flex-col  xl:flex-row items-center justify-between xl:pt-12 xl:pb-16">
    <div className="flex flex-col gap-6 text-center xl:text-left order-2 mt-6 xl:order-none">
    <div className="text-3xl font-bold">
    <Typewriter
  options={{
    strings: ['Full Stack Developer', "Graphic Designer", "WordPress Developer"],
    autoStart: true,
    loop: true,
  }}
/>
  </div>
<span className="text-xl xl:text-5xl">Hello, My Self</span>
    <span className="text-white hover:text-[#fe2054] text-3xl xl:text-6xl hover:transition-all duration-500"><span className="font-bold text-[#fe2054]">Nabeel</span> Ahmed</span>
     <span className="max-w-[500px] mb-10 text-white/80 tracking-widest leading-10 font-bold px-10 xl:px-0">I excel at crafting elegant digital experience and I am proficient in various programming language and technologies.</span>
      </div>
      <div >
    <Image src={portfolioPic} alt="User" width={400}  className="Pics w-28 xl:w-0"/>
    </div>
    </div>
    </div>
  
  <div className="container mx-auto">
    <div className="flex flex-wrap  gap-22 justify-center xl:justify-start">
  <button className="custom-btn btn-12"><span className="text-black font-bold text-xl">Click !</span><span className="text-black font-bold text-xl">Visit My Cv <IoDownloadOutline size={30}/></span></button>
  <div className="flex gap-10 mt-10 xl:mt-0">
  <FaLinkedin className="border border-[#fe2054] rounded-full p-2 text-[#fe2054] hover:transition-all	duration-500 hover:bg-[#fe2054] hover:text-black" size={50}/>      
 <FaInstagram className="border border-[#fe2054] rounded-full p-2 text-[#fe2054] hover:transition-all	duration-500 hover:bg-[#fe2054] hover:text-black"  size={50}/>
 <FaFacebook className="border border-[#fe2054] rounded-full p-2 text-[#fe2054] hover:transition-all	duration-500 hover:bg-[#fe2054] hover:text-black"  size={50}/>
<FaGithub className="border border-[#fe2054] rounded-full p-2 text-[#fe2054] hover:transition-all	duration-500 hover:bg-[#fe2054] hover:text-black" size={50}/>
  </div>
    </div>
  </div>

<div className="container mx-auto">
    <div className="flex flex-wrap gap-6 mx-w-[100vw] mt-24 xl:max-w-none">
      <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <span className="text-4xl xl:text-6xl font-extrabold"><CountUp end={5} duration={2.75} suffix="+"/></span>
      <span className="max-w-[150px] text-[#fe2054]">Years of <br />Experience</span>
      </div>
      <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <span className="text-4xl xl:text-6xl font-extrabold"><CountUp end={30} duration={2.75} suffix="+"/></span>
      <span className="max-w-[150px] text-[#fe2054]">projects<br />Complete</span>
      </div>
      <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <span className="text-4xl xl:text-6xl font-extrabold"><CountUp end={10} duration={2.75} suffix="+"/></span>
      <span className="max-w-[150px] text-[#fe2054]">Technology<br />Master</span>
      </div>
      <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <span className="text-4xl xl:text-6xl font-extrabold"><CountUp end={86} duration={2.75} suffix="+"/></span>
      <span className="max-w-[150px] text-[#fe2054]">Code<br />Commits</span>
      </div>
    </div>
</div>
  </div>

  )
}