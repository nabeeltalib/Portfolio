"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { Input } from "@/Components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";

export default function Contact() {
  return (
    <div className="container mx-auto">
    <div className="flex flex-col items-center gap-10 py-10 xl:flex-row xl:justify-evenly xl:items-center">
      <div className="flex flex-col items-start gap-10">
        <div className="flex items-center gap-8">
          <FaPhoneAlt
            size={60}
            className="text-[#fe2054] bg-[#1c1c22] p-2 rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-[#FFFFFF99] text-2xl leading-[50px]">
              Phone
            </span>
            <span className="text-2xl font-bold">+923436157817</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <MdEmail
            className="text-[#fe2054] bg-[#1c1c22] p-2 rounded-lg"
            size={60}
          />
          <div className="flex flex-col">
            <p className="text-[#FFFFFF99] text-2xl leading-[35px]">Email</p>
            <p className="text-2xl font-bold">waleedzafar187@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <IoLocation
            className="text-[#fe2054] bg-[#1c1c22] p-2 rounded-lg"
            size={60}
          />

          <div className="flex flex-col">
            <p className="text-[#FFFFFF99] text-2xl leading-[35px]">Address</p>
            <p className="text-2xl font-bold">Islamabad Capital Territory</p>
          </div>
        </div>
      </div>

      <div className="bg-[#27272C] p-10 rounded xl:w-[54%]">
        <p className="text-[#fe2054] text-4xl tracking-[3px] mb-5 font-bold">
          Let's work together
        </p>
        <p className="tracking-widest leading-10 mb-6 font-bold text-[#FFFFFF99]">
          Reach out to start a conversation about your next project and see how
          we can work together to achieve your goals.
        </p>
        <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input placeholder="Full Name" type="text" className="py-6 bg-[#1C1C22]"/>
          <Input placeholder="Email Address" type="email" className="py-6 bg-[#1C1C22]"/>
          <Input placeholder="Phone Number" type='number' className="py-6 bg-[#1C1C22]"/>
    <Select>
  <SelectTrigger>
    <SelectValue placeholder="Select A service" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
    <SelectItem value="light">Select A service</SelectItem>
    <SelectItem value="dark">Full Stack Development</SelectItem>
    <SelectItem value="system">WordPress Development</SelectItem>
    <SelectItem value="system">Shopify</SelectItem>
    <SelectItem value="system">Ui/Ux</SelectItem>
    <SelectItem value="system">WordPress Development</SelectItem>
    <SelectItem value="system">Website Maintenance</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
        </div>
<Textarea className="h-[200px]" placeholder="Type Your Message Here....."/>
<Button size="lg" className="max-w-40">Send Message</Button>
</div>
      </div>
    </div>
    </div>
  );
}
