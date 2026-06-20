import * as React from 'react';

import { Slot } from 'radix-ui';

import { cn } from '@/utils/cn';
import { buttonVariants } from './variants';

import { Loader2Icon } from 'lucide-react';

import type { VariantProps } from 'class-variance-authority';

export function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  disabled,
  isLoading,
  loadingText,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    loadingText?: string;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      disabled={disabled || isLoading}
      className={cn(
        buttonVariants({ variant, size, className }),
        (disabled || isLoading) && 'pointer-events-none',
      )}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2Icon className="size-4 animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </Comp>
  );
}
