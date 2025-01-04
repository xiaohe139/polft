import { NFTInfo } from "@/interfaces/nft";
import Image from "next/image";
import { Button, Typography } from "antd";
const { Text } = Typography;

export default function BuyNFT({
    name,
    img,
    author,
    contract,
    tokenId,
    feePerDay
}: NFTInfo) {
    return (
        <div className="flex flex-1 relative md:inline-block transform shadow-lg transition-all md:align-middle md:w-full md:max-w-6xl md:mb-20 md:mt-4">
            <div className="absolute top-2 right-2">
                <button
                    role="button"
                    className="cursor-pointer flex items-center font-body font-bold select-none relative whitespace-nowrap align-middle outline-0 justify-center w-auto p-2 rounded-lg border border-transparent shadow transition focus:outline-none hover:no-underline text-white hover:text-white active:text-white bg-gray-600 hover:bg-secondary active:bg-gray-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div className="text-left overflow-hidden rounded-xl hover:no-underline bg-secondary flex-1">
                <div className="md:grid grid-cols-[10fr_5fr]">
                    <div className="flex flex-col p-6 bg-light-secondary justify-start min-w-full">
                        <h4 className="break-words max-w-sm font-bold text-2xl">{name}</h4>

                        <Text className="text-[#44C174]">Delivery in less than 1min</Text>
                        <div translate="no" className="flex flex-col gap-2 mt-5">
                            <div
                                className="m-0 text-base flex flex-col justify-center"
                                data-nft-id="de5877a0-5b14-4d41-9cf1-3eb59fc39a36"
                                data-service-fee="1.1"
                            >
                                <div>
                                    <span className="relative">
                                        <span className="ml-1 text-muted">${feePerDay}/day</span>
                                    </span>

                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col gap-2 mt-5">
                            <label htmlFor="">Days of rental</label>
                            <select
                                id="days-of-rental"
                                className="w-full border-gray-500 focus:border-primary-400 bg-gray-600 focus:bg-gray-800 rounded-md text-gray-300 focus:text-gray-200"
                            >
                                <option value={1}>1 rental day</option>
                            </select>
                        </div>
                        <div className="w-full border-t-2 mt-5 p-5 border-gray-600">
                            <div className="flex justify-between">
                                <h3 className="text-sm font-body">Subtotal</h3>
                                <h3 className="text-sm font-body text-right">$0.0094 USD</h3>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-sm font-normal">Gas fee</h3>
                                <h3 className="text-sm font-body text-right">$0.0068 USD</h3>
                            </div>
                            <div className="flex justify-between">
                                <h3 className="text-sm font-normal flex items-center gap-1">
                                    Service fees
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="w-4 h-4 text-muted hover:text-white cursor-pointer"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </h3>
                                <h3 className="text-sm font-body text-right">$0.0009 USD</h3>
                            </div>
                            <div className="flex justify-between mt-3 font-bold">
                                <h3 className="text-xl font-body">Total</h3>
                                <h3 className="text-xl font-body text-right">$0.0172 USD</h3>
                            </div>
                            <Button className="w-full mt-5 py-5" type="primary">
                                <Text strong className="text-xl">Buy</Text>
                            </Button>
                        </div>

                    </div>
                    <div className="md:order-first">
                        <h2 className="pt-6 px-10 pb-6 text-3xl">NFT</h2>
                        <div className="md:grid grid-cols-2">
                            <div>
                                <Image
                                    className="w-full animate-fade-in"
                                    alt={name}
                                    src={img}
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="flex-grow p-6">
                                <div
                                    data-trait-type="hp"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Hp</div>
                                    <div className="text-right pl-10 text-white/70">44</div>
                                </div>
                                <div
                                    data-trait-type="speed"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Speed</div>
                                    <div className="text-right pl-10 text-white/70">44</div>
                                </div>
                                <div
                                    data-trait-type="skill"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Skill</div>
                                    <div className="text-right pl-10 text-white/70">31</div>
                                </div>
                                <div
                                    data-trait-type="morale"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Morale</div>
                                    <div className="text-right pl-10 text-white/70">45</div>
                                </div>
                                <div
                                    data-trait-type="class"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Class</div>
                                    <div className="text-right pl-10 text-white/70">Reptile</div>
                                </div>
                                <div
                                    data-trait-type="stage"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Stage</div>
                                    <div className="text-right pl-10 text-white/70">4</div>
                                </div>
                                <div
                                    data-trait-type="purity"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Purity</div>
                                    <div className="text-right pl-10 text-white/70">21</div>
                                </div>
                                <div
                                    data-trait-type="pureness"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Pureness</div>
                                    <div className="text-right pl-10 text-white/70">1</div>
                                </div>
                                <div
                                    data-trait-type="back.name"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Back Name</div>
                                    <div className="text-right pl-10 text-white/70">Hero</div>
                                </div>
                                <div
                                    data-trait-type="body.name"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Body Name</div>
                                    <div className="text-right pl-10 text-white/70">Normal</div>
                                </div>
                                <div
                                    data-trait-type="ears.name"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Ears Name</div>
                                    <div className="text-right pl-10 text-white/70">Innocent</div>
                                </div>
                                <div
                                    data-trait-type="eyes.name"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Eyes Name</div>
                                    <div className="text-right pl-10 text-white/70">Robin</div>
                                </div>
                                <div
                                    data-trait-type="horn.name"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Horn Name</div>
                                    <div className="text-right pl-10 text-white/70">Clamshell</div>
                                </div>
                                <div
                                    data-trait-type="tail.name"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Tail Name</div>
                                    <div className="text-right pl-10 text-white/70">Tiny</div>
                                </div>
                                <div
                                    data-trait-type="mouth.name"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Mouth Name</div>
                                    <div className="text-right pl-10 text-white/70">Square</div>
                                </div>
                                <div
                                    data-trait-type="specialCollection.xmas"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Special Collection Xmas</div>
                                    <div className="text-right pl-10 text-white/70">False</div>
                                </div>
                                <div
                                    data-trait-type="specialCollection.japan"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Special Collection Japan</div>
                                    <div className="text-right pl-10 text-white/70">False</div>
                                </div>
                                <div
                                    data-trait-type="specialCollection.shiny"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Special Collection Shiny</div>
                                    <div className="text-right pl-10 text-white/70">False</div>
                                </div>
                                <div
                                    data-trait-type="specialCollection.mystic"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Special Collection Mystic</div>
                                    <div className="text-right pl-10 text-white/70">False</div>
                                </div>
                                <div
                                    data-trait-type="specialCollection.summer"
                                    className="flex justify-between overflow-auto scrollbar-hide pb-2 pt-2 border-t border-gray-600/50 first:border-none text-md"
                                >
                                    <div className="font-medium pr-10">Special Collection Summer</div>
                                    <div className="text-right pl-10 text-white/70">False</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
