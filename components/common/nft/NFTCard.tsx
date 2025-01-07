import { NFTInfo } from "@/interfaces/nft";
import Image from "next/image";
import HiddenCopyableText from "../HiddenCopyableText";
import { Typography } from "antd";

const { Text } = Typography;

type NFTCardProps = Pick<NFTInfo, "name" | "img" | "author" | "contractAddress" | "tokenId" | "feePerDay">;

export default function NFTCard({
    name,
    img,
    author,
    contractAddress,
    tokenId,
    feePerDay
}: NFTCardProps) {
    return (
        <>
            <div
                className="flex flex-col gap-1 md:gap-2 rounded-xl bg-[rgb(34,34,48)] transition-all relative h-full"
            >
                <div className="relative rounded-md overflow-hidden transition flex flex-col items-center justify-center h-full w-full">
                    <Image
                        className="px-0 animate-fade-in"
                        alt={name}
                        src={img}
                        width={311}
                        height={311}
                    />
                </div>
                <div className="px-2 lg:px-4">
                    <h3 className="text-xl m-0 mb-2 overflow-clip font-bold">{name}</h3>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-1 font-light">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>{" "} Delivery in 1min</span>
                        </div>
                        <div className="flex gap-1 font-light text-muted">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 min-w-[1.25rem]"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <HiddenCopyableText textToCopy={author} iconProps={{ className: "w-[287px]", ellipsis: true }}>
                                {author}
                            </HiddenCopyableText>
                        </div>
                        <div className="flex gap-1 font-light">
                            <svg
                                viewBox="0 0 24 24"
                                width={18}
                                height={18}
                                fill="currentColor"
                            >
                                <path d="M23.34,12.35l-10.67,11.65H3c-1.65,0-3-1.35-3-3v-7c0-1.65,1.35-3,3-3H7v-1c-1.65,0-3-1.35-3-3h2c0,.55,.45,1,1,1h2.38c.34,0,.62-.28,.62-.62,0-.31-.22-.57-.52-.62l-3.29-.55c-1.27-.21-2.19-1.3-2.19-2.59,0-1.45,1.18-2.62,2.62-2.62h.38V0h2V1c1.65,0,3,1.35,3,3h-2c0-.55-.45-1-1-1h-2.38c-.34,0-.62,.28-.62,.62,0,.31,.22,.57,.52,.62l3.29,.55c1.27,.21,2.19,1.3,2.19,2.59,0,1.45-1.18,2.62-2.62,2.62h-.38v1h2.79c1.22,0,2.21,.99,2.21,2.21,0,1.09-.82,2.04-1.9,2.19l-4.24,.61,.28,1.98,4.24-.61c2.06-.29,3.62-2.09,3.62-4.17,0-.22-.03-.43-.06-.64l3.54-3.74c.46-.5,1.1-.8,1.79-.83,.69-.03,1.36,.21,1.88,.68,1.05,.96,1.14,2.6,.19,3.66Z" />
                            </svg>


                            <Text>${feePerDay}/day</Text>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-2 w-full p-2 lg:p-4 bg-[rgb(45,45,63)] rounded-b-xl flex-wrap xl:flex-nowrap">
                    <div className="flex flex-col w-full justify-center">
                        <HiddenCopyableText textToCopy={contractAddress} iconProps={{ className: "w-[311px]", ellipsis: true }}>
                            Contract: {contractAddress}
                        </HiddenCopyableText>
                        <HiddenCopyableText textToCopy={tokenId} iconProps={{ ellipsis: true }}>
                            Token ID: {tokenId}
                        </HiddenCopyableText>
                    </div>
                </div>
            </div>
        </>
    );
}
