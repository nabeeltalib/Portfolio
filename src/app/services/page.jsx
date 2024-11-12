"use client"
import { FaArrowCircleRight } from "react-icons/fa";


export default function Services(){
    return (
            <div className="container mx-auto px-20">
            <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-15">
            <div className="flex flex-col bg-[#1c1c22] p-5 py-5 rounded-lg gap-8">
                <div className="flex justify-between items-center group hover:text-[#00ff99] transition-all duration-50">
                    <span className="font-bold text-5xl">01</span>
                    <FaArrowCircleRight size={50} className="hover:-rotate-45 transition-all duration-100"/>
                    </div>
                    <span className="text-3xl font-bold hover:text-[#00ff99] transition-all duration-50">WordPress Development</span>
                    <span className="text-white/80 text-2xl tracking-widest leading-[50px]">Custom WordPress solutions with tailored themes and plugins for enhanced website functionality and performance.</span>
                    <span className="border border-cyan-100"></span>
            </div>
            <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
                <div className="flex justify-between items-center group hover:text-[#00ff99] transition-all duration-50">
                    <span className="font-bold text-5xl">01</span>
                    <FaArrowCircleRight size={50} className="hover:-rotate-45 transition-all duration-100"/>
                    </div>
                    <span className="text-3xl font-bold hover:text-[#00ff99] transition-all duration-50">Shopify Development</span>
                    <span className="text-white/80 text-2xl tracking-widest leading-[50px]">Expert Shopify development to create and customize high-converting e-commerce stores tailored to your business needs.</span>
                    <span className="border border-cyan-100"></span>
            </div>
            <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
                <div className="flex justify-between items-center group hover:text-[#00ff99] transition-all duration-50">
                    <span className="font-bold text-5xl">01</span>
                    <FaArrowCircleRight size={50} className="hover:-rotate-45 transition-all duration-100"/>
                    </div>
                    <span className="text-3xl font-bold hover:text-[#00ff99] transition-all duration-50">Full Stack Development</span>
                    <span className="text-white/80 text-2xl tracking-widest leading-[50px]">Crafting responsive, interactive websites & Mobile Apps using Next.js, React.js, React-Native and modern frameworks.</span>
                    <span className="border border-cyan-100"></span>
            </div>
            <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
                <div className="flex justify-between items-center group hover:text-[#00ff99] transition-all duration-50">
                    <span className="font-bold text-5xl">01</span>
                    <FaArrowCircleRight size={50} className="hover:-rotate-45 transition-all duration-100"/>
                    </div>
                    <span className="text-3xl font-bold hover:text-[#00ff99] transition-all duration-50">E-commerce Development</span>
                    <span className="text-white/80 text-2xl tracking-widest leading-[50px]">Designing and developing bespoke e-commerce stores using WooCommerce and Shopify for optimal user experience and business growth.</span>
                    <span className="border border-cyan-100"></span>
            </div>
            <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
                <div className="flex justify-between items-center group hover:text-[#00ff99] transition-all duration-50">
                    <span className="font-bold text-5xl">01</span>
                    <FaArrowCircleRight size={50} className="hover:-rotate-45 transition-all duration-100"/>
                    </div>
                    <span className="text-3xl font-bold hover:text-[#00ff99] transition-all duration-50">Website Maintenance</span>
                    <span className="text-white/80 text-2xl tracking-widest leading-[50px]">Comprehensive maintenance and technical support ensuring your website runs smoothly with timely updates and troubleshooting.</span>
                    <span className="border border-cyan-100"></span>
            </div>
            <div className="flex flex-col bg-[#1c1c22]  p-5 py-5 rounded-lg gap-8">
                <div className="flex justify-between items-center group hover:text-[#00ff99] transition-all duration-50">
                    <span className="font-bold text-5xl">01</span>
                    <FaArrowCircleRight size={50} className="hover:-rotate-45 transition-all duration-100"/>
                    </div>
                    <span className="text-3xl font-bold hover:text-[#00ff99] transition-all duration-50">UI/UX Design</span>
                    <span className="text-white/80 text-2xl tracking-widest leading-[50px]">Crafting intuitive interfaces for enhanced user engagement and satisfaction through seamless design and user-centric experiences.</span>
                    <span className="border border-cyan-100"></span>
            </div>
            </div>
            </div>
            )
}