export default function MyRentalsLayout({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <main>
            <div className="max-w-7xl mx-auto py-6 px-4 md:px-6">
                <div className="grid grid-cols-1 gap-4 justify-items-center mb-8 md:flex md:flex-row md:justify-center">
                    <div className="w-full md:w-1/3 h-36 justify-center px-6 py-2 px md:mr-4 flex flex-col gap-2 rounded-xl hover:no-underline bg-light-secondary shadow-xl">
                        <span className="text-muted">
                            <span className="text-red-600 text-xl">• </span>Total daily fee
                        </span>
                        <p className="m-0 flex justify-between">
                            <span className="flex">$1.0000</span>
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 h-36 justify-center px-6 py-2 px md:mr-4 flex flex-col gap-2 rounded-xl hover:no-underline bg-light-secondary shadow-xl">
                        <span className="text-muted">
                            <span className="text-green-600 text-xl">• </span>Rented assets
                        </span>
                        <p className="m-0 flex justify-between">
                            <span className="flex">1 assets available</span>
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 h-36 justify-center px-6 py-2 px md:mr-4 flex flex-col gap-2 rounded-xl hover:no-underline bg-light-secondary shadow-xl">
                        <div className="flex flex-row items-start">
                            <div className="flex flex-col gap-2 cursor-pointer">
                                <span className="text-muted">Tokens</span>
                                <p className="m-0 flex justify-between">
                                    <span className="flex">0 tokens available</span>
                                </p>
                                <p className="text-muted text-md">~$0 total balance</p>
                            </div>
                            <div className="ml-auto items-start flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="w-4 h-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="my-5" />
                <section>
                    <nav
                        className="flex space-x-8 overflow-x-auto border-b-gray-200/20 border-b-2 mb-4"
                        aria-label="Tabs"
                    >
                        <div
                            className="cursor-pointer text-white hover:no-underline border-white hover:text-white whitespace-nowrap py-4 px-1 border-b-2 font-bold"
                            aria-current="page"
                        >
                            Rentals
                        </div>
                        <div
                            className="cursor-pointer text-white hover:no-underline border-transparent hover:text-gray-400 hover:border-gray-400 whitespace-nowrap py-4 px-1 border-b-2 font-bold"
                        >
                            Invoices
                        </div>
                    </nav>
                    {children}
                </section>
            </div>
        </main>

    )
}
