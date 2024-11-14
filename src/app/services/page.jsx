"use client";
import { FiArrowDownRight } from "react-icons/fi";

export default function Services() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 py-14 gap-10 xl:grid-cols-2 xl:gap-15">
      <div className="flex flex-col bg-[#1c1c22] group p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group-hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition-all duration-500">01</span>
            <FiArrowDownRight
              size={50}
              className="group-hover:-rotate-45 group-hover:bg-[#fe2054] transition-all duration-500 rounded-full bg-white text-black"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#fe2054] transition duration-700 ease-in-out xl:text-3xl">
            WordPress Development
          </h1>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Crafting intuitive interfaces for enhanced user engagement and
            satisfaction through seamless design and user-centric experiences.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22] group p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group-hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition-all duration-500">02</span>
            <FiArrowDownRight
              size={50}
              className="group-hover:-rotate-45 group-hover:bg-[#fe2054] transition-all duration-500 rounded-full bg-white text-black"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#fe2054] transition duration-700 ease-in-out xl:text-3xl">
            Shopify Development
          </h1>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Crafting intuitive interfaces for enhanced user engagement and
            satisfaction through seamless design and user-centric experiences.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22] group p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group-hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition-all duration-500">03</span>
            <FiArrowDownRight
              size={50}
              className="group-hover:-rotate-45 group-hover:bg-[#fe2054] transition-all duration-500 rounded-full bg-white text-black"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#fe2054] transition duration-700 ease-in-out xl:text-3xl">
            Full Stack Development
          </h1>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Crafting intuitive interfaces for enhanced user engagement and
            satisfaction through seamless design and user-centric experiences.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22] group p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group-hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition-all duration-500">04</span>
            <FiArrowDownRight
              size={50}
              className="group-hover:-rotate-45 group-hover:bg-[#fe2054] transition-all duration-500 rounded-full bg-white text-black"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#fe2054] transition duration-700 ease-in-out xl:text-3xl">
            Website Maintenance
          </h1>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Crafting intuitive interfaces for enhanced user engagement and
            satisfaction through seamless design and user-centric experiences.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22] group p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group-hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition-all duration-500">05</span>
            <FiArrowDownRight
              size={50}
              className="group-hover:-rotate-45 group-hover:bg-[#fe2054] transition-all duration-500 rounded-full bg-white text-black"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#fe2054] transition duration-700 ease-in-out xl:text-3xl">
            E-commerce
          </h1>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Crafting intuitive interfaces for enhanced user engagement and
            satisfaction through seamless design and user-centric experiences.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22] group p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group-hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition-all duration-500">06</span>
            <FiArrowDownRight
              size={50}
              className="group-hover:-rotate-45 group-hover:bg-[#fe2054] transition-all duration-500 rounded-full bg-white text-black"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#fe2054] transition duration-700 ease-in-out xl:text-3xl">
            UI/UX Design
          </h1>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Crafting intuitive interfaces for enhanced user engagement and
            satisfaction through seamless design and user-centric experiences.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
      </div>
    </div>
  );
}
