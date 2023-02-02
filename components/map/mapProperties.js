import Card from '../card';
import Image from 'next/image';
import propertiesMapImage from '../../public/properties-on-map.jpg';

export default function MapProperties() {
    return(
        <>
            <div className="w-full mb-10">
                <Image src={propertiesMapImage} alt="" className="w-full" />
            </div>
            <div className="flex content-wrap w-full mb-10 max-md:flex-wrap">
                <div className="basis-full lg:basis-1/4 mr-5">
                    <h3 className='font-medium mb-10'>Filter</h3>
                    <div className='bg-[#f8f8f8] mb-10 py-8 px-5'>
                        <form className="flex gap-y-5 justify-between w-full flex-col">
                            <div className="basis-2/12">
                                <label className="block font-semibold mb-1">Property Type</label>
                                <select name="properties" className="w-full border-b p-1 focus-within:border-none">
                                    <option value="propertytype"> Select Property Type</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="townhouse">Townhouse</option>
                                    <option value="penthouse">Penthouse</option>
                                    <option value="villa">Villa</option>
                                </select>
                            </div>
                            <div className="basis-2/12">
                                <label className="block font-semibold mb-1">Locations</label>
                                <select name="properties" className="w-full border-b p-1">
                                    <option value="allcities">All cities</option>
                                    <option value="dubai">Dubai</option>
                                    <option value="abudhabi">Abu Dhabi</option>
                                    <option value="sharjah">Sharjah</option>
                                    <option value="rak">Ras Al Khaimah</option>
                                </select>
                            </div>
                            <div className="basis-5/12">
                                <label className="block font-semibold mb-1">Search</label>
                                <input type="search" className="w-full border-b p-2" placeholder="Enter Keywords" />
                            </div>
                            <div className="basis-1/12 text-sm">
                                <button type="button">Advanced Search</button>
                            </div>
                            <div className="basis-2/12 text-center">
                                <input type="submit" className="mareacolorbg text-white py-3 px-9 rounded-full" value="search" />
                            </div>
                        </form>
                    </div>
                    <div className='bg-[#f8f8f8] px-5 py-8'>
                        <h3 className='text-xl'>Register your Interest!</h3>
                        <p className='font-light text-sm mb-5'>Please complete the form below and we will get back to you as soon as possible.</p>
                        <form className='space-y-4'>
                            <input type="text" placeholder="Your Name" className='w-full py-2 px-3 rounded-full' />
                            <input type="email" placeholder="Your Email"  className='w-full py-2 px-3 rounded-full' />
                            <input type="tel" placeholder="+971" className='w-full py-2 px-3 rounded-full' />
                            <input type="submit" value="Submit Request" className='w-full py-2 px-3 rounded-full mareacolorbg text-white' />
                        </form>
                    </div>
                </div>
                <div className="basis-full lg:basis-3/4 ml-5">
                    <h3 className='font-medium mb-10'>All Properties</h3>
                    <div className='flex flex-wrap justify-between gap-y-10 mb-10'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div>
                        <h3 className='my-10'>Video</h3>
                        <iframe width="100%" height="330" src="https://www.youtube.com/embed/8D1aWLcyLvM" title="Ready To Move In | Huge Balcony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}