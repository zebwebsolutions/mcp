import Image from 'next/image';

export default function Footer() {
    return(
        <footer className="bg-[#f5f5f5] text-sm px-4">
            <div className="flex justify-between flex-wrap content-wrap py-10 space-y-10">
                <div className="basis-full pr-[50px] md:basis-1/2 lg:basis-1/4 md:mt-10">
                    <Image src="/../public/marea-properties-logo.png" width={200} height={40} alt="Marea Properties Logo" class="mb-5" />
                    <p className="font-light text-sm">Off-Plan property is a property or development that is fully planed, registerd in Dubai Land Department, and has an escrow bank account. It is sold with a apayment plan which might involve post-handover payments to maximize the ROI</p>
                </div>
                <div className="basis-full md:basis-1/2 lg:basis-1/4">
                    <h3 className="text-sm font-bold">Useful Links</h3>
                    <ul className="space-y-3">
                        <li>New Off-Plan Properties</li>
                        <li>Top Developers in Dubai</li>
                        <li>Best Areas in Dubai</li>
                        <li>Property Videos</li>
                        <li>Property Tours</li>
                    </ul>
                </div>
                <div className="basis-full md:basis-1/2 lg:basis-1/4">
                    <h3 className="text-sm font-bold">Top Developers</h3>
                    <ul className="space-y-3">
                        <li>Emaar</li>
                        <li>Damac</li>
                        <li>Omniyat</li>
                        <li>Meeras</li>
                        <li>DubaiX Property</li>
                    </ul>
                </div>
                <div className="basis-full md:basis-1/2 lg:basis-1/4">
                    <h3 className="text-sm font-bold">Featured Projects</h3>
                    <ul className="space-y-3">
                        <li>Burj Binghatti</li>
                        <li>Emaar The Cove</li>
                        <li>Zuha Island</li>
                        <li>Damac Lagoons</li>
                        <li>Orla Dorchester</li>
                    </ul>
                </div>
            </div>
            <div className="border-t">
                <div className="content-wrap flex py-5 flex-wrap">
                    <div className="basis-full md:basis-1/2">
                        <p>&copy; 2023 Marea Capital Properties. All Rights Reserved</p>
                    </div>
                    <div className="basis-full my-5 md:basis-1/2 md:my-0">
                        <ul className="list-none flex justify-center md:justify-end md:space-x-3">
                            <li>Privacy Policy</li>
                            <li>Sitemap</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
