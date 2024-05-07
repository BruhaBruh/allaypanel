import { clientEnvSchema } from '@/client/lib/env';
import { z } from 'zod';

const envSchema = z
  .object({
    HOST: z.string().ip({ version: 'v4' }).default('0.0.0.0'),
    PORT: z
      .preprocess(
        (arg) => Number.parseInt(arg?.toString() || '3000', 10),
        z.number().min(1).max(65535)
      )
      .default(3000),
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  })
  .merge(clientEnvSchema);

export const env = envSchema.parse(process.env);
