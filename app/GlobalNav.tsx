'use client';
import { use, useContext /*, cache*/ } from 'react';
import { userNoLoginNav, userLoginNav } from '@/lib/navDatas';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import { demos } from '@/lib/demos';
import UIContext from './UIContext';
import Logo from '@/ui/Logo';

async function getNavItems() {
  return await fetch('https://api.inyaw.com/inyaa-admin/menu/findMenuList')
    .then(response => response.json())
    .then(data => {
      if (data && data.code && data.data && data.code === 200) {
        return data.data;
      } else {
        return [];
      }
    });
}

export default function GlobalNav({ user }) {
  const userNav = user ? userLoginNav : userNoLoginNav;
  const [selectedLayoutSegments] = useSelectedLayoutSegments();
  const navItems = use(getNavItems());
  return (
    <div
      className={clsx(
        'hidden md:navbar bg-opacity-60 sticky top-0 z-999 bg-base-100 bg-opacity-70 transition duration-500',
        true ? 'translate-y-0' : '-translate-y-16',
      )}
    >
      <div className='flex-1'>
        <Logo />
      </div>
      <div className='flex-none hidden lg:block'>
        {/*<div id="aplayer" class="hidden lg:block" />*/}
      </div>
      <div className='flex-none hidden lg:block'>
        <ul className='menu menu-horizontal'>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex-none hidden lg:block'>
        {/*<ThemeChange />*/}
      </div>
      <div className='flex-none hidden lg:block'>
        <button className='btn btn-ghost btn-circle'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24'
               stroke='currentColor'>
            <path
              strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
      <div className='flex-none hidden lg:block'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            {user ? <img src='user.inyaaSysUserDetail.avatar' className='rounded-full w-6 h-6' /> :
              <div className='i-carbon-user-avatar w-6 h-6' />}
          </label>
          <ul tabIndex={0}
              className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-accent-content'>
            {userNav.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.path}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
