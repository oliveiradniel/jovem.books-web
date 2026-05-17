import * as z from 'zod';

import { AuthBaseSchema } from './auth-base-schema';

export const SignInSchema = AuthBaseSchema;

export type SignInPayload = z.infer<typeof SignInSchema>;
