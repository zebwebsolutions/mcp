import Link from 'next/link';
import { useRef } from 'react';

import {FaBars} from 'react-icons/fa';

export default function MobileMenu() {
    const navRef = useRef(null);

    const showNavbar = () => {
        navRef.current.classList.toggle("show-menu")
    }
    return(
        <>
            <div>
                <button onClick={showNavbar}>
                    <FaBars />
                </button>
            </div>
            <div ref={navRef} className="mobile-menu">
                <nav className="left-nav hidden sm:max-lg:hidden absolute left-0 top-[64px] border-red-500 bg-slate-900 w-full px-5 py-5 space-y-5">
                    <Link href="/" className='mr-3 no-underline text-white block'>Home</Link>
                    <Link href="/about" className='mr-3 no-underline text-white block'>About Us</Link>
                    <Link href="/services" className='mr-3 no-underline text-white block'>Services</Link>
                    <Link href="/team" className='mr-3 no-underline text-white block'>Team</Link>
                    <Link href="/contact" className='mr-3 no-underline text-white block'>Contact Us</Link>
                    <Link href="/areas" className='mr-3 no-underline text-white block'>Areas</Link>
                    <Link href="/developers" className='mr-3 no-underline text-white block'>Developers</Link>
                    <Link href="/projects" className='mr-3 no-underline text-white block'>Projects</Link>
                    <Link href="/properties" className='no-underline text-white block'>Properties</Link>
                </nav>
            </div>
        </>
    )
}