import Link from 'next/link';

export default function RightNavigation() {
    return(
        <nav className="right-nav text-1xl">
            <Link href="/areas" className='ml-3 mr-3 no-underline text-slate-700'>Areas</Link>
            <Link href="/developers" className='mr-3 no-underline text-slate-700'>Developers</Link>
            <Link href="/projects" className='mr-3 no-underline text-slate-700'>Projects</Link>
            <Link href="/properties" className='no-underline text-slate-700'>Properties</Link>
        </nav>
    )
}