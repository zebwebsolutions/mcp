import Image from "next/image"

export default function TopDevelopers() {
    return(
        <div class="my-10 py-10">
`           <h2 className="my-10 py-10 text-center">Explore <span class="font-semibold">Top Developers</span> on the Map</h2>
            <div class="flex flex-wrap content-wrap">
                <div class="basis-3/12 p-1 emaar-box">
                    <Image src="/logos/emaar-logo-w.svg" alt="emaar logo" height={37} width={187} />
                </div>
                <div class="basis-5/12 p-1 damac-box">
                    <Image src="/logos/damac_logo.png" alt="damac logo" height={37} width={187} />
                </div>
                <div class="basis-4/12 p-1 meeras-box">
                    <Image src="/logos/meeras-logo-w.png" alt="meeras logo" height={37} width={187} />
                </div>
                <div class="basis-3/12 p-1 ellington-box">
                    <Image src="/logos/ellington-properties-w.png" alt="ellington logo" height={37} width={187} />
                </div>
                <div class="basis-4/12 p-1 omniyat-box">
                    <Image src="/logos/omniyat-logo.png" alt="omniyat logo" height={37} width={187} />
                </div>
                <div class="basis-5/12 p-1 dp-box">
                    <Image src="/logos/dubai-properties-logo-w.png" alt="dubai properties logo" height={37} width={187} />
                </div>
            </div>`
        </div>
    )
}