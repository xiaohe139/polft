import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white">
            <nav
                className="navbar navbar-expand-lg relative mx-auto flex h-20 max-w-[1760px] items-center justify-between backdrop-blur-md">
                <div
                    className="flex h-full w-full flex-nowrap md:px-4 lg:px-8 desktop:px-16 items-center  justify-between bg-white px-4 py-0">
                    <div className="logo-responsive flex h-full shrink-0 cursor-pointer items-center ">
                        <Link href="/public">
          <span
              style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
              }}
          >
            <span
                style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                }}
            >
              <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2785%27%20height=%2736%27/%3e"
                  style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                  }}
              />
            </span>
            <img
                alt="Nftdeal"
                srcSet="/_next/static/media/logo_NFTDeal.b7bffa58.svg 1x, /_next/static/media/logo_NFTDeal.b7bffa58.svg 2x"
                src="/_next/static/media/logo_NFTDeal.b7bffa58.svg"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%"
                }}
            />
          </span>
                        </Link>
                    </div>
                    <div
                        className="flex w-full items-center justify-end space-x-4 min-[760px]:max-[820px]:w-full lg:w-fit">
                        <div
                            className="flex w-fit shrink grow items-center mr-2 max-w-[379px] basis-1/5 justify-end relative desktop:ml-[26px]">
                            <label
                                htmlFor="search"
                                className="absolute ml-0 mr-0 flex h-full cursor-pointer items-center md:ml-[14px] md:mr-[11px] right-0 top-0 md:right-[10px] md:left-[0px]"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 text-[#7F7F9A]"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"/>
                                </svg>
                            </label>
                            <input
                                type="text"
                                id="search"
                                placeholder="Tìm vật phẩm, tác giả hoặc bộ sưu tập"
                                autoComplete="off"
                                className="w-0 rounded-[12px] py-0 left-0 bg-[#ECF0F3] text-base font-normal text-[#7F7F9A] transition-all placeholder:text-base focus-visible:outline-0 sm:py-3 md:w-[379px] md:px-10"
                            />
                        </div>
                        <div
                            className=" navbar-collapse hidden grow items-center px-4 xl:block desktop:hidden"
                            id="navbarSupportedContentY"
                        >
                            <ul className="navbar-nav m-0 justify-center gap-10 lg:flex lg:flex-row lg:items-center">
                                <li className="relative cursor-pointer">
                                    <div
                                        className="ant-dropdown-trigger flex items-center justify-center customize-ant-dropdown">
                                        <div
                                            className="whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Khám phá
                                        </div>
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className="ml-2 h-[22px] w-[16px] pt-[2px] font-bold text-[#7F7F9A] "
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </li>
                                <li className="relative cursor-pointer">
                                    <div className="ant-dropdown-trigger flex items-center justify-center">
                                        <div
                                            className="whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Thống kê
                                        </div>
                                        <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className=" ml-2 h-[22px] w-[16px] pt-[2px] font-bold text-[#7F7F9A] "
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </li>
                                <li className="relative cursor-pointer">
                                    <div
                                        className="whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block">
                                        Cho thuê
                                    </div>
                                </li>
                                <li className="relative cursor-pointer">
                                    <div
                                        className="whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block">
                                        Drops
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="ant-dropdown-trigger flex shrink-0 cursor-pointer items-center rounded-full border border-[#ECECEE] px-[6px] py-[10px] desktop:hidden"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
          <span
              style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
              }}
          >
            <span
                style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                }}
            >
              <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2728%27%20height=%2720%27/%3e"
                  style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                  }}
              />
            </span>
            <img
                alt="languageIcon"
                srcSet="/_next/static/media/vi.63a342af.svg 1x"
                src="/_next/static/media/vi.63a342af.svg"
                decoding="async"
                data-nimg="intrinsic"
                className=" rounded-[3px]"
                style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%"
                }}
            />
          </span>
                        </div>
                        <div
                            className="ant-dropdown-trigger desktop:hidden max-xl:hidden flex items-center justify-between gap-1 whitespace-nowrap rounded-full border border-[#ECECEE] p-2 text-center text-[15px] font-bold leading-5 text-[#7F7F9A] cursor-pointer">
          <span
              style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%"
              }}
          >
            <span
                style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%"
                }}
            >
              <img
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
                  style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0
                  }}
              />
            </span>
            <img
                alt="BSC mainnet"
                srcSet="/_next/image?url=https%3A%2F%2Ficons.llamao.fi%2Ficons%2Fchains%2Frsz_binance.jpg&w=128&q=75 1x"
                src="/_next/image?url=https%3A%2F%2Ficons.llamao.fi%2Ficons%2Fchains%2Frsz_binance.jpg&w=128&q=75"
                decoding="async"
                data-nimg="intrinsic"
                className="rounded-full"
                style={{
                    position: "absolute",
                    inset: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%"
                }}
            />
          </span>
                        </div>
                        <div className="cursor-pointer rounded-full border desktop:hidden">
                            <div className="flex items-center justify-end p-[11px]">
            <span
                style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                }}
            >
              <span
                  style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                  }}
              >
                <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e"
                    style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    }}
                />
              </span>
              <img
                  alt=""
                  src="/_next/static/media/header-mobile-icon.1094038f.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                  }}
                  srcSet="/_next/static/media/header-mobile-icon.1094038f.svg 1x"
              />
            </span>
                            </div>
                        </div>
                        <div className="flex items-center xl:hidden">
                            <button
                                className="flex h-6 w-6 items-center justify-center transition-all duration-300 desktop:hidden ">
            <span
                style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    position: "relative",
                    maxWidth: "100%"
                }}
            >
              <span
                  style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      maxWidth: "100%"
                  }}
              >
                <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                    style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    }}
                />
              </span>
              <img
                  alt="icon-open-menu"
                  src="/_next/static/media/group-mobile.3bd43d28.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                      position: "absolute",
                      inset: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%"
                  }}
                  srcSet="/_next/static/media/group-mobile.3bd43d28.svg 1x"
              />
            </span>
                            </button>
                        </div>
                    </div>
                    <div className="mr-2 hidden cursor-pointer rounded bg-[#e3dedca0] lg:hidden">
                        <div
                            className="ant-dropdown-trigger cursor-pointer whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                        >
                            vi
                        </div>
                    </div>
                    <div
                        className=" navbar-collapse hidden grow items-center px-4 desktop:block"
                        id="navbarSupportedContentY"
                    >
                        <ul className="navbar-nav m-0 justify-center gap-10 lg:flex lg:flex-row lg:items-center 2xl:gap-16">
                            <li className="relative cursor-pointer">
                                <div className="ant-dropdown-trigger flex items-center justify-center">
                                    <div
                                        className="whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        Khám phá
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className="ml-2 h-[22px] w-[16px] pt-[2px] font-bold text-[#7F7F9A] "
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </li>
                            <li className="relative cursor-pointer">
                                <div className="ant-dropdown-trigger flex items-center justify-center">
                                    <div
                                        className="whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                    >
                                        Thống kê
                                    </div>
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        className=" ml-2 h-[22px] w-[16px] pt-[2px] font-bold text-[#7F7F9A] "
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </li>
                            <li className="relative cursor-pointer">
                                <div
                                    className="whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block">
                                    Cho thuê
                                </div>
                            </li>
                            <li className="relative cursor-pointer">
                                <div
                                    className="whitespace-nowrap py-1 text-base font-bold text-[#7F7F9A] hover:text-[#2081e2] md:block">
                                    Drops
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                        className=" navbar-collapse hidden grow items-center desktop:block"
                        id="navbarSupportedContentY"
                    >
                        <ul className="navbar-nav m-0 justify-end lg:flex lg:flex-row lg:items-center">
                            <li className="relative mr-2 h-10 w-10 cursor-pointer rounded-full border border-[#ECECEE]">
                                <div
                                    className="ant-dropdown-trigger  cursor-pointer px-[6px] py-[10px]"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
              <span
                  style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                      position: "relative",
                      maxWidth: "100%"
                  }}
              >
                <span
                    style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        maxWidth: "100%"
                    }}
                >
                  <img
                      alt=""
                      aria-hidden="true"
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2728%27%20height=%2720%27/%3e"
                      style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0
                      }}
                  />
                </span>
                <img
                    alt="languageIcon"
                    srcSet="/_next/static/media/vi.63a342af.svg 1x"
                    src="/_next/static/media/vi.63a342af.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    className=" rounded-[3px]"
                    style={{
                        position: "absolute",
                        inset: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%"
                    }}
                />
              </span>
                                </div>
                            </li>
                            <li className="relative mx-2 cursor-pointer rounded-full border border-solid border-[#ECECEE] min-[1580px]:rounded-xl">
                                <div
                                    className="ant-dropdown-trigger flex items-center justify-between gap-1 whitespace-nowrap p-2 text-center text-[15px] font-bold leading-5 text-[#7F7F9A] min-[1580px]:px-5 min-[1580px]:py-2"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    <div className="flex items-center justify-center">
                <span
                    style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "relative",
                        maxWidth: "100%"
                    }}
                >
                  <span
                      style={{
                          boxSizing: "border-box",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                          maxWidth: "100%"
                      }}
                  >
                    <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
                        style={{
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0
                        }}
                    />
                  </span>
                  <img
                      alt="BSC mainnet"
                      srcSet="/_next/image?url=https%3A%2F%2Ficons.llamao.fi%2Ficons%2Fchains%2Frsz_binance.jpg&w=128&q=75 1x"
                      src="/_next/image?url=https%3A%2F%2Ficons.llamao.fi%2Ficons%2Fchains%2Frsz_binance.jpg&w=128&q=75"
                      decoding="async"
                      data-nimg="intrinsic"
                      className="rounded-full"
                      style={{
                          position: "absolute",
                          inset: 0,
                          boxSizing: "border-box",
                          padding: 0,
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: 0,
                          height: 0,
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%"
                      }}
                  />
                </span>
                                    </div>
                                    <div className="hidden flex-1 min-[1580px]:inline">
                                        BSC mainnet
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div className="rounded-xl border border-solid border-[#ECECEE] cursor-pointer">
                                        <div
                                            className="text-[#7F7F9A] text-[15px] font-bold text-center leading-5 px-5 py-[10px] md:block whitespace-nowrap"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Liên kết ví
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}