import * as z from 'zod';

export const AuthBaseSchema = z.object({
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
});
