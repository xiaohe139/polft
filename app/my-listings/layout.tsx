'use client';
import { ChainAPI } from "@/api/chainAPI";
import HiddenCopyableText from "@/components/common/HiddenCopyableText";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import { CollectionInfo } from "@/interfaces/collection";
import { Button, Col, Input, Modal, Row, Select, Typography } from "antd";
import { isNaN } from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
import { useDebouncedCallback } from "use-debounce";
import { useAccount } from "wagmi";

const { Text, Title } = Typography;

export default function MyListingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className="max-w-7xl mx-auto py-6 px-4 md:px-6 mt-4">
                <div className="flex justify-between items-center">
                    <Title level={2}>My listings</Title>
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide font-bold h-[44px] text-base">
                        <Button className="h-full bg-transparent border border-light-secondary">
                            Edit Listings
                        </Button>
                        <ListNFT />
                        <Button
                            className="flex items-center h-full"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5 text-white mr-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Share your listings
                        </Button>
                        <Button className="h-full rounded-xl p-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
                <section>
                    <div className="mb-5">
                        <nav
                            className="-mb-px flex space-x-8 overflow-x-auto    "
                            aria-label="Tabs"
                        >
                            <Link
                                className="hover:no-underline relative  text-white border-white hover:text-white whitespace-nowrap py-4 px-1 border-b-2 "
                                href="/my-listings/assets"
                                aria-current="page"
                            >
                                Listed NFTs
                            </Link>
                            <Link
                                className="hover:no-underline relative text-gray-400 border-transparent hover:text-gray-400 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 "
                                href="/my-listings/activity"
                            >
                                Activity
                            </Link>
                        </nav>
                    </div>
                    {children}
                </section>
            </div>
        </main>
    )
}

const availableCollections: Pick<CollectionInfo, 'id' | 'name' | 'img' | 'contract' | 'chainId'>[] = [{
    id: 1,
    name: 'Axie Infinity: Axies',
    img: 'https://lootrush-website-assets.s3.us-east-1.amazonaws.com/images/games/axie-infinity-axies/Icon.png',
    contract: '0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d',
    chainId: 1
}, {
    id: 2,
    name: "Axie Infinity: Lands",
    img: "https://lootrush-website-assets.s3.us-east-1.amazonaws.com/images/games/axie-infinity-lands/Icon.png",
    contract: '0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d',
    chainId: 1
}, {
    id: 3,
    name: "Axie Infinity: Charms",
    img: "https://lootrush-website-assets.s3.us-east-1.amazonaws.com/images/games/axie-infinity-charms/Icon.png",
    contract: '0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d',
    chainId: 1
}, {
    id: 4,
    name: "Axie Infinity: Runes",
    img: "https://lootrush-website-assets.s3.us-east-1.amazonaws.com/images/games/axie-infinity-runes/Icon.png",
    contract: '0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d',
    chainId: 1
}, {
    id: 5,
    name: "Axie Infinity: Accessories",
    img: "https://lootrush-website-assets.s3.us-east-1.amazonaws.com/images/games/axie-infinity-accessories/Icon.png",
    contract: '0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d',
    chainId: 1
}, {
    id: 6,
    name: "Axie Infinity: Items",
    img: "https://lootrush-website-assets.s3.us-east-1.amazonaws.com/images/games/axie-infinity-items/Icon.png",
    contract: '0x8fb4c08d902c4ba250c3bfd4055a66a2f7764e4d',
    chainId: 1
}];

function ListNFT() {
    const {
        data: chainsInfo
    } = useSWR(availableCollections.map((collection) => collection.chainId), (chainIds) => {
        return Promise.all(chainIds.map((chainId) => {
            return ChainAPI.getChainById(chainId);
        }));
    });

    let walletAccount = useAccount();

    const [openModal, setOpenModal] = useState(false);
    const [selectedCollection, setSelectedCollection] = useState(-1);
    const [tokenId, setTokenId] = useState(0);
    const [feePerDay, setFeePerDay] = useState(0);

    const validateTokenId = useDebouncedCallback((tokenId: number) => {
        if (tokenId < 0 || isNaN(tokenId)) {
            return;
        }
        setTokenId(tokenId);
    }, 300);

    return (
        <>

            <Button
                type="primary"
                className="h-full"
                onClick={() => setOpenModal(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                    />
                </svg>
                List
            </Button>
            <Modal
                open={openModal}
                destroyOnClose
                width={800}
                footer={[]}
                closeIcon={null}
            >
                <div className="bg-secondary relative py-5 rounded-2xl">
                    <Title level={3} className="mx-5">List NFT</Title>
                    <Button
                        onClick={() => setOpenModal(false)}
                        className="px-2 py-5 absolute top-2 right-2"
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
                    </Button>
                    <div className="flex flex-col gap-8">
                        <SearchBar placeholder="Search for a Game, Contract Address or Blockchain" className="w-auto mx-5" />
                        <div className="h-[1px] w-full bg-gray-600"></div>
                        <Title level={4} className="mx-5">Select a Collection</Title>
                        <div className="max-h-[320px] overflow-y-auto overflow-x-hidden">
                            <Row gutter={[25, 33]} className="flex-wrap px-5">
                                {
                                    availableCollections.map((collection, i) => {
                                        return (
                                            <Col key={collection.id} span={12}>
                                                <div
                                                    className={`cursor-pointer flex gap-2 items-center border-2 ${selectedCollection == i ? 'border-primary' : 'border-gray-600'} rounded-xl p-3 text-base`}
                                                    onClick={() => setSelectedCollection(i)}
                                                >
                                                    <Image src={collection.img} width={50} height={50} alt={collection.name} className="rounded-lg" />
                                                    <div className="flex flex-col">
                                                        <Text>{collection.name}</Text>
                                                        {chainsInfo &&
                                                            <div className="flex gap-2 items-center">
                                                                <Image src={chainsInfo[i].img} alt={''} width={1} height={1} className="w-[16px] h-[16px]" />
                                                                <Text className="text-muted">{chainsInfo[i].name}</Text>
                                                            </div>
                                                        }
                                                        <HiddenCopyableText iconProps={{
                                                            className: 'text-muted w-[250px]',
                                                            ellipsis: true
                                                        }}>
                                                            {collection.contract}
                                                        </HiddenCopyableText>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                        <div className="flex flex-col gap-8 mx-5">
                            <div className="flex flex-col gap-2">
                                <Title level={4} className="!mb-0">Target chain: </Title>
                                <Select defaultValue={'hehe'} disabled options={[{ value: 'hehe', label: <Text className="text-muted">{walletAccount.chain?.name}</Text> }]} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Title level={4} className="!mb-0">Token ID: </Title>
                                <Input placeholder="E.g: 18" className="border-transparent h-10" onChange={(e) => validateTokenId(Number(e.target.value))} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Title level={4} className="!mb-0">Fee per day (in USD): </Title>
                                <Input placeholder="E.g: 18" className="border-transparent h-10" suffix="USD" onChange={(e) => setFeePerDay(Number(e.target.value))} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Title level={4} className="!mb-0">Payout address: </Title>
                                <Input className="!border-transparent h-10" disabled defaultValue={walletAccount.address}/>
                            </div>
                            <div className="h-[1px] w-full bg-gray-600"></div>
                            <div className="flex flex-col gap-2">
                                <Title level={4}>Summary</Title>
                                <div className="flex">
                                    <Text strong className="flex-1">Collection:</Text>
                                    <Text className="text-muted">{selectedCollection < 0 ? '' : availableCollections[selectedCollection].name}</Text>
                                </div>
                                <div className="flex">
                                    <Text strong className="flex-1">Target chain:</Text>
                                    <Text className="text-muted">{walletAccount.chain?.name}</Text>
                                </div>
                                <div className="flex">
                                    <Text strong className="flex-1">Token ID:</Text>
                                    <Text className="text-muted">{tokenId}</Text>
                                </div>
                                <div className="flex">
                                    <Text strong className="flex-1">Fee per day:</Text>
                                    <Text className="text-muted">{feePerDay} USD</Text>
                                </div>
                                <div className="flex">
                                    <Text strong className="flex-1">Service fee:</Text>
                                    <Text className="text-muted">0.01 USD</Text>
                                </div>
                                <div className="flex">
                                    <Text strong className="flex-1">Payout address:</Text>
                                    <Text className="text-muted">{walletAccount.address}</Text>
                                </div>
                            </div>
                            <Button type="primary" className="py-6">
                                <Text strong className="text-xl">Listing</Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}
