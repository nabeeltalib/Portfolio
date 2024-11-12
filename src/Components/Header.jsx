"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"



export  function Header () {
    const pathname = usePathname()

    return (
      <>
        <nav className="flex flex-col items-center px-[100px] py-12 xl:flex-row justify-between">
            <Link href='/'>
            <h1 className="text-5xl">Na<span className="text-[#00ff99]">beel ::</span></h1>
          </Link>
          <div className="flex gap-6 flex-wrap justify-center py-10 items-center text-3xl font-bold xl:flex xl:py-0">
          <Link className={`link ${pathname === '/'}`} href="/">
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Home</span>
          </Link>
          <Link
            className={`link ${pathname === '/services'}`}
            href="/services"
          >
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Services</span>
             </Link>
          <Link
            className={`link ${pathname === '/work'}`}
            href="/work"
          >
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Work</span>
             </Link>
          <Link
            className={`link ${pathname === '/resume'}`}
            href="/resume"
          >
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Resume</span>
             </Link>
          <Link
            className={`link ${pathname === '/contact'}`}
            href="/contact"
          >
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Contact</span>
             </Link>
          <Link href='/'>
          <button className="bg-[#00ff99] px-8 py-4 rounded-full text-black hidden hover:transition-all duration-500 xl:flex">Hire Me</button>
          </Link>
          </div>
          {/* mobile nav */}
          {/* <div className="xl:hidden flex">
          <GiHamburgerMenu size={50} className="text-[#00ff99]"/>
          </div> */}
          </nav>
      </>
       )   
}