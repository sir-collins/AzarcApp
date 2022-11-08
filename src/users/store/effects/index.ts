import { CreateUserEffects } from './create-user.effect';
import { DeleteUserEffects } from './delete-user.effect';
import { FetchUsersEffects } from './fetch-users.effect';
import { GetUserEffects } from './get-user.effect';
import { UpdateUserEffects } from './update-user.effect';

export const effects: any[] = [
  CreateUserEffects,
  DeleteUserEffects,
  FetchUsersEffects,
  GetUserEffects,
  UpdateUserEffects,
];

export * from './create-user.effect';
export * from './delete-user.effect';
export * from './fetch-users.effect';
export * from './get-user.effect';
export * from './update-user.effect';
