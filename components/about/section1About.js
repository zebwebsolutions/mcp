import Image from "next/image";
import placeholderPic from '../../public/placeholder.png'
import placeholderPic2 from '../../public/placeholder2.png';

export default function Section1About() {
    return(
        <>
            <div className="flex content-wrap flex-wrap items-center py-10 px-4">
                <div className="basis-full lg:basis-1/2 pr-10 mb-10">
                    <h4 className="mareacolor font-normal mb-1">Lorem Ipsum is Simple</h4>
                    <h3 className="font-semibold mb-7 text-3xl">Lorem Ipsum is simply dummy text of the printing</h3>
                    <p className="font-light text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
                <div className="basis-full lg:basis-1/2 justify-self-end">
                    <Image src={placeholderPic} alt="" className="w-full" />
                </div>
            </div>
            <div className="w-full content-wrap my-10">
                <Image src={placeholderPic2} alt="" className="w-full" />
            </div>
        </>
    )
}