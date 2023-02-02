export default function PropertyTypes() {
    return (
        <div className="w-full text-center p-10">
            <div className="content-wrap">
                <h2 className="my-10 font-thin">Explore Property Types</h2>
                <div className="flex justify-between flex-wrap space-y-5">
                    <div className="basis-2/6 lg:basis-1/6 mt-5">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto p-3 rounded-lg">
                            <i className="sprite sprite-townhouse-icon mx-auto"></i>
                        </div>
                        <h4 className="text-sm mt-3">Town Houses</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto p-3 rounded-lg">
                            <i className="sprite sprite-apartment-icon mx-auto"></i>
                        </div>
                        <h4 className="text-sm mt-3">Apartments</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto p-3 rounded-lg">
                            <i className="sprite sprite-penthouse-icon mx-auto p-5"></i>
                        </div>
                        <h4 className="text-sm mt-3">Penthouses</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto p-3 rounded-lg">
                            <i className="sprite sprite-land-plot-icon mx-auto"></i>
                        </div>
                        <h4 className="text-sm mt-3">Land Plots</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto p-3 rounded-lg">
                            <i className="sprite sprite-offplan-property-icon mx-auto"></i>
                        </div>
                        <h4 className="text-sm mt-3">Off-Plan Properties</h4>
                    </div>
                    <div className="basis-2/6 lg:basis-1/6">
                        <div className="icon-wrapper max-w-[120px] bg-[#d8f5f5] mx-auto p-3 rounded-lg">
                            <i className="sprite sprite-villa-icon mx-auto"></i>
                        </div>
                        <h4 className="text-sm mt-3">Villas</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}