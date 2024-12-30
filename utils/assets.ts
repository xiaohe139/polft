import {GamePlatform} from "@/interfaces/game";

export function gamePlatformUrl(platform: GamePlatform): string {
    return `/images/icons/home/${platform}.svg`;
}