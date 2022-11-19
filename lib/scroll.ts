import { useState } from 'react';

export function useScroll() {
  const [show, setShow] = useState(true);

  const updateShow = () => {
    setShow(true);
  };

  const updateHide = () => {
    setShow(false);
    console.log(1111, show)
  };

  return {show, updateShow, updateHide}
}
