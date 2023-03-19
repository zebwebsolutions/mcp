import Image from "next/image"
import stepsIcon from '../../public/icons/steps-icon.png';

export default function Features(props) {
    return(
        <>
        <h3>Features</h3>
        <div className="flex justify-between flex-wrap items-center mb-10">
            {props.features.map(feature => (
            <div key={feature.index} className="flex py-5 basis-full md:basis-1/4 items-center">
                <Image src={stepsIcon} alt="steps icon" className="w-10 h-10 mr-3" />
                <div className="text-sm">{feature.title}</div>
            </div>
            ))}
        </div>
        </>
    )
}