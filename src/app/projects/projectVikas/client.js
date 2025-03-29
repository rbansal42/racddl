'use client';

import { useEffect, useState } from 'react';
import ProjectVikasClient from './ProjectVikasClient';

export default function ClientOnly() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }
  
  return <ProjectVikasClient />;
} 