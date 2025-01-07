import { ChainInfo } from "@/interfaces/chain";

export class ChainAPI {
    static async getChainById(id: number): Promise<ChainInfo> {
        return {
            id: id,
            name: "Astar",
            img: "https://cryptologos.cc/logos/astar-astr-logo.png",
            rpcUrl: ""
        }
    }
}
