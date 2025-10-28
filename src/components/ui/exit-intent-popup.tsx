'use client';

import { useState } from 'react';
import { useExitIntent } from '@/hooks/use-exit-intent';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MasterButton } from '@/components/ui/master-button';
import Link from 'next/link';
import { X } from 'lucide-react';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleExitIntent = () => {
    // Prevent popup on mobile and only show once per session
    if (window.innerWidth < 768 || sessionStorage.getItem('exitIntentTriggered')) {
      return;
    }
    setIsOpen(true);
    sessionStorage.setItem('exitIntentTriggered', 'true');
  };

  useExitIntent(handleExitIntent);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">Wait! Before You Go...</DialogTitle>
          <DialogDescription className="text-center text-lg">
            Get <span className="font-bold text-primary">$25 OFF</span> Your Next Plumbing Service!
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 text-center">
          <p className="text-gray-600 mb-4">
            We value your business. As a special thank you for visiting, here's a discount on your next service call.
          </p>
          <div className="bg-primary/10 border-2 border-dashed border-primary/50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Mention Code:</p>
            <p className="text-3xl font-bold text-primary tracking-widest">SAVE25</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <MasterButton asChild size="lg">
            <Link href="/booking">Book Now & Save $25</Link>
          </MasterButton>
          <MasterButton variant="outline" onClick={() => setIsOpen(false)}>
            No Thanks, I'll Pay Full Price
          </MasterButton>
        </div>
        <MasterButton
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </MasterButton>
      </DialogContent>
    </Dialog>
  );
}

