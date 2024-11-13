"use client";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Services() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 py-14 gap-10 xl:grid-cols-2 xl:gap-15">
        <div className="flex flex-col bg-[#1c1c22] py-5 p-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl C">01</span>
            <FaArrowCircleRight
              size={50}
              className="hover:-rotate-45 transition duration-700 ease-in-out"
            />
          </div>
          <span className="text-3xl font-bold hover:text-[#fe2054] transition duration-700 ease-in-out">
            WordPress Development
          </span>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Custom WordPress solutions with tailored themes and plugins for
            enhanced website functionality and performance.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition duration-700 ease-in-out">02</span>
            <FaArrowCircleRight
              size={50}
              className="hover:-rotate-45 transition duration-500 ease-in-out"
            />
          </div>
          <span className="text-3xl font-bold hover:text-[#fe2054] transition duration-700 ease-in-out">
            Shopify Development
          </span>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Expert Shopify development to create and customize high-converting
            e-commerce stores tailored to your business needs.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition duration-700 ease-in-out">03</span>
            <FaArrowCircleRight
              size={50}
              className="hover:-rotate-45 transition duration-700 ease-in-out"
            />
          </div>
          <span className="text-3xl font-bold hover:text-[#fe2054] transition duration-700 ease-in-out">
            Full Stack Development
          </span>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Crafting responsive, interactive websites & Mobile Apps using
            Next.js, React.js, React-Native and modern frameworks.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition duration-700 ease-in-out">04</span>
            <FaArrowCircleRight
              size={50}
              className="hover:-rotate-45 transition duration-700 ease-in-out"
            />
          </div>
          <span className="text-3xl font-bold hover:text-[#fe2054] transition duration-700 ease-in-out">
            E-commerce Development
          </span>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Designing and developing bespoke e-commerce stores using WooCommerce
            and Shopify for optimal user experience and business growth.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition duration-700 ease-in-out">05</span>
            <FaArrowCircleRight
              size={50}
              className="hover:-rotate-45 transition duration-700 ease-in-out"
            />
          </div>
          <span className="text-3xl font-bold hover:text-[#fe2054] transition duration-700 ease-in-out">
            Website Maintenance
          </span>
          <span className="text-white/80 tracking-widest leading-[40px]">
            Comprehensive maintenance and technical support ensuring your
            website runs smoothly with timely updates and troubleshooting.
          </span>
          <span className="border border-cyan-100"></span>
        </div>
        <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
          <div className="flex justify-between items-center group hover:text-[#fe2054] transition-all duration-50">
            <span className="font-bold text-5xl transition duration-700 ease-in-out">06</span>
            <FaArrowCircleRight
              size={50}
              className="hover:-rotate-45 transition duration-700 ease-in-out"
            />
          </div>
          <span className="text-3xl font-bold hover:text-[#fe2054] transition duration-700 ease-in-out">
            UI/UX Design
          </span>
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
