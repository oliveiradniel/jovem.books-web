import { cn } from '@/utils/cn';

import { EyeIcon, EyeOffIcon, LockIcon } from 'lucide-react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from './InputGroup';

import { useState, type ComponentProps } from 'react';

export function InputPassword({
  className,
  ...props
}: ComponentProps<'input'>) {
  const [inputType, setInputType] = useState<'text' | 'password'>('password');

  function handleToggleTypeInput() {
    setInputType((prev) => (prev === 'text' ? 'password' : 'text'));
  }

  return (
    <InputGroup
      data-invalid={props['aria-invalid']}
      className="focus-within:[&_svg]:text-primary has-[input:not(:placeholder-shown):not([aria-invalid=true])]:[&_svg]:text-primary data-[invalid=true]:[&_svg]:text-destructive"
    >
      <InputGroupAddon>
        <LockIcon />
      </InputGroupAddon>

      <InputGroupInput
        type={inputType}
        placeholder="••••••••"
        autoComplete="current-password"
        className={cn('h-8', className)}
        {...props}
      />

      <InputGroupButton
        aria-label={inputType === 'text' ? 'Ocultar senha' : 'Mostrar senha'}
        type="button"
        size="icon-xs"
        className="text-muted-foreground mr-2 transition-opacity hover:bg-white hover:opacity-60"
        onClick={handleToggleTypeInput}
        onMouseDown={(e) => e.preventDefault()}
      >
        {inputType === 'text' ? (
          <EyeOffIcon
            data-error={!!props['aria-invalid']}
            className="data-[error=true]:text-destructive"
          />
        ) : (
          <EyeIcon
            data-error={!!props['aria-invalid']}
            className="data-[error=true]:text-destructive"
          />
        )}
      </InputGroupButton>
    </InputGroup>
  );
}
