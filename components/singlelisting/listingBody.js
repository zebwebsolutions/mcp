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

export default function ListingBody(props) {
    return(
        <div className="flex content-wrap w-full mb-10 max-md:flex-wrap">
                <div className="basis-full md:basis-1/4 mr-5 max-sm:px-4">
                    <h3 className='font-medium mb-10'>Details</h3>
                    <div className='bg-[#f8f8f8] mb-10 py-8 px-5'>
                    <ul>
                        <li class="flex justify-between mb-1"><b>Bedrooms</b><span>{props.property.details && props.property.details.bedrooms}</span></li>
                        <li class="flex justify-between mb-1"><b>Bathrooms</b><span>{props.property.details && props.property.details.bathrooms}</span></li>
                        <li class="flex justify-between mb-1"><b>Property Type</b><span>{props.property.details && props.property.details.propertyType}</span></li>
                        <li class="flex justify-between mb-1"><b>Status</b><span>{props.property.details && props.property.details.status}</span></li>
                        <li class="flex justify-between mb-1"><b>Property Size</b><span>{props.property.details && props.property.details.propertySize}</span></li>
                        <li class="flex justify-between mb-1"><b>Land Size</b><span>{props.property.details && props.property.details.landArea}</span></li>
                    </ul>
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
                            <div>{props.property.quickInfo && props.property.quickInfo[0].title}</div>
                            <div className="font-medium">{props.property.quickInfo && props.property.quickInfo[0].description}</div>
                            <Image src={bathroomIcon} alt="bathroom icon" className="absolute bottom-0 right-0" />
                        </div>
                        <div className="basis-full md:basis-1/4 border relative max-w-[220px] h-[200px] pt-10 max-md:mx-auto">
                            <div>{props.property.quickInfo && props.property.quickInfo[1].title}</div>
                            <div className="font-medium">{props.property.quickInfo && props.property.quickInfo[1].description}</div>
                            <Image src={bedroomIcon} alt="bedroom icon" className="absolute bottom-0 right-0" />
                        </div>
                        <div className="basis-full md:basis-1/4 border relative max-w-[220px] h-[200px] pt-10 max-md:mx-auto">
                            <div>{props.property.quickInfo && props.property.quickInfo[2].title}</div>
                            <div className="font-medium">{props.property.quickInfo && props.property.quickInfo[2].description}</div>
                            <Image src={areaIcon} alt="area icon" className="absolute bottom-0 right-0" />
                        </div>
                        <div className="basis-full md:basis-1/4 border relative max-w-[220px] h-[200px] pt-10 max-md:mx-auto">
                            <div>{props.property.quickInfo && props.property.quickInfo[3].title}</div>
                            <div className="font-medium">{props.property.quickInfo && props.property.quickInfo[3].description}</div>
                            <Image src={livingroomIcon} alt="living room icon" className="absolute bottom-0 right-0" />
                        </div>
                    </div>
                    <h3>Description</h3>
                    <div className="mb-10">
                        <p>{props.property.description}</p>
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