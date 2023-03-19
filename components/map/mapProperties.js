import Card from '../card';
import Image from 'next/image';

export default function MapProperties() {
    return(
        <>
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
        </>
    )
}