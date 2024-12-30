'use client';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import SearchBar from '@/components/common/SearchBar/SearchBar';
import Link from 'next/link';
import Notifications from './Notifications';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link href={'/my-rentals'} className='hover:!text-text-hover font-bold'>Rentals</Link>,
    key: 'rentals',

  },
  {
    label: <Link href={'/my-listings'} className='hover:!text-text-hover font-bold'>Listings</Link>,
    key: 'listings',
  }
];

export default function Header() {
  const [currentPage, setCurrentPage] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrentPage(e.key);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary">
      <nav className="navbar navbar-expand-lg relative mx-auto flex h-20 max-w-[1760px] items-center backdrop-blur-md">
        <SearchBar />
        <Menu onClick={onClick} selectedKeys={[currentPage]} mode="horizontal" items={items}/>
        <Notifications />
      </nav>
    </header>
  );
}
