import Image from "next/image";
import placeholderPic2 from '../../public/placeholder2.png';
import offplanProperty from '../../public/offplan-properties.jpg'
import rcLease from '../../public/Residential-and-Commercial-sale.jpg'
import rcSale from '../../public/residential-and-commercial-lease.jpg'
import assetManagement from '../../public/asset-management.jpg'
import consultancy from '../../public/consultancy.jpg'

export default function HeroServices() {
    return(
        <>
            <div className="w-full py-[80px] text-black" style={{background: `url(/services-header.png)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "bottom center"}}>
                <h1 className="text-center py-10 font-thin">OUR SERVICES</h1>
                <p className="font-light text-center w-3/5 mx-auto max-w-[800px] mb-10">Our business is built on trust and integrity. This is intrinsic in everything we do, and is what gives our clients, colleagues, suppliers, partners and investors the confidence to work with us.</p>
            </div>
            <div className="content-wrap px-4 xl:px-0">
                <div className="flex my-10 py-10 items-center flex-wrap">
                    <div className="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Off-Plan</h2>
                        <p className="font-light">Off-plan is a property that is yet to be built. While investing in off-plan property may not seem like an obvious choice, it can be one of the most lucrative investments. When selected well, off-plan properties yield higher returns than completed ones. When it comes to architectural and design trends, Dubai evolves quickly and you’ll notice significant improvements in upcoming projects.
                        </p>
                    </div>
                    <div className="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={offplanProperty} alt="" className="mx-auto lg:ml-auto w-full md:pl-10" />
                    </div>
                </div>
                <div className="flex my-10 py-10 items-center flex-wrap flex-wrap-reverse">
                    <div className="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={rcLease} alt="" className="w-full pr-10 max-md:pr-0" />
                    </div>
                    <div className="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Residential & Commercial Sale</h2>
                        <p className="font-light mb-4">When choosing a real estate agent to sell property, the most important aspect that should affect your decision is trust. You need to be able to trust that your agent has your best interests at heart and that he understands your perspective and needs.</p>
                        <p className="font-light">At Marea Capital Properties, our top priority is to be a proactive organization that is focused on providing the best results in the time period the client provides.</p>
                    </div>
                </div>
                <div className="flex my-10 py-10 items-center flex-wrap">
                    <div className="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Residential & Commercial Lease</h2>
                        <p className="font-light mb-4">When you decide to lease your home, we believe the most important factor is dedicated customer service. At Marea Capital Properties, our team is constantly striving to do better and offer the best services to our clients.</p>
                        <p className="font-light">At Marea Capital Properties, confidentiality with regards to the client is a top priority. We comply with the rules and regulations of Dubai’s Real Estate Regulatory Agency (RERA).</p>
                    </div>
                    <div className="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={rcSale} alt="" className="ml-auto w-full pl-10 max-sm:pl-0" />
                    </div>
                </div>
                <div className="flex my-10 py-10 items-center flex-wrap-reverse">
                    <div className="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={assetManagement} alt="" className="w-full pr-10 max-sm:pr-0" />
                    </div>
                    <div className="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Asset Management</h2>
                        <p className="font-light mb-4">Our dedicated in-house marketing team has a keen understanding of the real estate industry and will deliver the most effective marketing strategies for lead generation which in turn will enhance exposure within the Dubai real estate market.</p>
                        <p className="font-light">Agents are kept up to date with the latest market knowledge. This safeguards the interests of the clients as they will be equipped with expert advice</p>
                    </div>
                </div>
                <div className="flex my-10 py-10 items-center flex-wrap">
                    <div className="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Consultancy</h2>
                        <p className="font-light mb-4">At Marea Capital Properties, agents are always up to date with the latest market knowledge. This safeguards the interests of our clients as they will be offered properties in the best areas with excellent value for money.</p>
                        <p className="font-light">Clients are kept fully informed in regards to the details required to aid their decision-making process.</p>
                    </div>
                    <div className="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={consultancy} alt="" className="ml-auto w-full pl-10 max-sm:pl-0" />
                    </div>
                </div>
                
            </div>
        </>
    )
}