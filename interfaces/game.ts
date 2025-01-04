export enum GameCategory {
    Breeding = 'Breeding',
    Card = 'Card',
    PVP = 'PVP',
    Adventure = 'Adventure',
    MMORPG = 'MMORPG',
    Action = 'Action',
    SciFi = 'SciFi',
    Fantasy = 'Fantasy',
    Sandbox = 'Sandbox',
    Simulation = 'Simulation',
    Racing = 'Racing',
    MMOORPG = 'MMOORPG',
    Strategy = 'Strategy',
}

export enum GamePlatform {
    Web,
    Desktop,
    Android,
    iOS,
    iPhone,
}

export interface GameInfo {
    name: string,
    plug: string,
    img: string,
    visits: number,
    items: number,
    offers: number,
    categories: GameCategory[],
    platforms: GamePlatform[],
}
