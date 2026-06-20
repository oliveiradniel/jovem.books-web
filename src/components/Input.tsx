import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import type { LucideIcon } from 'lucide-react';

import { InputGroup, InputGroupAddon, InputGroupInput } from './InputGroup';

function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-input file:text-foreground placeholder:text-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-9 w-full min-w-0 rounded-md border bg-transparent px-2.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 md:text-sm',
        className,
      )}
      {...props}
    />
  );
}

function InputIcon({
  className,
  Icon,
  ...props
}: { Icon?: LucideIcon } & ComponentProps<'input'>) {
  return (
    <InputGroup
      data-invalid={props['aria-invalid']}
      className="focus-within:[&_svg]:text-primary has-[input:not(:placeholder-shown):not([aria-invalid=true])]:[&_svg]:text-primary data-[invalid=true]:[&_svg]:text-destructive"
    >
      {Icon && (
        <InputGroupAddon>
          <Icon />
        </InputGroupAddon>
      )}

      <InputGroupInput className={cn('h-8', className)} {...props} />
    </InputGroup>
  );
}

export { Input, InputIcon };
