import { compactNumber } from "@/utils/converter";
import { GameCategory, GamePlatform } from "@/interfaces/game";
import { gamePlatformUrl } from "@/utils/assets";

interface HomeGameEntryProps {
    name: string, // Axie Infinity
    plug: string, // axie-infinity
    img: string, // "https://img-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimgs%2Fgames%2Faxie-infinity-accessories%2FCard.png"
    visits: number,
    items: number,
    offers: number,
    categories: GameCategory[],
    platforms: GamePlatform[],
}

export default function HomeGameEntry({
    name,
    img,
    plug,
    visits,
    items,
    offers,
    categories,
    platforms
}: HomeGameEntryProps) {
    return (
        <a
            className="flex flex-col gap-2 justify-start bg-gray-700 rounded-2xl overflow-hidden cursor-pointer no-underline text-white hover:text-white hover:no-underline transition-all hover:border-none shadow-none hover:shadow-lg h-[320px] md:h-[390px] 2xl:[400px]"
            href={`games/${plug}`}
        >
            <div className="h-[150px] md:h-[250px] overflow-hidden relative">
                <img
                    src={img}
                    alt={name}
                    className="absolute w-full h-full object-cover"
                    style={{ transform: "none" }}
                />
            </div>
            <div className="flex flex-col gap-1 px-2 py-2 text-sm">
                <span className="font-bold text-lg">{name}</span>
                <span className="text-muted text-xs overflow-x-auto scrollbar-hide">
                    {
                        visits > 0 &&
                        <>
                            <span>{compactNumber(visits)} visits</span>
                            <span> · </span>
                        </>
                    }
                    <span>{compactNumber(items)} items</span>
                    <span> · </span>
                    {
                        offers > 0 &&
                        <span>{compactNumber(offers)} offers</span>
                    }
                </span>
                <span className="flex gap-1 mt-2 overflow-x-auto scrollbar-hide">
                    {
                        categories.map((category) => (
                            <span key={category}
                                className="text-xs bg-gray-600 text-white rounded-md px-2 py-1 mr-2 whitespace-nowrap">
                                {category}
                            </span>
                        ))
                    }
                    {
                        platforms.map((platform) => (
                            <img key={platform} src={gamePlatformUrl(platform)} alt={""} />))
                    }


                </span>
            </div>
        </a>

    )
}
