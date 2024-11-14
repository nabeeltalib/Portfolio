"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Nabeel2 from "@/Components/assets/NabeelLogo-02 (1).png";
import {MobileNav} from "@/Components/MobileNav"

export function Header() {
  const pathname = usePathname();

  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-around py-10 xl:flex flex-row xl:justify-between">
       <Link href='/'>
       <Image src={Nabeel2} width={165}/>
       </Link>
        <div className="hidden gap-6 flex-wrap justify-center py-10 items-center font-bold xl:flex xl:py-0">
          <Link className={`link ${pathname === "/"}`} href="/">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500 text-xl">
              Home
            </span>
          </Link>
          <Link className={`link ${pathname === "/services"}`} href="/services">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500 text-xl">
              Services
            </span>
          </Link>
          <Link className={`link ${pathname === "/work"}`} href="/work">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500 text-xl">
              Work
            </span>
          </Link>
          <Link className={`link ${pathname === "/resume"}`} href="/resume">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500 text-xl">
              Resume
            </span>
          </Link>
          <Link className={`link ${pathname === "/contact"}`} href="/contact">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500 text-xl">
              Contact
            </span>
          </Link>
          <Link href="/">
            <button className="bg-[#fe2054] px-8 py-4 rounded-full text-white font-bold hidden hover:transition-all text-xl duration-700  xl:flex">
              Hire Me
            </button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
        <MobileNav />
        </div>
      </nav>
    </div>
  );
}
