'use client';

import { Toaster as Sonner, toast as sonnerToast } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

export function Toaster({ ...props }: ToasterProps) {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
}

export const toast = {
  success(title: string, description?: string) {
    return sonnerToast.success(title, {
      description,
    });
  },
  error(title: string, description?: string) {
    return sonnerToast.error(title, {
      description,
    });
  },
  info(title: string, description?: string) {
    return sonnerToast.info(title, {
      description,
    });
  },
  warning(title: string, description?: string) {
    return sonnerToast.warning(title, {
      description,
    });
  },
};
