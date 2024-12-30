'use client';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import Link from 'next/link';
import Notifications from './Notifications';
import Image from 'next/image';
import { Typography } from "antd";

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
    <header className="sticky top-0 z-50 w-full bg-secondary">
      <nav className="navbar navbar-expand-lg relative mx-auto flex h-20 max-w-[1760px] items-center gap-5 backdrop-blur-md px-[12vw]">
        <Text strong className='text-4xl pr-8'>PolFT</Text>
        <SearchBar placeholder='Search NFTs, games, authors, ...'/>
        <Menu onClick={onClick} selectedKeys={[currentPage]} mode="horizontal" items={items} className='flex-1' />
        <div className="flex gap-4 h-9 items-center">
          <Button type='primary' className='h-full'><Text strong>Connect Wallet</Text></Button>
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
    </header>
  );
}
