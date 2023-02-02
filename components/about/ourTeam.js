import Image from "next/image"

export default function OurTeam() {
    return(
        <div className="my-10 py-10">
            <h3 className="text-center mareacolor text-xl mb-1">Marea Capital Properties</h3>
            <h3 className="text-center font-light text-4xl">Our Amazing Team</h3>
            <div className="flex my-10 py-10 flex-wrap">
                <div className="basis-full md:basis-5/12 lg:basis-3/12 text-center ml-auto">
                    <Image src="/team/mohammad-abu-ghaush.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Mohammad Abu Ghaush</h4>
                    <div>Founder & CEO</div>
                </div>
                <div className="basis-full md:basis-5/12 lg:basis-3/12 text-center mr-auto">
                    <Image src="/team/anait.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Anait Martirosyan</h4>
                    <div>Managing Partner</div>
                </div>
            </div>
            <div className="flex space-x-10 space-y-10 my-10 flex-wrap">
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center ml-10 mt-10">
                    <Image src="/team/khalid.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Khalid Shabbir</h4>
                    <div>Sales Director</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/omer.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Omar Saleem</h4>
                    <div>Sales Director</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/sufyan.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Sufyan Khatri</h4>
                    <div>Senior Client Manager</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/maria.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Maria Propletova</h4>
                    <div>Client Director</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/aram.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Aram Reti</h4>
                    <div>Game Changer</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/khalid.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Khalid Shabbir</h4>
                    <div>Sales Director</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/omer.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Omar Saleem</h4>
                    <div>Sales Director</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/sufyan.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Sufyan Khatri</h4>
                    <div>Senior Client Manager</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/maria.png" alt="" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Maria Propletova</h4>
                    <div>Client Director</div>
                </div>
                <div className="basis-full md:basis-1/4 lg:basis-1/6 text-center">
                    <Image src="/team/aram.png" className="mx-auto" width={245} height={316} />
                    <h4 className="font-semibold text-lg mt-3">Aram Reti</h4>
                    <div>Game Changer</div>
                </div>
            </div>
        </div>
    )
}