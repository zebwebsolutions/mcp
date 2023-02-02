import LeftNavigation from "./leftNavigation";
import RightNavigation from "./rightNavigation";
import Link from 'next/link';
import Image from "next/image";
import MobileMenu from "./mobileMenu";

export default function Header() {
    return(
        <>
        <div className="w-full py-7">
            <div className="content-wrap flex justify-between items-center lg:px-10 hidden lg:flex">
                <div className="nav-wrapper"><LeftNavigation /></div>
                <div className="site-logo"><Link href="/"><Image src="/marea-properties-logo.png" alt="Marea Properties Logo" width={250} height={44} /></Link></div>
                <div className="nav-wrapper"><RightNavigation /></div>
            </div>
            <div className="content-wrap flex justify-between items-center px-10 lg:hidden relative">
                <div className="site-logo"><Link href="/"><Image src="/marea-properties-logo.png" alt="Marea Properties Logo" width={250} height={44} /></Link></div>
                <div className="nav-wrapper"><MobileMenu /></div>
            </div>
        </div>
        </>
    )
}