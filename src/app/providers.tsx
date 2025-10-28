'use client';

import { Toaster } from '../components/ui/toast-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}


