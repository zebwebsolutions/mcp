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
import PropertiesByDevelopers from "./PropsByDevs";

export default function DeveloperBody(props) {
    return(
        <div className="flex content-wrap w-full mb-10 max-md:flex-wrap">
                <div className="basis-full md:basis-1/4 mr-5 max-sm:px-4">
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
                    <h3>Description</h3>
                    <div className="mb-10">
                        <p>{props.developer && props.developer.devDescription}</p>
                    </div>
                    <div className="mb-10">
                        <h3>Map</h3>
                        <div className="w-full">
                            <Image src={map} alt="" className="w-full" />
                        </div>
                    </div>
                    <h3 className='font-medium'>All Properties by {props.developer.developerName}</h3>
                    <div className='flex flex-wrap justify-between gap-y-10 mb-10'>
                        <PropertiesByDevelopers id={props.developer._id} />
                    </div>
                    <div className="px-4 box-border">
                        <h3 className='mt-10'>Video</h3>
                        <iframe width="100%" height="330px" src="https://www.youtube.com/embed/8D1aWLcyLvM" title="Ready To Move In | Huge Balcony" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
    )
}