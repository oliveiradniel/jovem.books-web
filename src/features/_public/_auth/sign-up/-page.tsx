import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

import { SignUpSchema, type SignUpPayload } from './-schema';

export function Page() {
  const { register, handleSubmit, formState } = useForm<SignUpPayload>({
    mode: 'onChange',
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const firstNameError = formState.errors.firstName;
  const lastNameError = formState.errors.lastName;
  const emailError = formState.errors.email;
  const passwordError = formState.errors.password;
  const confirmPassordError = formState.errors.confirmPassword;

  const isFormValid = formState.isValid;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <h1 className="text-center text-2xl font-bold">Crie sua conta</h1>

        <Field className="grid gap-4">
          <Button variant="outline" type="button">
            <GoogleIcon />

            <span>Criar com o Google</span>
          </Button>
        </Field>

        <FieldSeparator>Ou preencha o formulário abaixo</FieldSeparator>

        <Field>
          <FieldLabel htmlFor="first-name">Primeiro nome</FieldLabel>

          <Input
            id="first-name"
            aria-invalid={!!firstNameError}
            type="text"
            placeholder="Machado"
            required
            className="bg-background"
            {...register('firstName')}
          />
          <FieldError>{firstNameError?.message}</FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="last-name">Último nome</FieldLabel>

          <Input
            id="last-name"
            aria-invalid={!!lastNameError}
            type="text"
            placeholder="de Assis"
            required
            className="bg-background"
            {...register('lastName')}
          />
          <FieldError>{lastNameError?.message}</FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>

          <Input
            id="email"
            aria-invalid={!!emailError}
            type="email"
            placeholder="machadodeassis@example.com"
            required
            className="bg-background"
            {...register('email')}
          />
          <FieldError>{emailError?.message}</FieldError>
          {/* 
          <FieldDescription>
            Usaremos esse e-mail entrar em contato com você.
          </FieldDescription> */}
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>

          <InputPassword
            id="password"
            aria-invalid={!!passwordError || !!confirmPassordError}
            required
            className="bg-background"
            {...register('password')}
          />

          <FieldError>{passwordError?.message}</FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="confirm-password">Confirme a senha</FieldLabel>

          <InputPassword
            id="confirm-password"
            aria-invalid={!!confirmPassordError}
            required
            className="bg-background"
            {...register('confirmPassword')}
          />

          <FieldError>{confirmPassordError?.message}</FieldError>
        </Field>

        <Field>
          <Button type="submit" disabled={!isFormValid}>
            Criar conta
          </Button>
        </Field>

        <FieldDescription className="px-6 text-center">
          Já tem uma conta? <Link to="/sign-in">Entre aqui</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
