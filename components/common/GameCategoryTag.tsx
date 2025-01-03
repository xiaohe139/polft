import { GameCategory } from "@/interfaces/game"

export default function GameCategoryTag({
    category
}: {
    category: GameCategory
}) {
    return (
        <span
            className="text-xs bg-gray-600 text-text-primary rounded-md px-2 py-1 mr-2 whitespace-nowrap font-bold">
            {category}
        </span>
    )
}
