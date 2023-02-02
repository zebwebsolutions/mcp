import Card from "./card"

export default function HomeFeatured() {
    return (
        <>
            <div className="ftrd-offplan-props w-full py-[100px] bg-[#e8f6f6]">
                <h2 className="mb-[60px] content-wrap text-center">Featured Off-Plan Properties</h2>
                <div className="content-wrap w-full">
                    <div className="flex justify-between mb-7 flex-wrap space-y-7 md:space-y-0">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="flex justify-between flex-wrap space-y-5 md:space-y-0">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </>
    )
}