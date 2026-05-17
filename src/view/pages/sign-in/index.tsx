import { cn } from '@/utils/cn';

import { GoogleIcon } from '@/assets/icons/google';
import { Button } from '@/view/components/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/view/components/field';
import { Input } from '@/view/components/input';
import { Link } from '@tanstack/react-router';

export function SignIn() {
  return (
    <form className={cn('flex flex-col gap-6')}>
      <FieldGroup>
        <h1 className="text-center text-2xl font-bold">Bem-vindo de volta!</h1>

        <Field className="grid gap-4">
          <Button variant="outline" type="button">
            <GoogleIcon />

            <span className="">Entrar com o Google</span>
          </Button>
        </Field>

        <FieldSeparator>Ou continue com</FieldSeparator>

        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="machadodeassis@example.com"
            required
          />
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
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="button" asChild>
            <Link to="/">Entrar</Link>
          </Button>
        </Field>

        <FieldDescription className="text-center">
          Ainda não tem uma conta?{' '}
          <Link to="/criar-conta" className="underline underline-offset-4">
            Criar conta
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
