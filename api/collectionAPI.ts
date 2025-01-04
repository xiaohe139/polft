import { CollectionInfo } from "@/interfaces/collection";

export class CollectionAPI {
    static async getCollectionBySlug(slug: string): Promise<CollectionInfo> {
        return {
            nfts: [
                {
                    name: "Axie #11849301",
                    img: "https://image-cdn.lootrush.com/unsafe/311x0/smart/filters:format(webp)/https%3A%2F%2Faxiecdn.axieinfinity.com%2Faxies%2F11849301%2Faxie%2Faxie-full-transparent.png",
                    author: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    contract: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    tokenId: "18",
                    feePerDay: 0.0108
                },
                {
                    name: "Axie #11838915",
                    img: "https://image-cdn.lootrush.com/unsafe/311x0/smart/filters:format(webp)/https%3A%2F%2Faxiecdn.axieinfinity.com%2Faxies%2F11838915%2Faxie%2Faxie-full-transparent.png",
                    author: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    contract: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    tokenId: "18",
                    feePerDay: 0.0108
                },
                {
                    name: "Axie #11629098",
                    img: "https://image-cdn.lootrush.com/unsafe/311x0/smart/filters:format(webp)/https%3A%2F%2Faxiecdn.axieinfinity.com%2Faxies%2F11629098%2Faxie%2Faxie-full-transparent.png",
                    author: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    contract: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    tokenId: "18",
                    feePerDay: 0.0108
                },
                {
                    name: "Axie #11678698",
                    img: "https://image-cdn.lootrush.com/unsafe/311x0/smart/filters:format(webp)/https%3A%2F%2Faxiecdn.axieinfinity.com%2Faxies%2F11678698%2Faxie%2Faxie-full-transparent.png",
                    author: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    contract: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    tokenId: "18",
                    feePerDay: 0.0108
                },
                {
                    name: "Axie #11649902",
                    img: "https://image-cdn.lootrush.com/unsafe/311x0/smart/filters:format(webp)/https%3A%2F%2Faxiecdn.axieinfinity.com%2Faxies%2F11649902%2Faxie%2Faxie-full-transparent.png",
                    author: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    contract: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    tokenId: "18",
                    feePerDay: 0.0108
                },
                {
                    name: "Axie #12042712",
                    img: "https://image-cdn.lootrush.com/unsafe/311x0/smart/filters:format(webp)/https%3A%2F%2Fcdn.axieinfinity.com%2Fmarketplace-website%2Faxie-eggs%2Freptile-dusk.png",
                    author: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    contract: "0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d",
                    tokenId: "18",
                    feePerDay: 0.0108
                },
            ]
        }
    }
}
