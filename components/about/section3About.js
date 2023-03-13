import Image from "next/image"

import ourMission from '../../public/our-mission.webp'
import ourVision from '../../public/our-vision.jpg'
import ourValues from '../../public/our-values.jpg'

export default function Section3About() {
    return(
        <div className="content-wrap px-4">
            <div className="flex my-10 py-10 flex-wrap">
                <div className="basis-full md:basis-1/2 mb-4">
                    <Image src={ourMission} alt="Our Mission Photo" className="w-full pr-10" />
                </div>
                <div className="basis-full md:basis-1/2">
                    <h4 className="mareacolor font-semibold">Lorem Ipsum is Simple</h4>
                    <h3>Our Mission</h3>
                    <p class="font-light">Our mission is to be recognized as the  market leader in the UAE with our highly qualified team and to expand our business regionally and globally  through unrivaled success and reputation.</p>
                </div>
            </div>
            <div className="flex my-10 py-10 flex-wrap">
                <div className="basis-full md:basis-1/2 mb-4">
                    <h4 className="mareacolor font-semibold">Lorem Ipsum is Simple</h4>
                    <h3>Our Vision</h3>
                    <p class="font-light">Our vision is to contribute to the future of Dubai Real Estate by establishing new market realities using unique innovative approach to achieve the best interests of our customers and stakeholders.</p>
                </div>
                <div className="basis-full md:basis-1/2">
                    <Image src={ourVision} alt="Our Vision Picture" className="ml-auto w-full pr-10" />
                </div>
            </div>
            <div className="flex my-10 py-10 flex-wrap">
                <div className="basis-full md:basis-1/2 mb-4">
                    <Image src={ourValues} alt="Our Values Picture" className="w-full pr-10" />
                </div>
                <div className="basis-full md:basis-1/2">
                    <h4 className="mareacolor font-semibold">Lorem Ipsum is Simple</h4>
                    <h3>Our Values</h3>
                    <p class="font-light">In an industry involving high value  transactions, we pride ourselves on our transparency, fairness and integrity to gain the trust of our stakeholders.</p>
                </div>
            </div>
        </div>
    )
}