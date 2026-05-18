import * as z from 'zod';

export const SignUpSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(3, { error: 'O nome deve ter no mínimo 3 caracteres.' })
      .max(32, { error: 'O nome deve ter no máximo 32 caracteres.' })
      .refine((value) => !value.includes(' '), {
        error: 'Digite apenas seu primeiro nome.',
      })
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/, {
        error: 'O nome deve ter apenas letras.',
      }),
    lastName: z
      .string()
      .trim()
      .min(3, { error: 'O sobrenome deve ter no mínimo 3 caracteres.' })
      .max(32, { error: 'O sobrenome deve ter no máximo 32 caracteres.' })
      .refine((value) => /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(value), {
        error: 'O sobrenome deve ter apenas letras.',
      })
      .refine((value) => value.split(/\s+/).length <= 2, {
        error: 'Digite apenas seu sobrenome.',
      })
      .refine(
        (value) => {
          const parts = value.split(/\s+/);

          if (parts.length === 2) {
            return parts[0].length >= 2 && parts[0].length <= 3;
          }

          return true;
        },
        {
          error: 'Use conectivos curtos como: "de", "da" ou "dos".',
        },
      ),
    email: z.email({ error: 'Digite um e-mail válido.' }),
    password: z
      .string()
      .min(8, { error: 'A senha deve ter no mínimo 8 caracteres.' })
      .max(128, { error: 'A senha deve ter no máximo 128 caracteres.' })
      .regex(/[A-Z]/, 'A senha deve ter pelo menos uma letra maiúscula.')
      .regex(/[a-z]/, 'A senha deve ter pelo menos uma letra minúscula.')
      .regex(/[0-9]/, 'A senha deve ter pelo menos um número.')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'A senha deve ter pelo menos um caractere especial',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  });

export type SignUpPayload = z.infer<typeof SignUpSchema>;
