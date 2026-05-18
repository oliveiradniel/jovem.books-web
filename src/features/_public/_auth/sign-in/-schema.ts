import * as z from 'zod';

export const SignInSchema = z.object({
  email: z.email({ error: 'Digite um e-mail válido.' }),
  password: z
    .string()
    .min(8, { error: 'A senha deve ter no mínimo 8 caracteres.' })
    .max(128, { error: 'A senha deve ter no máximo 128 caracteres.' }),
});

export type SignInPayload = z.infer<typeof SignInSchema>;
