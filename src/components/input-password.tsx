import { cn } from '@/utils/cn';

import { EyeIcon, EyeOffIcon } from 'lucide-react';

import { InputGroup, InputGroupButton, InputGroupInput } from './input-group';

import { useState, type ComponentProps } from 'react';

export function InputPassword({
  className,
  ...props
}: ComponentProps<'input'>) {
  const [inputType, setInputType] = useState<'text' | 'password'>('text');

  function handleToggleTypeInput() {
    setInputType((prev) => (prev === 'text' ? 'password' : 'text'));
  }

  return (
    <InputGroup>
      <InputGroupInput
        type={inputType}
        placeholder="••••••••"
        className={cn('h-8', className)}
        {...props}
      />

      <InputGroupButton
        aria-label={inputType === 'text' ? 'Ocultar senha' : 'Mostrar senha'}
        type="button"
        size="icon-xs"
        className="mr-2 hover:bg-white"
        onClick={handleToggleTypeInput}
        onMouseDown={(e) => e.preventDefault()}
      >
        {inputType === 'text' ? <EyeOffIcon /> : <EyeIcon />}
      </InputGroupButton>
    </InputGroup>
  );
}
