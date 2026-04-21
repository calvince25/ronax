'use client';

import { usePathname } from 'next/navigation';
import WhatsappIcon from './WhatsappIcon';

export default function WhatsappWrapper() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) return null;

  return <WhatsappIcon />;
}
