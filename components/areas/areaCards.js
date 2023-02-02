import Image from "next/image";
import placeholderPic from '../../public/placeholder.png';

export default function AreaCards() {
    return(
        <div className="content-wrap px-4">
            <div className="flex justify-between w-full my-10 py-10 max-sm:flex-wrap max-sm:space-y-10">
                <div>
                    Show price in <span className=" bg-gray-200 px-1 text-sm">USD</span> <span className=" bg-gray-200 px-1 text-sm">AED</span> <span className=" bg-gray-200 px-1 text-sm">GBP</span>
                </div>
                <div>
                    Sort By:
                    <select name="sortbyfilter">
                        <option value="option1">Default Order</option>
                        <option value="option2">Alphbetically</option>
                        <option value="option3">By Price</option>
                        <option value="option4">High to Low</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap justify-between space-y-10">
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%] mt-10">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%]">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%]">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%]">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%]">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%]">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%]">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%]">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
                <div className="bg-[#ededed] text-center rounded-b-xl relative md:max-w-[32%]">
                    <Image src={placeholderPic} alt="" className="w-full" />
                    <div className="py-2">Downtown Dubai</div>
                    <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
                </div>
            </div>
            <div className="py-10 space-x-2 text-center">
                <a href="#" className="mareacolor text-2xl font-semibold no-underline">1</a>
                <a href="#" className="no-underline">2</a>
                <a href="#" className="no-underline">3</a>
                <a href="#" className="no-underline">4</a>
                <a href="#" className="no-underline">5</a>
                <a href="#" className="no-underline">6</a>
            </div>
        </div>
    )
}