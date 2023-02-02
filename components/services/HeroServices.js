import Image from "next/image";
import placeholderPic from '../../public/placeholder.png';
import placeholderPic2 from '../../public/placeholder2.png';

export default function HeroServices() {
    return(
        <>
            <div className="w-full">
                <Image src={placeholderPic2} alt="" className="w-full h-96" />
            </div>
            <div className="content-wrap px-4 xl:px-0">
                <h1 className="text-center py-10 font-thin">OUR SERVICES</h1>
                <p className="font-light text-center w-3/5 mx-auto font-light">Our business is built on trust and integrity. This is intrinsic in everything we do, and is what gives our clients, colleagues, suppliers, partners and investors the confidence to work with us.</p>
                <div className="flex my-10 py-10 items-center flex-wrap">
                    <div class="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Residential & Commercial Sale</h2>
                        <p className="font-light">Our business is built on trust and integrity. This is intrinsic in everything we do, and is what gives our clients, colleagues, suppliers, partners and investors the confidence to work with us. We treat everyone individually, offering bespoke advice, which in turn builds long-term relationships and helps them to make better property decisions.
</p>
                    </div>
                    <div class="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={placeholderPic} alt="" className="mx-auto lg:ml-auto w-full md:pl-10" />
                    </div>
                </div>
                <div className="flex my-10 py-10 items-center flex-wrap flex-wrap-reverse">
                    <div class="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={placeholderPic} alt="" className="w-full pr-10 max-md:pr-0" />
                    </div>
                    <div class="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Residential & Commercial Sale</h2>
                        <p className="font-light">Our business is built on trust and integrity. This is intrinsic in everything we do, and is what gives our clients, colleagues, suppliers, partners and investors the confidence to work with us. We treat everyone individually, offering bespoke advice, which in turn builds long-term relationships and helps them to make better property decisions.
</p>
                    </div>
                </div>
                <div className="flex my-10 py-10 items-center flex-wrap">
                    <div class="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Residential & Commercial Sale</h2>
                        <p className="font-light">Our business is built on trust and integrity. This is intrinsic in everything we do, and is what gives our clients, colleagues, suppliers, partners and investors the confidence to work with us. We treat everyone individually, offering bespoke advice, which in turn builds long-term relationships and helps them to make better property decisions.
</p>
                    </div>
                    <div class="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={placeholderPic} alt="" className="ml-auto w-full pl-10 max-sm:pl-0" />
                    </div>
                </div>
                <div className="flex my-10 py-10 items-center flex-wrap-reverse">
                    <div class="basis-full md:basis-1/2 max-md:mt-7">
                        <Image src={placeholderPic} alt="" className="w-full pr-10 max-sm:pr-0" />
                    </div>
                    <div class="basis-full md:basis-1/2">
                        <h2 className="mb-5 font-semibold text-3xl">Residential & Commercial Sale</h2>
                        <p className="font-light">Our business is built on trust and integrity. This is intrinsic in everything we do, and is what gives our clients, colleagues, suppliers, partners and investors the confidence to work with us. We treat everyone individually, offering bespoke advice, which in turn builds long-term relationships and helps them to make better property decisions.
</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}