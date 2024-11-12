"use client"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import Image from 'next/image'
import Mans from "@/Components/assets/Mans.png"


export default function Home(){
  return (
    <>
    <div className="flex flex-col py-16 px-24 xl:flex-row items-center justify-between">
    <div className="flex flex-col gap-6 text-center xl:text-left order-2 mt-6 xl:order-none">
      <span className="text-2xl">Web Developer</span>
      <span className="text-5xl">Hello I am</span>
      <span className="text-[#00ff99] hover:text-white font-bold text-6xl hover:transition-all	duration-500">Muhammad Waleed</span>
      <span className="hover:text-[#00ff99] text-5xl hover:transition-all	duration-500">Zafar</span>
     <span className="tracking-widest max-w-[530px] leading-10 text-xl">I excel at crafting elegant digital experience and I am proficient in various programming language and technologies.</span>
      </div>
      <div className="px-40">
    <Image src={Mans} alt="User" width={400}/>
    </div>
    </div>

    <div className="flex px-24 flex-wrap gap-10 text-2xl xl:flex justify-center xl:justify-start">
      <button className="flex gap-2 tracking-widest border border-[#00ff99] rounded-full font-bold px-8 py-2 text-[#00ff99] hover:transition-all	duration-500 hover:bg-[#00ff99] hover:text-black">Visit My Cv
       <IoDownloadOutline size={30}/>
      </button>
      <FaLinkedin className="border border-[#00ff99] rounded-full p-2 text-[#00ff99] hover:transition-all	duration-500 hover:bg-[#00ff99] hover:text-black" size={50}/>      
      <FaInstagram className="border border-[#00ff99] rounded-full p-2 text-[#00ff99] hover:transition-all	duration-500 hover:bg-[#00ff99] hover:text-black"  size={50}/>
      <FaFacebook className="border border-[#00ff99] rounded-full p-2 text-[#00ff99] hover:transition-all	duration-500 hover:bg-[#00ff99] hover:text-black"  size={50}/>
      <FaGithub className="border border-[#00ff99] rounded-full p-2 text-[#00ff99] hover:transition-all	duration-500 hover:bg-[#00ff99] hover:text-black"  size={50}/>
    </div>

    <div className="flex flex-wrap justify-around items-center py-28 gap-10">
      <div className="flex gap-8 items-center">
      <span className="text-9xl font-bold">3</span>
      <span className="text-2xl">Years of <br />Experience</span>
      </div>
      <div className="flex gap-8 items-center">
      <span className="text-9xl font-bold">3</span>
      <span className="text-2xl">Projects <br />Completed</span>
      </div>
      <div className="flex gap-8 items-center">
      <span className="text-9xl font-bold">3</span>
      <span className="text-2xl">Technology <br />master</span>
      </div>
      <div className="flex gap-8 items-center">
      <span  className="text-9xl font-bold">3</span>
      <span className="text-2xl">Code <br />Commits</span>
      </div>
    </div>
    </>

  )
}