import Image from "next/image"

export default function PropertyTypes() {
    return (
        <div className="w-full text-center p-10">
            <div className="content-wrap">
                <h2 className="my-10 font-thin">Explore Property Types</h2>
                <div className="flex justify-between flex-wrap space-y-5 max-w-[1000px] mx-auto">
                    <div className="basis-2/6 lg:basis-1/6 mt-5">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto px-3 py-8 rounded-lg">
                            <Image src="/../public/icons/townhouse.png" alt="townhouse icon" width={48} height={48} className="mx-auto" />
                        </div>
                        <h4 className="text-sm mt-3">Town Houses</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto px-3 py-8 rounded-lg">
                            <Image src="/../public/icons/apartment.png" alt="apartment icon" width={48} height={48} className="mx-auto" />
                        </div>
                        <h4 className="text-sm mt-3">Apartments</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto px-3 py-8 rounded-lg">
                            <Image src="/../public/icons/apartment.png" alt="apartment icon" width={48} height={48} className="mx-auto" />
                        </div>
                        <h4 className="text-sm mt-3">Penthouses</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto px-3 py-8 rounded-lg">
                            <Image src="/../public/icons/land-plot.png" alt="apartment icon" width={48} height={48} className="mx-auto" />
                        </div>
                        <h4 className="text-sm mt-3">Land Plots</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto px-3 py-8 rounded-lg">
                            <Image src="/../public/icons/offplan-property.png" alt="apartment icon" width={48} height={48} className="mx-auto" />
                        </div>
                        <h4 className="text-sm mt-3">Off-Plan Properties</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto px-3 py-8 rounded-lg">
                            <Image src="/../public/icons/villa.png" alt="apartment icon" width={48} height={48} className="mx-auto" />
                        </div>
                        <h4 className="text-sm mt-3">Villas</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}