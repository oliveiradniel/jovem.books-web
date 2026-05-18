import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from '@/utils/cn';

import { GoogleIcon } from '@/assets/icons/google';
import { Button } from '@/components/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/field';
import { Input } from '@/components/input';
import { Link } from '@tanstack/react-router';
import { InputPassword } from '@/components/input-password';

import { SignInSchema, type SignInPayload } from './-schema';
import { authQueries } from '../-query';
import { useMutation } from '@tanstack/react-query';

export function Page() {
  const { mutateAsync } = useMutation(authQueries.signIn());

  const { register, handleSubmit, formState } = useForm<SignInPayload>({
    mode: 'onChange',
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    await mutateAsync(data);
  });

  const emailError = formState.errors.email;
  const passwordError = formState.errors.password;

  const isFormValid = formState.isValid;

  return (
    <form onSubmit={onSubmit} className={cn('flex flex-col gap-6')}>
      <FieldGroup>
        <h1 className="text-center text-2xl font-bold">Bem-vindo de volta!</h1>

        <Field className="grid gap-4">
          <Button variant="outline" type="button">
            <GoogleIcon />

            <span>Entrar com o Google</span>
          </Button>
        </Field>

        <FieldSeparator>Ou continue com</FieldSeparator>

        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>

          <Input
            id="email"
            aria-invalid={!!emailError}
            type="email"
            placeholder="machadodeassis@example.com"
            required
            {...register('email')}
          />

          <FieldError>{emailError?.message}</FieldError>
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Senha</FieldLabel>

            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <InputPassword
            id="password"
            aria-invalid={!!passwordError}
            required
            {...register('password')}
          />

          <FieldError>{passwordError?.message}</FieldError>
        </Field>

        <Field>
          <Button type="submit" disabled={!isFormValid}>
            Entrar
          </Button>
        </Field>

        <FieldDescription className="text-center">
          Ainda não tem uma conta?{' '}
          <Link to="/sign-up" className="underline underline-offset-4">
            Criar conta
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
