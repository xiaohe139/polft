import { GameCategory, GameInfo, GamePlatform } from "@/interfaces/game";

export class gameAPI {
    static async getGameBySlug(slug: string): Promise<GameInfo> {
        return {
            name: "Axie Infinity",
            plug: "axie-infinity",
            img: "https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Faxie-infinity-accessories%2FCard.png",
            visits: 1e6, items: 10000, offers: 5,
            categories: [GameCategory.Breeding, GameCategory.Card],
            platforms: [GamePlatform.Android, GamePlatform.iOS],
        }
    }
}
