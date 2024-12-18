'use client'

import { useState, useEffect } from 'react'

export const BREAKPOINT_TABLET = 834;
export const BREAKPOINT_MOBILE = 480;

export function useDeviceDetect() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  function windowWidth() {
    const a = document.documentElement.clientWidth;
    const b = window.innerWidth;
    return a < b ? b : a;
  }

  useEffect(() => {
    let width = windowWidth();
    setIsMobile(width <= BREAKPOINT_MOBILE)
    setIsTablet(width <= BREAKPOINT_TABLET)
  }, [])

  return { isMobile, isTablet }
}
