import Image from "next/image";
import locationicon from '../public/icons/location-icon.png';
import hearticon from '../public/icons/heart-icon.png';
import shareicon from '../public/icons/share-icon.png';
import bedroomicon from '../public/icons/bedroom-icon.png';
import washroomicon from '../public/icons/washroom-icon.png';
import areaicon from '../public/icons/copy-icon.png';
import propertyImage from '../public/property-image.png';
import s from './Card.module.css';

export default function Card(props) {
    return (
        <div className="w-[290px] border rounded-xl p-2 prop-card bg-white mx-auto">
            <div className="property-image relative">
                <Image src={propertyImage} alt="property for sale in dubai" className="w-full" />
                <div className="flex absolute justify-between top-0 w-full px-2 pt-2">
                    <span className="card-label text-xs bg-[#e8f5f5] py-1 px-2 rounded-lg">{props.type && props.type}</span>
                    <span className="card-label text-xs bg-[#e8f5f5] py-1 px-2 rounded-lg">{props.status && props.status}</span>
                </div>
            </div>
            <h3 className="text-sm mb-1 mt-3">{props.name}</h3>
            <div className="flex">
                <Image src={locationicon} alt="location icon" width={13} />
                <address class="flex text-sm ml-3">{props.location && props.location.areaName}</address>
            </div>
            <div className="flex justify-between py-3 items-center">
                <div className="property-price text-[#03a6a6] text-xl font-bold">{props.price && props.price}</div>
                <div className="flex like-share-icons">
                    <div className={`bg-[#e8f5f5] mr-2 p-1 rounded-full hover:bg-[#03a6a6] ${s.likeIconWrap}`} >
                        <Image src={hearticon} width={24} height={20} alt="like icon" className={s.likeIcon} />
                    </div>
                    <div className={`bg-[#e8f5f5] pl-0 pr-2 py-1 rounded-full hover:bg-[#03a6a6] ${s.shareIconWrap}`} >
                        <Image src={shareicon} width={24} height={28} alt="share icon" className={s.shareIcon} />
                    </div>
                </div>
            </div>
            <div className="border-t flex justify-between pt-2">
                <span className="text-xs flex"><Image src={bedroomicon} width={16} height={20} alt="bedroom icon" className="mr-1" /> {props.bedrooms && props.bedrooms} bedroom</span>
                <span className="text-xs flex"><Image src={washroomicon} width={16} height={20} alt="bathroom icon" className="mr-1" /> {props.bathrooms && props.bathrooms} Bathroom</span>
                <span className="text-xs flex"><Image src={areaicon} width={16} height={20} alt="area icon" className="mr-1"  /> {props.size && props.size} SqFt</span>
            </div>
        </div>
    )
}