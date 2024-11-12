"use client"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import Image from 'next/image'
import Mans from "@/Components/assets/Mans.png"
import Typewriter from 'typewriter-effect'; 


export default function Home(){
  return (
    <div>
    <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16">
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
<span className="text-5xl">Hello, My Self</span>
    <span className="text-white hover:text-[#fe2054] text-6xl hover:transition-all duration-500"><span className="font-bold text-[#fe2054]">Nabeel</span> Ahmed</span>
     <span className="max-w-[500px] mb-10 text-white/80 tracking-widest leading-10 font-bold">I excel at crafting elegant digital experience and I am proficient in various programming language and technologies.</span>
      </div>
      <div>
    <Image src={Mans} alt="User" width={400}/>
    </div>
    </div>
    </div>

<div className="container mx-auto flex flex-col xl:flex-row items-center gap-16">
    <button className="custom-btn btn-12"><span className="text-black font-bold text-xl">Click !</span><span className="text-black font-bold text-xl">Visit My Cv <IoDownloadOutline size={30}/></span></button>
    <div className="flex items-center justify-center gap-8">
      <FaLinkedin className="border border-[#fe2054] rounded-full p-2 text-[#fe2054] hover:transition-all	duration-500 hover:bg-[#fe2054] hover:text-black" size={50}/>      
      <FaInstagram className="border border-[#fe2054] rounded-full p-2 text-[#fe2054] hover:transition-all	duration-500 hover:bg-[#fe2054] hover:text-black"  size={50}/>
      <FaFacebook className="border border-[#fe2054] rounded-full p-2 text-[#fe2054] hover:transition-all	duration-500 hover:bg-[#fe2054] hover:text-black"  size={50}/>
      <FaGithub className="border border-[#fe2054] rounded-full p-2 text-[#fe2054] hover:transition-all	duration-500 hover:bg-[#fe2054] hover:text-black"  size={50}/>
    </div>
</div>

<div className="container mx-auto">
    <div className="flex flex-wrap gap-6 mx-w-[100vw] mt-24 xl:max-w-none">
      <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <span className="text-4xl xl:text-6xl font-extrabold">3</span>
      <span className="max-w-[150px] leading-snug text-white/80 ">Years of <br />Experience</span>
      </div>
      <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <span className="text-4xl xl:text-6xl font-extrabold">3</span>
      <span className="max-w-[150px] leading-snug text-white/80 ">Years of <br />Experience</span>
      </div>
      <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <span className="text-4xl xl:text-6xl font-extrabold">3</span>
      <span className="max-w-[150px] leading-snug text-white/80 ">Years of <br />Experience</span>
      </div>
      <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
      <span className="text-4xl xl:text-6xl font-extrabold">3</span>
      <span className="max-w-[150px] leading-snug text-white/80 ">Years of <br />Experience</span>
      </div>
    </div>
</div>
  </div>

  )
}