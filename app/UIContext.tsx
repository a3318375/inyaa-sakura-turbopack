'use client';

import React, { createContext, useContext, useState } from 'react';

export type ContextSetType = {
  menuShow: boolean,
  myInfoShow: boolean,
  scroll: number,
}

const UIContext = createContext<
  [ContextSetType, React.Dispatch<React.SetStateAction<ContextSetType>>] | undefined
  >(undefined);


export function UIProvider({ children }: { children: React.ReactNode }) {
  const [menuShow, setMenuShow] = useState({
    menuShow: true,
    myInfoShow: false,
    scroll: 0,
  });
  console.log(6666)
  return (
    <UIContext.Provider value={[menuShow, setMenuShow]}>
      {children}
    </UIContext.Provider>
  );
}

export function useUIContext(number: number) {
  console.log(111, number)
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}

export default UIContext;
