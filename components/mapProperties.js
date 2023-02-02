import Image from "next/image";

export default function MapProperties() {
    return (
        <>
        <h2 className="mb-10">Explore <span class="font-semibold">Properties</span> on the Map</h2>
        <Image src={"/properties-on-map.jpg"} width={1000} height={1000} alt="map on properties" class="w-full" />
        </>
    )
}