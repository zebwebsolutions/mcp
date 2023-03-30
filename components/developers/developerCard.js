import Image from "next/image";
import placeholderPic from '../../public/placeholder.png';

export default function DeveloperCard(props) {
    return(
        <>
        <div>
            <img src={props.url} alt="" className="w-full h-64" />
            <div className="py-2">{props.name}</div>
            <div className="absolute top-2 left-2 mareacolorbg text-xs px-3 py-1 rounded-xl">From AED 2.9 Mn</div>
        </div>
        </>
    )
}