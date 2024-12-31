import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

export const loginSchema = toTypedSchema(z.object({
  email: z.string({
    required_error: 'Email is required.',
    invalid_type_error: 'Email is invalid.',
  }).email('Email is invalid.'),
  password: z.string({
    required_error: 'Password is required.',
  }).min(6, 'Password must be at least 6 characters long.'),
}))
