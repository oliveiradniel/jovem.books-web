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

export function Signup() {
  return (
    <form className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Crie sua conta</h1>

          <p className="text-muted-foreground text-sm text-balance">
            Preparado para cumprir metas?
          </p>
        </div>

        <Field className="grid gap-4">
          <Button variant="outline" type="button">
            <GoogleIcon />

            <span>Criar com o Google</span>
          </Button>
        </Field>

        <FieldSeparator>Ou preencha o formulário abaixo</FieldSeparator>

        <Field>
          <FieldLabel htmlFor="name">Nome completo</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="Machado de Assis"
            required
            className="bg-background"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="machadodeassis@example.com"
            required
            className="bg-background"
          />
          <FieldDescription>
            Usaremos esse e-mail entrar em contato com você.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input
            id="password"
            type="password"
            required
            className="bg-background"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirme a senha</FieldLabel>
          <Input
            id="confirm-password"
            type="password"
            required
            className="bg-background"
          />
        </Field>
        <Field>
          <Button type="submit">Criar conta</Button>
        </Field>

        <FieldDescription className="px-6 text-center">
          Já tem uma conta? <Link to="/entrar">Entre aqui</Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
