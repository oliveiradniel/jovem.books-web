import * as z from 'zod';

import { AuthBaseSchema } from './auth-base-schema';

export const SignUpSchema = AuthBaseSchema.extend({
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
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  error: 'As senhas não coincidem.',
  path: ['confirmPassword'],
});

export type SignUpPayload = z.infer<typeof SignUpSchema>;
