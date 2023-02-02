import Image from "next/image";
import placeholderPic from '../public/placeholder.png';

export default function BlogHome() {
    return(
        <div className="content-wrap w-full my-10 py-10">
            <h2 className="mb-10 text-center">Latest Blogs & News</h2>
            <div className="flex justify-between flex-wrap space-y-7 lg:flex-nowrap">
                <div className="border max-w-[275px] rounded-xl mx-auto mt-7">
                    <Image src={placeholderPic} alt="slider image" className="rounded-t-xl" />
                    <div className="py-2 px-3">
                        <h3 className="text-lg mb-0">Lorem Ipsum</h3>
                        <div className="text-sm">08 October 2022</div>
                        <p className="text-sm my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <a href="" className="mareacolor no-underline text-sm">Read more <span className=" bg-[#E8f5f5] py-1 px-2.5 rounded-full">&gt;</span></a>
                    </div>
                </div>
                <div className="border max-w-[275px] rounded-xl mx-auto">
                    <Image src={placeholderPic} alt="slider image" className="rounded-t-xl" />
                    <div className="py-2 px-3">
                        <h3 className="text-lg mb-0">Lorem Ipsum</h3>
                        <div className="text-sm">08 October 2022</div>
                        <p className="text-sm my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <a href="" className="mareacolor no-underline text-sm">Read more <span className=" bg-[#E8f5f5] py-1 px-2.5 rounded-full">&gt;</span></a>
                    </div>
                </div>
                <div className="border max-w-[275px] rounded-xl mx-auto">
                    <Image src={placeholderPic} alt="slider image" className="rounded-t-xl" />
                    <div className="py-2 px-3">
                        <h3 className="text-lg mb-0">Lorem Ipsum</h3>
                        <div className="text-sm">08 October 2022</div>
                        <p className="text-sm my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                        <a href="" className="mareacolor no-underline text-sm">Read more <span className=" bg-[#E8f5f5] py-1 px-2.5 rounded-full">&gt;</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}