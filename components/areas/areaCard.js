import Image from "next/image";
import placeholderPic from '../../public/placeholder.png';

export default function AreaCard(props) {
    return(
        <>
        <div>
            <Image src={placeholderPic} alt="" className="w-full" />
            <div className="py-2">{props.name}</div>
            <div className="absolute top-2 left-2 mareacolorbg text-xs text-white px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
        </div>
        </>
    )
}