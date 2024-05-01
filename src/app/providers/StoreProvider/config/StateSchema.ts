import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  counter: CounterSchema;

  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
}
