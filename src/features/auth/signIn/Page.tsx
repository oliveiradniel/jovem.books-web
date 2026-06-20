import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import axios from 'axios';

import { GoogleIcon } from '@/assets/icons/google';
import { Button } from '@/components/Button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/Field';
import { InputIcon } from '@/components/Input';
import {
  Link,
  useNavigate,
  useRouter,
  useSearch,
} from '@tanstack/react-router';
import { InputPassword } from '@/components/InputPassword';

import { SignInSchema, type SignInPayload } from './schema';
import { useAuth } from '../context/use';
import { MailIcon } from 'lucide-react';

export function SignInPage() {
  const router = useRouter();
  const search = useSearch({ from: '/_public/sign-in' });
  const navigate = useNavigate();

  const { signIn, isSigningIn } = useAuth();

  const { register, handleSubmit, formState } = useForm<SignInPayload>({
    mode: 'onChange',
    resolver: zodResolver(SignInSchema),
  });

  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn(data);

      await router.invalidate();

      await navigate({ to: search.redirect || '/dashboard' });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data?.message === 'Invalid credentials.') {
          setInvalidCredentials(true);
        }
      }
    }
  });

  const emailError = formState.errors.email;
  const passwordError = formState.errors.password;

  const isFormValid = formState.isValid;

  const clearInvalidCredentials = () => {
    if (invalidCredentials) {
      setInvalidCredentials(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
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

          <InputIcon
            id="email"
            aria-invalid={!!emailError || invalidCredentials}
            type="email"
            autoComplete="email"
            placeholder="machadodeassis@example.com"
            required
            Icon={MailIcon}
            {...register('email', {
              onChange: clearInvalidCredentials,
            })}
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
            aria-invalid={!!passwordError || invalidCredentials}
            required
            {...register('password', {
              onChange: clearInvalidCredentials,
            })}
          />

          <FieldError>{passwordError?.message}</FieldError>
          {invalidCredentials && (
            <FieldError>
              As credenciais não correspondem com uma conta em nosso sistema.
            </FieldError>
          )}
        </Field>

        <Field>
          <Button
            type="submit"
            disabled={!isFormValid || invalidCredentials}
            isLoading={isSigningIn}
            loadingText="Entrando..."
          >
            Entrar
          </Button>
        </Field>

        <FieldDescription className="text-center">
          Ainda não tem uma conta?{' '}
          <Link
            to="/sign-up"
            search={{ redirect: '' }}
            className="transition-colors"
          >
            Criar conta
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
