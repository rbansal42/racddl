'use client';

import { useEffect, useState } from 'react';
import GalleryClient from './GalleryClient';

export default function ClientOnly() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return <GalleryClient />;
} 