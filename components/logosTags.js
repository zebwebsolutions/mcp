import Image from "next/image"

import customerSupportIcon from '../public/icons/customer-support-icon.png'
import apartmentIcon from '../public/icons/apartment.png'
import bookingIcon from '../public/icons/priority-property-booking-icon.png'

export default function LogosTags() {
    return(
        <div className="content-wrap">
            <div className="flex my-10 pb-10 space-x-5 mx-auto justify-between">
                <div className="basis-1/3 flex items-center justify-center">
                    <div className="mr-4">
                        <Image src={customerSupportIcon} alt="customer support icon" />
                    </div>
                    <div>
                        <span className="text-lg block">24/7 Full</span>
                        <span className="font-bold text-lg">Customer Support</span>
                    </div>
                </div>
                <div className="basis-1/3 flex items-center  justify-center">
                    <div className="mr-4">
                        <img src="../icons/apartment-icon.png" alt="real estate icon" />
                    </div>
                    <div>
                        <span className="text-lg block">Brand new</span>
                        <span className="font-bold text-lg">Real Estate Projects</span>
                    </div>
                </div>
                <div className="basis-1/3 flex items-center justify-center">
                    <div className="mr-4">
                        <Image src={bookingIcon} alt="priority booking icon" />
                    </div>
                    <div>
                        <span className="text-lg block">Priority</span>
                        <span className="font-bold text-lg">Property Bookings</span>
                    </div>
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