"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"



export  function Header () {
    const pathname = usePathname()

    return (
      <>
        <nav className="flex flex-col items-center px-20 py-12 xl:flex-row justify-between">
            <Link href='/'>
            <h1 className="text-5xl">Na<span className="text-[#00ff99]">beel ::</span></h1>
          </Link>
          <div className="flex gap-4 flex-wrap justify-center py-10 items-center text-2xl font-bold xl:flex xl:py-0">
          <Link className={`link ${pathname === '/' ? 'active underline' : ''}`} href="/">
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Home</span>
          </Link>
          <Link
            className={`link ${pathname === '/services' ? 'active underline' : ''}`}
            href="/services"
          >
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Services</span>
             </Link>
          <Link
            className={`link ${pathname === '/work' ? 'active underline ' : ''}`}
            href="/work"
          >
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Work</span>
             </Link>
          <Link
            className={`link ${pathname === '/resume' ? 'active underline ' : ''}`}
            href="/resume"
          >
             <span className="hover:text-[#00ff99] hover:transition-all	duration-500">Resume</span>
             </Link>
          <Link
            className={`link ${pathname === '/contact' ? 'active underline ' : ''}`}
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