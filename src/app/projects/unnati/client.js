'use client';

import { useEffect, useState } from 'react';
import UnnatiClient from './UnnatiClient';

export default function ClientOnly() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return <UnnatiClient />;
} 