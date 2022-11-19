'use client';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import UIContext, { ContextSetType, useUIContext } from './UIContext';

export default function Background() {
  console.log(5555)
  const [menuShow, setMenuShow] = useUIContext(2);

  const [showScroll, setShowScroll] = useState(true);
  const [scroll, setScroll] = useState({
    menuShow: true,
    myInfoShow: false,
    scroll: 0,
  });

  const bindHandleScroll = () => {
    const scrollTopOj = document.getElementById('pageContent');
    const scrollTop = scrollTopOj ? scrollTopOj.scrollTop : 0;
    const myInfo = document.getElementById('myInfo');
    console.log(33333, scroll.scroll, scrollTop);
    //setNowScroll(scrollTop);
    if(scroll.scroll !== scrollTop){
      // setMenuShow({
      //   ...menuShow,
      //   scroll: scrollTop ? scrollTop: 0,
      // });
      setScroll({...scroll, scroll: scrollTop});
    }
    console.log(444444, scroll.scroll);
    // const myTop = scrollTopOj ? scrollTopOj.scrollHeight : 0;
    // if (scrollTop > myTop / 10) {
    //   setShowScroll(false);
    // } else {
    //   setShowScroll(true);
    // }
  };
  useEffect(() => {
    console.log(333)
    document.getElementById('pageContent')?.addEventListener('scroll', bindHandleScroll);
  }, [scroll.scroll]);
  return (
    <img
      className={clsx(true ? 'fixed w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover' : 'fixed filter blur-sm w-full h-full object-cover -z-999 bg-img-mobile-default md:bg-img-default bg-no-repeat bg-cover')}
    />
  );
}
