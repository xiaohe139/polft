'use client';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import Link from 'next/link';
import Notifications from './Notifications';
import Image from 'next/image';
import { Typography } from "antd";
import '@rainbow-me/rainbowkit/styles.css';
import {
  ConnectButton,
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base,
//   moonbaseAlpha,
//   moonbeam,
//   acala,
// } from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { THEME } from '@/styles/theme';
import { MAIN_FONT } from '@/styles/font';
import { assetHub, moonbaseAlpha, shibuyaTestnet } from '@/utils/chains';

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'e6825efbac4ec8d3d193f905d80fc71d',
  chains: [moonbaseAlpha, shibuyaTestnet, assetHub],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

const { Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link href={'/my-rentals'} className='hover:!text-text-hover font-bold'>Rentals</Link>,
    key: 'rentals',

  },
  {
    label: <Link href={'/my-listings'} className='hover:!text-text-hover font-bold'>Listings</Link>,
    key: 'listings',
  },
  {
    label: <Link href={'/activity'} className='hover:!text-text-hover font-bold'>Activity</Link>,
    key: 'activity',
  }
];

export default function Header() {
  const [currentPage, setCurrentPage] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrentPage(e.key);
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: THEME.PRIMARY_COLOR,
            // accentColorForeground: THEME.PRIMARY_COLOR,
            fontStack: MAIN_FONT.className,
            borderRadius: 'small',
          })}
        >
          <header className="sticky top-0 z-50 w-full">
            <div className='bg-secondary/50 backdrop-blur-md border-b border-gray-600 shadow-lg'>
              <nav className="navbar navbar-expand-lg relative mx-auto flex h-20 max-w-[1760px] items-center gap-5 backdrop-blur-md px-[12vw]">
                <Link href='/'><Text strong className='text-4xl pr-8'>PolFT</Text></Link>
                <SearchBar placeholder='Search NFTs, games, authors, ...' />
                <Menu onClick={onClick} selectedKeys={[currentPage]} mode="horizontal" items={items} className='flex-1' />
                <div className="flex gap-4 items-center h-9">
                  <ConnectWallet />
                  {/* <ConnectButton /> */}
                  <Notifications />
                  <Button className="px-0 h-full">
                    <Image
                      src="https://image-cdn.lootrush.com/unsafe/311x0/smart/filters:format(webp)/https%3A%2F%2Faxiecdn.axieinfinity.com%2Faxies%2F11782174%2Faxie%2Faxie-full-transparent.png"
                      alt="profile"
                      width={48}
                      height={36}
                    // className='w-full h-full'
                    />
                  </Button>
                </div>
              </nav>
            </div>
          </header>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

function ConnectWallet() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <Button type='primary' className='h-full' onClick={openConnectModal}><Text strong>Connect Wallet</Text></Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button className='h-full' onClick={openChainModal}><Text strong>Wrong chain</Text></Button>
                );
              }
              return (
                <>
                  <Button onClick={openChainModal} className='h-full'>
                    {chain.iconUrl &&
                      <Image
                        alt={chain.name ?? 'Chain icon'}
                        src={chain.iconUrl}
                        width={28}
                        height={28}
                      />
                    }
                    <DownArrow />
                  </Button>
                  <Button onClick={openAccountModal} className='h-full'>
                    <Text strong>{account.displayName}</Text>
                    <DownArrow />
                  </Button>
                </>
              );
            })()}
          </>
        );
      }}
    </ConnectButton.Custom>
  );
}

function DownArrow() {
  return (
    <svg fill="none" height={7} width={14} xmlns="http://www.w3.org/2000/svg">
      <title>Dropdown</title>
      <path
        d="M12.75 1.54001L8.51647 5.0038C7.77974 5.60658 6.72026 5.60658 5.98352 5.0038L1.75 1.54001"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        xmlns="http://www.w3.org/2000/svg"
      />
    </svg>

  )
}
