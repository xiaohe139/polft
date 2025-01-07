'use client';
import ArrowDownIcon from "@/components/common/icons/ArrowDownIcon";
import GamePlatformIcon from "@/components/common/icons/GamePlatform";
import SubmitNFTIcon from "@/components/common/icons/SubmitNFTIcon";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import HomeGameEntry from "@/components/home/HomeGameEntry";
import { ChainInfo } from "@/interfaces/chain";
import { GameCategory, GamePlatform } from "@/interfaces/game";
import { randInt } from "@/utils/math";
import { Button, Typography } from "antd";
import Image from "next/image";

const {Text} = Typography;

const availableBlockchains: (Pick<ChainInfo, 'name' | 'img'>)[] = [{
    img: "https://parachains.info/images/parachains/1642419231_ajuna_logo.png",
    name: "Ajuna Network"
},{
    img: "https://parachains.info/images/parachains/1649424653_bajun_network_logo_2.png",
    name: "Bajun Network"
}, {
    img: "https://parachains.info/images/parachains/1622122425_darwinia_crab.png",
    name: "Crab Network"
}, {
    img: "https://parachains.info/images/parachains/1667406145_darwinia_logo.jpg",
    name: "Darwinia"
},{
    img: "https://parachains.info/images/parachains/1713531254_laos_logo2.png",
    name: "LAOS"
}, {
    name: 'Moonbeam',
    img: 'https://cryptologos.cc/logos/moonbeam-glmr-logo.png',
}, {
    name: 'Astar',
    img: 'https://astar.subscan.io/_next/image?url=%2Fchains%2Fastar%2Flogo-mini.png&w=256&q=75',
}, {
    name: 'Acala',
    img: 'https://avatars.githubusercontent.com/u/54881907?s=280&v=4',
}, {
    name: 'Phala',
    img: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/phala-network-pha-7151782-5795436.png?f=webp',
}, {
    name: 'Aleph Zero',
    img: 'https://s2.coinmarketcap.com/static/img/coins/200x200/11976.png',
}, {
    img: "https://parachains.info/images/parachains/1659898704_aventus_logo.png",
    name: "Aventus Network"
}, {
    img: "https://parachains.info/images/parachains/1720056318_ava_protocol_logo.jpg",
    name: "Ava Protocol"
}];

export default function Home() {
    return (
        <>
            <section
                className="flex flex-col md:flex-row md:gap-6 px-5 md:px-10 pt-6 max-w-[1920px] mx-auto">
                <div className="bg-secondary/80 backdrop-blur-lg flex flex-col gap-8 w-full pb-2 md:w-[16rem] z-40 sticky top-[142px] md:top-[110px] md:overflow-auto md:h-[calc(100vh-180px)] scrollbar-none">
                    <Button className="flex items-center gap-2 py-5 hover:!text-text-hover">
                        <SubmitNFTIcon />
                        <p className="text-sm font-bold max-w-lg ">List a new collection</p>
                    </Button>
                    <SearchBar className="w-full" />
                    <div className="flex flex-col gap-6 pb-10">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center cursor-pointer">
                                <Text strong className="flex-1">Blockchain</Text>
                                <ArrowDownIcon />
                            </div>
                            {
                                availableBlockchains.map((chain) => (
                                    <div className="flex items-center gap-2 text-muted hover:text-text-primary cursor-pointer" key={chain.name}>
                                        <Image src={chain.img} alt="" width={25} height={25} className="rounded-full"/>
                                        <Text className="flex-1 text-inherit">{chain.name}</Text>
                                        <Text className="text-inherit">{randInt(30, 100)}</Text>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center cursor-pointer">
                                <Text strong className="flex-1">Platform</Text>
                                <ArrowDownIcon />
                            </div>
                            {
                                [GamePlatform.Web, GamePlatform.Android, GamePlatform.Desktop, GamePlatform.iOS].map((platform) => (
                                    <div className="flex items-center gap-2 text-muted hover:text-text-primary cursor-pointer" key={platform}>
                                        <GamePlatformIcon platform={platform}/>
                                        <Text className="flex-1 text-inherit">{platform}</Text>
                                        <Text className="text-inherit">{randInt(30, 100)}</Text>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div>
                        <div className="flex flex-row justify-between mb-4 items-start">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold">All games</h3>
                                <span className="text-muted text-sm md:text-md">688 games</span>
                            </div>
                            <div className="flex justify-end">
                                <div className="relative" data-headlessui-state="">
                                    <button
                                        className="flex gap-2 items-center transition-all p-2 rounded-md hover:bg-[rgb(34,34,48)] text-sm border-2 bg-transparent border-transparent"
                                        id="headlessui-listbox-button-:rj:"
                                        type="button"
                                        aria-haspopup="listbox"
                                        aria-expanded="false"
                                        data-headlessui-state=""
                                    >
                                        <span className="font-bold">Sort by</span>
                                        <span>Most popular</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-5 transition-all"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="grid grid-cols-2 items-start lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 flex-1 mb-4">
                            <HomeGameEntry
                                name={"Gods Unchained"}
                                plug={"gods-unchained"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fgods-unchained%2FCard.png"}
                                visits={100000}
                                items={50000}
                                offers={5}
                                categories={[GameCategory.Card, GameCategory.PVP]}
                                platforms={[GamePlatform.Android, GamePlatform.Desktop]}
                            />

                            <HomeGameEntry
                                name={"Axie Infinity"}
                                plug={"axie-infinity"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Faxie-infinity-accessories%2FCard.png"}
                                visits={1e6} items={10000} offers={5}
                                categories={[GameCategory.Breeding, GameCategory.Card]}
                                platforms={[GamePlatform.Android, GamePlatform.iOS]}
                            />
                            <HomeGameEntry
                                name={"Pixels"}
                                plug={"pixels"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fpixels---farm-land807754%2FCard.png"}
                                visits={100000}
                                items={250}
                                offers={0}
                                categories={[GameCategory.Adventure, GameCategory.MMORPG]}
                                platforms={[GamePlatform.Web]}
                            />

                            <HomeGameEntry
                                name={"Wild Forest"}
                                plug={"wild-forest"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fwild-forest---units945084%2FCard.png"}
                                visits={10000}
                                items={250}
                                offers={0}
                                categories={[GameCategory.Card, GameCategory.PVP]}
                                platforms={[GamePlatform.Android, GamePlatform.iOS]}
                            />

                            <HomeGameEntry
                                name={"Pixels Spirit of Mimo"}
                                plug={"pixels-spirit-of-mimo091159"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fpixels-spirit-of-mimo091159%2FCard.png"}
                                visits={1000}
                                items={1000}
                                offers={0}
                                categories={[]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"Apeiron"}
                                plug={"apeiron"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fapeiron---star-(ronin)331453%2FCard.png"}
                                visits={100000}
                                items={500}
                                offers={0}
                                categories={[GameCategory.Action, GameCategory.Adventure]}
                                platforms={[GamePlatform.Web]}
                            />

                            <HomeGameEntry
                                name={"Pixel Chibis NFT"}
                                plug={"pixels---chibis378201"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fpixels---chibis378201%2FCard.png"}
                                visits={0}
                                items={500}
                                offers={0}
                                categories={[]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"Parallel"}
                                plug={"parallel"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fparallel-cosmetics-(llcm)362351%2FCard.png"}
                                visits={100000}
                                items={500}
                                offers={0}
                                categories={[GameCategory.Card, GameCategory.SciFi]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"Moon Doonz - Pixels Avatars"}
                                plug={"doonz---pixels-avatars846846"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fdoonz---pixels-avatars846846%2FCard.png"}
                                visits={0}
                                items={500}
                                offers={0}
                                categories={[]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"Dizzy Demons"}
                                plug={"dizzy-demons---pixels-avatar372062"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fdizzy-demons---pixels-avatar372062%2FCard.png"}
                                visits={0}
                                items={1000}
                                offers={0}
                                categories={[]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"Pixel Porks"}
                                plug={"pixel-porks040135"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fpixel-porks040135%2FCard.png"}
                                visits={0}
                                items={250}
                                offers={0}
                                categories={[]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"Guild of Guardians"}
                                plug={"guild-of-guardians"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fguild-of-guardians-items%2FCard.png"}
                                visits={10000}
                                items={250}
                                offers={0}
                                categories={[GameCategory.Action, GameCategory.Fantasy]}
                                platforms={[GamePlatform.Android, GamePlatform.iOS]}
                            />

                            <HomeGameEntry
                                name={"Ragnarok Monster World"}
                                plug={"ragnarok:-monster-world137662"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fragnarok%3A-monster-world137662%2FCard.png"}
                                visits={0}
                                items={250}
                                offers={0}
                                categories={[]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"CyberKongz"}
                                plug={"cyberkongz"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fcyberkongz---vx-gear-(ronin)478641%2FCard.png"}
                                visits={100000}
                                items={25}
                                offers={0}
                                categories={[GameCategory.Breeding]}
                                platforms={[GamePlatform.Web]}
                            />

                            <HomeGameEntry
                                name={"Planet IX"}
                                plug={"planet-ix"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fplanetix-land%2FCard.png"}
                                visits={100000}
                                items={50}
                                offers={0}
                                categories={[GameCategory.Sandbox, GameCategory.Simulation]}
                                platforms={[GamePlatform.Desktop]}
                            />

                            <HomeGameEntry
                                name={"Crypto Unicorns"}
                                plug={"crypto-unicorns"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fcrypto-unicorns%2FCard.png"}
                                visits={100000}
                                items={50}
                                offers={0}
                                categories={[GameCategory.PVP, GameCategory.Racing]}
                                platforms={[GamePlatform.Web]}
                            />

                            <HomeGameEntry
                                name={"Illuvium"}
                                plug={"illuvium"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Filluvium%2FCard.png"}
                                visits={500000}
                                items={50}
                                offers={0}
                                categories={[GameCategory.Card]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"Pyjamas Clubs - Pixels"}
                                plug={"pyjamas-clubs---pixels886308"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fpyjamas-clubs---pixels886308%2FCard.png"}
                                visits={0}
                                items={50}
                                offers={0}
                                categories={[]}
                                platforms={[]}
                            />

                            <HomeGameEntry
                                name={"Cross the Ages"}
                                plug={"cross-the-ages"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fcross-the-ages%2FCard.png"}
                                visits={10000}
                                items={50}
                                offers={0}
                                categories={[GameCategory.Card, GameCategory.Strategy]}
                                platforms={[GamePlatform.Desktop]}
                            />

                            <HomeGameEntry
                                name={"Undead Blocks"}
                                plug={"undead-blocks"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fundead-blocks-skin-vaults%2FCard.png"}
                                visits={10000}
                                items={50}
                                offers={0}
                                categories={[GameCategory.Action, GameCategory.Adventure]}
                                platforms={[GamePlatform.Android, GamePlatform.iOS]}
                            />

                            <HomeGameEntry
                                name={"DeFi Kingdoms"}
                                plug={"defi-kingdoms"}
                                img={"https://image-cdn.lootrush.com/unsafe/800x0/smart/filters:format(webp)/https%3A%2F%2Flootrush-website-assets.s3.us-east-1.amazonaws.com%2Fimages%2Fgames%2Fdefi-kingdoms-heroes%2FCard.png"}
                                visits={100000}
                                items={50}
                                offers={0}
                                categories={[GameCategory.MMOORPG]}
                                platforms={[GamePlatform.Web]}
                            />
                        </div>
                    </div>
                    <p className="opacity-0 pt-10">Load more</p>
                </div>
            </section>

        </>
    );
}
