import Image from "next/image"
import placeholderPic from '../public/placeholder.png';

export default function LogosTags() {
    return(
        <div className="content-wrap">
            <div className="flex my-10 space-x-4">
                <div className="h-20 overflow-hidden">
                    <Image src={placeholderPic} alt="" />
                </div>
                <div className="h-20 overflow-hidden">
                    <Image src={placeholderPic} alt="" />
                </div>
                <div className="h-20 overflow-hidden">
                    <Image src={placeholderPic} alt="" />
                </div>
                <div className="h-20 overflow-hidden">
                    <Image src={placeholderPic} alt="" />
                </div>
                <div className="h-20 overflow-hidden">
                    <Image src={placeholderPic} alt="" />
                </div>
            </div>
            <div className="flex flex-wrap my-10 space-x-4 text-center justify-center">
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">Property to buy in Dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">Home for sale in dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">Off-Plan properties in Dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">buy seaside apartment in dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">2bhk apartment in Dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">Buy apartment in Dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">Luxury Property to buy in Dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">buy home in Dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">Buy Property in Dubai</span>
                <span className="bg-[#03a6a6] px-5 py-2 text-white rounded-3xl my-3">Property for sale in Dubai</span>
            </div>
        </div>
    )
}