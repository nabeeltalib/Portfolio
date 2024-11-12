"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nabeel1 from "@/Components/assets/NabeelLogo-02 (1).png";
import Image from "next/image";

export function MobileNav(){
const pathname = usePathname()
return (
    <Sheet>
    <SheetTrigger>
        <CiMenuFries className="text-[32px] text-[#fe2054]"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col justify-center items-center">
        <Link href="/">
          <Image src={Nabeel1} width={200} alt="Portfolio" />
        </Link>
        <div className="flex flex-col gap-10">
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
        </div>
        </SheetContent>
    </Sheet>
)
}



