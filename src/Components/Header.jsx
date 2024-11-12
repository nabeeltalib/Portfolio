"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Nabeel from "@/Components/assets/NabeelLogo-01 (1).png";
import Nabeel1 from "@/Components/assets/NabeelLogo-02 (1).png";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="container mx-auto">
      <nav className="flex flex-col items-center py-12 xl:flex-row justify-between">
        <Link href="/">
          <Image src={Nabeel1} width={250} alt="Portfolio" />
        </Link>
        <div className="flex gap-6 flex-wrap justify-center py-10 items-center font-bold xl:flex xl:py-0">
          <Link className={`link ${pathname === "/"}`} href="/">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500">
              Home
            </span>
          </Link>
          <Link className={`link ${pathname === "/services"}`} href="/services">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500">
              Services
            </span>
          </Link>
          <Link className={`link ${pathname === "/work"}`} href="/work">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500">
              Work
            </span>
          </Link>
          <Link className={`link ${pathname === "/resume"}`} href="/resume">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500">
              Resume
            </span>
          </Link>
          <Link className={`link ${pathname === "/contact"}`} href="/contact">
            <span className="hover:text-[#fe2054] hover:transition-all	duration-500">
              Contact
            </span>
          </Link>
          <Link href="/">
            <button className="bg-[#fe2054] px-8 py-4 rounded-full text-white font-bold hidden hover:transition-all duration-500 xl:flex">
              Hire Me
            </button>
          </Link>
        </div>
        {/* mobile nav */}
        {/* <div className="xl:hidden flex">
          <GiHamburgerMenu size={50} className="text-[#fe2054]"/>
          </div> */}
      </nav>
    </div>
  );
}
