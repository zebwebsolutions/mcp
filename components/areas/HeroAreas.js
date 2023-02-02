import Image from "next/image";
import placeholderPic from '../../public/placeholder.png';


export default function HeroAreas() {
    return(
        <>
            <div className="w-full">
                <Image src={placeholderPic} alt="" className="w-full h-96" />
            </div>
            <div className="bg-white -mt-14 xl:rounded-full py-4 px-7 flex justify-center w-full content-wrap shadow-lg">
                <form className="flex gap-5 items-center justify-between w-full flex-wrap">
                    <div className="basis-full md:basis-3/12 xl:basis-2/12">
                        <label className="block font-semibold mb-2">Properties</label>
                        <select name="properties" className="w-full border-b p-1 focus-within:border-none">
                            <option value="propertytype">Property Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="penthouse">Penthouse</option>
                            <option value="villa">Villa</option>
                        </select>
                    </div>
                    <div className="basis-full md:basis-3/12 xl:basis-2/12">
                        <label className="block font-semibold mb-2">Locations</label>
                        <select name="properties" className="w-full border-b p-1">
                            <option value="allcities">All cities</option>
                            <option value="dubai">Dubai</option>
                            <option value="abudhabi">Abu Dhabi</option>
                            <option value="sharjah">Sharjah</option>
                            <option value="rak">Ras Al Khaimah</option>
                        </select>
                    </div>
                    <div className="basis-full md:basis-5/12 xl:basis-4/12">
                        <label className="block font-semibold mb-2">Search</label>
                        <input type="search" className="w-full border-b p-2" placeholder="Enter Keywords" />
                    </div>
                    <div className="basis-full md:basis-3/12 xl:basis-1/12 text-sm">
                        <button type="button">Advanced Search</button>
                    </div>
                    <div className="basis-full md:basis-3/12 xl:basis-2/12 text-right">
                        <input type="submit" className="mareacolorbg text-white py-3 px-9 rounded-full" value="search" />
                    </div>
                </form>
            </div>
        </>
    )
}