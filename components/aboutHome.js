import Image from "next/image";
import aboutUsPic from '../public/about-us-image.png';
import Link from "next/link";

export default function AboutHome() {
    return (
        <div className="flex content-wrap py-10 flex-wrap text-center max-md:px-3">
            <div className="basis-1/2 max-md:basis-full max-sm:mb-10">
                <Image className="max-w-[350px] lg:max-w-[500px] w-full border px-5" src={aboutUsPic} alt="" />
            </div>
            <div className="basis-1/2 max-md:basis-full text-justify">
                <h2 className="font-bold text-[#03a6a6] text-lg mb-3">About us</h2>
                <h3 className="font-semibold mb-3">Top Locations</h3>
                <h3 className="font-light">in Dubai</h3>
                <p className="mb-5 font-light">Marea Capital Properties is a brand new platform for all your real estate needs successfully implementing new technologies and      knowledge to adapt seamlessly to the evolving market demands and provide the most innovative solutions to it’s customers.</p>
                <p className="mb-10 font-light" >We’re here to help make your real estate dreams a reality.</p>
                <Link href="/" className="btn-primary">
                    Learn More
                </Link>
            </div>
        </div>
    )
}