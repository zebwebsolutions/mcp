import Card from "../card";
import Image from "next/image";
import bathroomIcon from '../../public/icons/bathroom-icon.png';
import bedroomIcon from '../../public/icons/bedroom-icon2.png';
import areaIcon from '../../public/icons/area-icon.png';
import livingroomIcon from '../../public/icons/living-room-icon.png';
import map from '../../public/map.jpg'
import stepsIcon from '../../public/icons/steps-icon.png';
import vicinityIcon from '../../public/icons/vicinity-icon.svg';
import sanctuaryIcon from '../../public/icons/sanctuary-icon.png';

export default function ListingBody() {
    return(
        <div className="flex content-wrap w-full mb-10 max-md:flex-wrap">
                <div className="basis-full md:basis-1/4 mr-5 max-sm:px-4">
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
                <div className="basis-full md:basis-3/4 ml-5">
                    <h3>Quick Info</h3>
                    <div className="flex text-center justify-between mb-10 flex-wrap space-y-10">
                        <div className="basis-full md:basis-1/4 border relative max-w-[220px] h-[200px] pt-10 max-md:mx-auto mt-10">
                            <div>Bathrooms</div>
                            <div className="font-medium">2</div>
                            <Image src={bathroomIcon} alt="bathroom icon" className="absolute bottom-0 right-0" />
                        </div>
                        <div className="basis-full md:basis-1/4 border relative max-w-[220px] h-[200px] pt-10 max-md:mx-auto">
                            <div>Bedrooms</div>
                            <div className="font-medium">3</div>
                            <Image src={bedroomIcon} alt="bedroom icon" className="absolute bottom-0 right-0" />
                        </div>
                        <div className="basis-full md:basis-1/4 border relative max-w-[220px] h-[200px] pt-10 max-md:mx-auto">
                            <div>Area</div>
                            <div className="font-medium">300-400 Sqft</div>
                            <Image src={areaIcon} alt="area icon" className="absolute bottom-0 right-0" />
                        </div>
                        <div className="basis-full md:basis-1/4 border relative max-w-[220px] h-[200px] pt-10 max-md:mx-auto">
                            <div>Living Room</div>
                            <div className="font-medium">1</div>
                            <Image src={livingroomIcon} alt="living room icon" className="absolute bottom-0 right-0" />
                        </div>
                    </div>
                    <h3>Description</h3>
                    <div className="mb-10">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <h3>Features</h3>
                    <div className="flex justify-between flex-wrap items-center mb-10">
                        <div className="flex py-5 basis-full md:basis-1/4 items-center">
                            <Image src={stepsIcon} alt="steps icon" className="w-10 h-10 mr-3" />
                            <div className="text-sm">Steps Away from Bay Bridge</div>
                        </div>
                        <div className="flex py-5 basis-full md:basis-1/4 items-center">
                            <Image src={vicinityIcon} alt="vicinity icon" className="w-10 h-10 mr-3"  />
                            <div className="text-sm">3 Hotels in the Vicinity</div>
                        </div>
                        <div className="flex py-5 basis-full md:basis-1/4 items-center">
                            <Image src={sanctuaryIcon} alt="sanctuary icon" className="w-10 h-10 mr-3"  />
                            <div className="text-sm">Views of Wildlife Sanctuary</div>
                        </div>
                        <div className="flex py-5 basis-full md:basis-1/4 items-center">
                            <Image src={vicinityIcon} alt="vicinity icon" className="w-10 h-10 mr-3"  />
                            <div className="text-sm">3 Hotels in the Vicinity</div>
                        </div>
                        <div className="flex py-5 basis-full md:basis-1/4 items-center">
                            <Image src={stepsIcon} alt="steps icon" className="w-10 h-10 mr-3"  />
                            <div className="text-sm">Steps Away from Bay Bridge</div>
                        </div>
                        <div className="flex py-5 basis-full md:basis-1/4 items-center">
                            <Image src={vicinityIcon} alt="vicinity icon" className="w-10 h-10 mr-3"  />
                            <div className="text-sm">3 Hotels in the Vicinity</div>
                        </div>
                        <div className="flex py-5 basis-full md:basis-1/4 items-center">
                            <Image src={sanctuaryIcon} alt="sanctuary icon" className="w-10 h-10 mr-3"  />
                            <div className="text-sm">Views of Wildlife Sanctuary</div>
                        </div>
                        <div className="flex py-5 basis-full md:basis-1/4 items-center">
                            <Image src={vicinityIcon} alt="vicinity icon" className="w-10 h-10 mr-3" />
                            <div className="text-sm">3 Hotels in the Vicinity</div>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h3>Map</h3>
                        <div className="w-full">
                            <Image src={map} alt="" className="w-full" />
                        </div>
                    </div>
                    <h3 className='font-medium'>All Properties</h3>
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
                    <div className="px-4 box-border">
                        <h3 className='mt-10'>Video</h3>
                        <iframe width="100%" height="330px" src="https://www.youtube.com/embed/8D1aWLcyLvM" title="Ready To Move In | Huge Balcony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
    )
}