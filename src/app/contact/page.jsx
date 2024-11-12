"use client"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

export default function Contact(){
    return (
        <div className="flex flex-col items-center gap-10 py-10 xl:flex-row xl:justify-evenly xl:items-center">
             <div className="flex flex-col items-start gap-10">
         <div className="flex items-center gap-8">
            <FaPhoneAlt size={60} className="text-[#00ff99] bg-[#1c1c22] p-2 rounded-lg"/>
            <div className="flex flex-col">
            <span className="text-[#FFFFFF99] text-2xl leading-[50px]">Phone</span>
            <span className="text-2xl font-bold">+923436157817</span>
            </div>
        </div>
        <div className="flex items-center gap-8">
            <MdEmail  className="text-[#00ff99] bg-[#1c1c22] p-2 rounded-lg" size={60}/>
            <div className="flex flex-col">
            <p className="text-[#FFFFFF99] text-2xl leading-[35px]">Email</p>
            <p className="text-2xl font-bold">waleedzafar187@gmail.com</p>
            </div>
                </div>
        <div className="flex items-center gap-5">
            <IoLocation  className="text-[#00ff99] bg-[#1c1c22] p-2 rounded-lg" size={60}/>
            <div className="flex flex-col">
            <p className="text-[#FFFFFF99] text-2xl leading-[35px]">Address</p>
            <p className="text-2xl font-bold">Islamabad Capital Territory</p>
            </div>
                </div>
         </div>
            <div className="bg-[#27272C] container p-10 w-[20%] rounded xl:w-[50%]">
            <p className="text-[#00FF99] text-4xl tracking-[3px] mb-5 font-bold">Let's work together</p>
            <p className="tracking-widest leading-[40px] mb-10 font-bold text-2xl text-[#FFFFFF99]">Reach out to start a conversation about your next project and see how we can work together to achieve your goals.</p>  
            <div className="grid grid-cols-1 justify-center items-center gap-12 xl:grid xl:grid-cols-2">
                <input type="text" className="px-5 py-5 w-[100%] xl:w-[80%] bg-[#1C1C22] rounded-lg text-2xl outline-none focus:outline-[#00ff99]" placeholder="First Name"/>
                <input type="text" placeholder="Last Name" className="px-5 py-5 w-[100%] xl:w-[80%] bg-[#1C1C22] rounded-lg text-2xl outline-none focus:outline-[#00ff99]"/>
                <input type="email" placeholder="Email Address" className="px-5 py-5 w-[100%] xl:w-[80%] bg-[#1C1C22] rounded-lg text-2xl outline-none focus:outline-[#00ff99]"/>
                <input type="number" placeholder="Phone Number" className="px-5 py-5 w-[100%] xl:w-[80%] bg-[#1C1C22] rounded-lg text-2xl outline-none focus:outline-[#00ff99]"/>
               <div className="flex flex-col">
               <select name="" id="" className="w-[100%] bg-[#1C1C22] rounded-lg text-2xl py-4 px-2 xl:w-[200%]">
                    <option value="">Select service</option>
                    <option value="">E-commerce</option>
                    <option value="">WordPress</option>
                    <option value="">FrontEnd Development</option>
                    <option value="">BackEnd Development</option>
                    <option value="">Graphic Designing</option>
                    <option value="">Ui/Ux Designing</option>
                    <option value="">Mobile App Development (React-Native)</option>
                    <option value="">Shopify</option>
                    <option value="">Full Stack Development</option>
                </select>
                <br />
                <textarea className="w-[100%] px-5 py-5 bg-[#1C1C22] rounded-lg text-2xl outline-none focus:outline-[#00ff99] xl:w-[200%]"  placeholder="type your message here" rows="8" cols="50">
                </textarea>
               </div>
            </div>
            <button className="bg-[#00ff99] px-6 py-4 rounded-full text-black my-10 text-3xl font--bold">Send Message</button>
            </div>
           
        </div>
    )
}