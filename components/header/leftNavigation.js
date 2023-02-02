import Link from 'next/link';

export default function LeftNavigation() {
    return(
        <nav className="left-nav">
            <Link href="/" className='mr-3 no-underline text-slate-700'>Home</Link>
            <Link href="/about" className='mr-3 no-underline text-slate-700'>About Us</Link>
            <Link href="/services" className='mr-3 no-underline text-slate-700'>Services</Link>
            <Link href="/team" className='mr-3 no-underline text-slate-700'>Team</Link>
            <Link href="/contact" className='mr-3 no-underline text-slate-700'>Contact Us</Link>
        </nav>
    )
}