'use client';
import HomeGameEntry from "@/components/home/HomeGameEntry";
import { GameCategory, GamePlatform } from "@/interfaces/game";

export default function Home() {
    return (
        <>
            <section
                className="flex flex-col md:flex-row md:gap-6 px-5 md:px-10 pt-6 max-w-[1920px] mx-auto">
                <div
                    className="bg-gray-800/80 backdrop-blur-lg flex flex-col w-full pb-2 md:w-[16rem] z-40 sticky top-[142px] md:top-[150px] md:overflow-auto scrollbar-hide md:h-[calc(100vh-180px)]">
                    <div className="flex mb-2 sm:mb-6 w-full items-center order-first">
                        <div
                            className="flex flex-row row-end-1 h-10 items-center cursor-pointer content-end place-content-end justify-center bg-gray-700 p-4hover:bg-gray-600 active:bg-gray-600 w-full rounded-lg">
                            <a className="flex text-white">
                                <img
                                    src="/images/icons/submit-collection.svg"
                                    alt="premium"
                                    className="w-5 h-5 mr-2"
                                />
                            </a>
                            <p className="text-sm font-bold max-w-lg">List a new collection</p>
                        </div>
                    </div>
                    <div className="flex gap-2 order-first md:order-none pt-2 md:pt-0">
                        <div className="flex items-center bg-gray-700 px-2 rounded-lg text-muted flex-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className="border-none bg-transparent px-2"
                                defaultValue=""
                            />
                        </div>
                        <button
                            className="bg-gray-600 flex-1 px-2 flex items-center justify-center py-2 rounded-lg gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6"
                            >
                                <path
                                    d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                            </svg>
                            Filters
                        </button>
                    </div>
                    <div className="md:py-4" />
                    <div className="block md:hidden">
                        <h3 className="text-center mb-4 text-3xl">Filters</h3>
                        <button
                            className="absolute top-[1rem] right-[1rem] items-center gap-2 bg-gray-700 p-2 rounded-md mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 pb-10">
                        <div
                            className="bg-gray-600 md:bg-transparent rounded-md p-3 md:p-0"
                            data-headlessui-state="open"
                        >
                            <button
                                className="w-full text-md md:mb-2 flex font-bold text-left justify-between items-center transition-all text-white"
                                id="headlessui-disclosure-button-:r9:"
                                type="button"
                                aria-expanded="true"
                                data-headlessui-state="open"
                                aria-controls="headlessui-disclosure-panel-:ra:"
                            >
                                Blockchain
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-8 flex-none p-1 rounded-xl"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <div
                                className="flex flex-col"
                                id="headlessui-disclosure-panel-:ra:"
                                data-headlessui-state="open"
                            >
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/ethereum.svg"
                                        width={20}
                                        alt="Ethereum"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Ethereum
                                    </label>
                                    <label className="cursor-pointer text-sm">194</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/binance.svg"
                                        width={20}
                                        alt="Binance"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Binance
                                    </label>
                                    <label className="cursor-pointer text-sm">191</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/polygon.svg"
                                        width={20}
                                        alt="Polygon"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Polygon
                                    </label>
                                    <label className="cursor-pointer text-sm">166</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/immutable.svg"
                                        width={20}
                                        alt="Immutable"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Immutable
                                    </label>
                                    <label className="cursor-pointer text-sm">18</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/avalanche.svg"
                                        width={20}
                                        alt="Avalanche"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Avalanche
                                    </label>
                                    <label className="cursor-pointer text-sm">17</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/arbitrum.svg"
                                        width={20}
                                        alt="Arbitrum"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Arbitrum
                                    </label>
                                    <label className="cursor-pointer text-sm">15</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img src="/images/icons/home/ronin.svg" width={20} alt="Ronin" />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Ronin
                                    </label>
                                    <label className="cursor-pointer text-sm">6</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/other-blockchain.svg"
                                        width={20}
                                        alt="Immutable zkEVM"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Immutable zkEVM
                                    </label>
                                    <label className="cursor-pointer text-sm">4</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img src="/images/icons/home/base.svg" width={20} alt="Base" />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Base
                                    </label>
                                    <label className="cursor-pointer text-sm">2</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/wemix-3.0.svg"
                                        width={20}
                                        alt="Wemix 3.0"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Wemix 3.0
                                    </label>
                                    <label className="cursor-pointer text-sm">2</label>
                                </button>
                            </div>
                        </div>
                        <div
                            className="bg-gray-600 md:bg-transparent rounded-md p-3 md:p-0"
                            data-headlessui-state="open"
                        >
                            <button
                                className="w-full text-md md:mb-2 flex font-bold text-left justify-between items-center transition-all text-white"
                                id="headlessui-disclosure-button-:rb:"
                                type="button"
                                aria-expanded="true"
                                data-headlessui-state="open"
                                aria-controls="headlessui-disclosure-panel-:rc:"
                            >
                                Platform
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-8 flex-none p-1 rounded-xl"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <div
                                className="flex flex-col"
                                id="headlessui-disclosure-panel-:rc:"
                                data-headlessui-state="open"
                            >
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img src="/images/icons/home/web.svg" width={20} alt="Web" />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Web
                                    </label>
                                    <label className="cursor-pointer text-sm">218</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/android.svg"
                                        width={20}
                                        alt="Android"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Android
                                    </label>
                                    <label className="cursor-pointer text-sm">152</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img
                                        src="/images/icons/home/desktop.svg"
                                        width={20}
                                        alt="Desktop"
                                    />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Desktop
                                    </label>
                                    <label className="cursor-pointer text-sm">137</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <img src="/images/icons/home/iphone.svg" width={20} alt="iPhone" />
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        iPhone
                                    </label>
                                    <label className="cursor-pointer text-sm">127</label>
                                </button>
                            </div>
                        </div>
                        <div
                            className="bg-gray-600 md:bg-transparent rounded-md p-3 md:p-0"
                            data-headlessui-state="open"
                        >
                            <button
                                className="w-full text-md md:mb-2 flex font-bold text-left justify-between items-center transition-all text-white"
                                id="headlessui-disclosure-button-:rd:"
                                type="button"
                                aria-expanded="true"
                                data-headlessui-state="open"
                                aria-controls="headlessui-disclosure-panel-:re:"
                            >
                                Traffic
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-8 flex-none p-1 rounded-xl"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <div
                                className="flex flex-col"
                                id="headlessui-disclosure-panel-:re:"
                                data-headlessui-state="open"
                            >
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.traffic-[5000000..1000000000]"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        5M+
                                    </label>
                                    <label className="cursor-pointer text-sm hidden">0</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.traffic-[1000000..5000000]"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        1M+
                                    </label>
                                    <label className="cursor-pointer text-sm hidden">0</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.traffic-[500000..1000000]"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        500K-1M
                                    </label>
                                    <label className="cursor-pointer text-sm hidden">0</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.traffic-[100000..500000]"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        100-500K
                                    </label>
                                    <label className="cursor-pointer text-sm hidden">0</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.traffic-[50000..100000]"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        50-100K
                                    </label>
                                    <label className="cursor-pointer text-sm hidden">0</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.traffic-[10000..50000]"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        10-50K
                                    </label>
                                    <label className="cursor-pointer text-sm hidden">0</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.traffic-[5000..10000]"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        5-10K
                                    </label>
                                    <label className="cursor-pointer text-sm hidden">0</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.traffic-[0..5000]"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Below 5K
                                    </label>
                                    <label className="cursor-pointer text-sm hidden">0</label>
                                </button>
                            </div>
                        </div>
                        <div
                            className="bg-gray-600 md:bg-transparent rounded-md p-3 md:p-0"
                            data-headlessui-state="open"
                        >
                            <button
                                className="w-full text-md md:mb-2 flex font-bold text-left justify-between items-center transition-all text-white"
                                id="headlessui-disclosure-button-:rf:"
                                type="button"
                                aria-expanded="true"
                                data-headlessui-state="open"
                                aria-controls="headlessui-disclosure-panel-:rg:"
                            >
                                Category
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-8 flex-none p-1 rounded-xl"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            <div
                                className="flex flex-col"
                                id="headlessui-disclosure-panel-:rg:"
                                data-headlessui-state="open"
                            >
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-MMORPG"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        MMORPG
                                    </label>
                                    <label className="cursor-pointer text-sm">152</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-Strategy"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Strategy
                                    </label>
                                    <label className="cursor-pointer text-sm">92</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-PVP"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        PVP
                                    </label>
                                    <label className="cursor-pointer text-sm">80</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-Action"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Action
                                    </label>
                                    <label className="cursor-pointer text-sm">77</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-Adventure"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Adventure
                                    </label>
                                    <label className="cursor-pointer text-sm">53</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-Card"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Card
                                    </label>
                                    <label className="cursor-pointer text-sm">51</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-Sports"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Sports
                                    </label>
                                    <label className="cursor-pointer text-sm">36</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-Metaverse"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Metaverse
                                    </label>
                                    <label className="cursor-pointer text-sm">24</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-Fantasy"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Fantasy
                                    </label>
                                    <label className="cursor-pointer text-sm">23</label>
                                </button>
                                <button
                                    role="button"
                                    className="flex justify-between gap-2 px-2 py-2 rounded-md cursor-pointer text-muted hover:text-white transition-all items-center"
                                >
                                    <label className="relative flex items-start cursor-pointer -mt-1">
                                        <div className="flex items-center">
                                            <input
                                                name="facet-payload.metadata.categories-Breeding"
                                                type="checkbox"
                                                className="align-middle bg-transparent mt-1 focus:ring-primary-400 text-primary-400 border-gray-400 border-2 rounded h-5 w-5"
                                            />
                                        </div>
                                        <div className="text-gray-300 text-base ml-4">
                                            <div className="text-gray-300" />
                                        </div>
                                    </label>
                                    <label className="cursor-pointer text-md flex-1 text-left">
                                        Breeding
                                    </label>
                                    <label className="cursor-pointer text-sm">22</label>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col">
                    <div>
                        <div className="flex flex-row justify-between mb-4 items-start">
                            <div>
                                <h3 className="text-xl md:text-2xl">All games</h3>
                                <span className="text-muted text-sm md:text-md">688 games</span>
                            </div>
                            <div className="flex justify-end">
                                <div className="relative" data-headlessui-state="">
                                    <button
                                        className="flex gap-2 items-center transition-all p-2 rounded-md hover:bg-gray-700 text-sm border-2 bg-transparent border-transparent"
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
                                platforms={[GamePlatform.Android, GamePlatform.iPhone]}
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
